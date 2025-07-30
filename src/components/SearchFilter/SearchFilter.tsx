import { useState } from 'react'
import './SearchFilter.css'

interface ISearchFilterProps {
    onSearch: (searchTerm: string) => void;
    placeholder?: string;
}

export default function SearchFilter({ onSearch, placeholder = "חפש מילה..." }: ISearchFilterProps) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);
        onSearch(value);
    };

    const clearSearch = () => {
        setSearchTerm('');
        onSearch('');
    };

    return (
        <div className="SearchFilter">
            <div className="SearchFilter__container">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="SearchFilter__input"
                />
                {searchTerm && (
                    <button 
                        onClick={clearSearch}
                        className="SearchFilter__clear"
                        aria-label="נקה חיפוש"
                    >
                        ✕
                    </button>
                )}
                <div className="SearchFilter__icon">🔍</div>
            </div>
        </div>
    )
}
