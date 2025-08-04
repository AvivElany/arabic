import './Vocabulary.css'
import { vocabulary } from '../../data/vocabulary'
import WordTable from '../../components/WordTable/WordTable'
import SearchFilter from '../../components/SearchFilter/SearchFilter'
import { useState } from 'react'
import Title from '../../components/Title/Title'

export default function Vocabulary() {
    const [searchTerm, setSearchTerm] = useState('');

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

    // סטטיסטיקות החיפוש
    const filteredCategories = filteredVocabulary.length;
    const filteredWords = filteredVocabulary.reduce((sum, category) => sum + category.words.length, 0);

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

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
            </div>
            
            <div className="Vocabulary-tables">

                {/* תוכן עיקרי */}
                <div className="Vocabulary__content">
                    {(searchTerm ? filteredVocabulary : vocabulary).map((categoryData, index) => (
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
