import './Vocabulary.css'
import { vocabulary } from '../../data/vocabulary'
import WordTable from '../../components/WordTable/WordTable'
import SearchFilter from '../../components/SearchFilter/SearchFilter'
import { useState } from 'react'
import Title from '../../components/Title/Title'

export default function Vocabulary() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    // פילטור על פי החיפוש
    const filteredVocabulary = vocabulary.map(category => ({
        ...category,
        words: category.words.filter(word => 
            word.hebrew.toLowerCase().includes(searchTerm.toLowerCase()) ||
            word.taatik.toLowerCase().includes(searchTerm.toLowerCase()) ||
            word.arabic.includes(searchTerm) ||
            word.english.toLowerCase().includes(searchTerm.toLowerCase())
        )
    })).filter(category => category.words.length > 0);

    // פילטור על פי קטגוריה נבחרת
    const categoryFilteredVocabulary = selectedCategory 
        ? vocabulary.filter(category => category.category === selectedCategory)
        : vocabulary;

    // הצגת הנתונים הסופיים - אם יש חיפוש, להציג תוצאות חיפוש, אחרת להציג על פי קטגוריה
    const displayedVocabulary = searchTerm ? filteredVocabulary : categoryFilteredVocabulary;

    // סטטיסטיקות החיפוש
    const filteredCategories = filteredVocabulary.length;
    const filteredWords = filteredVocabulary.reduce((sum, category) => sum + category.words.length, 0);

    const handleSearch = (term: string) => {
        setSearchTerm(term);
        // אם מתחילים לחפש, לנקות את הקטגוריה הנבחרת
        if (term) {
            setSelectedCategory(null);
        }
    };

    const handleCategorySelect = (category: string | null) => {
        setSelectedCategory(category);
        // אם בוחרים קטגוריה, לנקות את החיפוש
        if (category) {
            setSearchTerm('');
        }
    };

    // קבלת כל שמות הקטגוריות
    const allCategories = vocabulary.map(item => item.category);

    return (
        <div className='Vocabulary'>
            <div className="Vocabulary-search">
                <Title title="אוצר מילים" />
                
                {/* חיפוש */}
                <SearchFilter 
                    onSearch={handleSearch}
                    placeholder="חפש מילה בעברית, תעתיק, ערבית או אנגלית..."
                />
                
                {/* הודעת תוצאות חיפוש */}
                {searchTerm && (
                    <div className="Vocabulary__search-results">
                        נמצאו {filteredWords} מילים ב־{filteredCategories} קטגוריות עבור "{searchTerm}"
                    </div>
                )}

                {/* כפתורי קטגוריות - מוצגים רק כשאין חיפוש */}
                {!searchTerm && (
                    <div className="Vocabulary__categories">
                        <div className="category-buttons">
                            <button 
                                className={`category-btn ${selectedCategory === null ? 'active' : ''}`}
                                onClick={() => handleCategorySelect(null)}
                            >
                                הכל
                            </button>
                            {allCategories.map((category, index) => (
                                <button 
                                    key={index}
                                    className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                                    onClick={() => handleCategorySelect(category)}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        
                        {/* הודעת קטגוריה נבחרת */}
                        {selectedCategory && (
                            <div className="Vocabulary__category-info">
                                מציג קטגוריה: <strong>{selectedCategory}</strong>
                            </div>
                        )}
                    </div>
                )}
            </div>
            
            <div className="Vocabulary-tables">
                {/* תוכן עיקרי */}
                <div className="Vocabulary__content">
                    {displayedVocabulary.map((categoryData, index) => (
                        <WordTable 
                            key={index}
                            category={categoryData.category}
                            words={categoryData.words}
                        />
                    ))}
                    
                    {searchTerm && filteredVocabulary.length === 0 && (
                        <div className="Vocabulary__no-results">
                            <h3>לא נמצאו תוצאות</h3>
                            <p>נסה לחפש במילה אחרת או נקה את החיפוש</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
