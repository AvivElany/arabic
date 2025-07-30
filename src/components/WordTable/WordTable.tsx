import './WordTable.css'

interface IWord {
    hebrew: string;
    taatik: string;
    arabic: string;
    english: string;
}

interface IWordTableProps {
    words: IWord[];
    category: string;
}

export default function WordTable({ words, category }: IWordTableProps) {
    return (
        <div className="WordTable">
            <div className="WordTable__category">
                <h3 className="WordTable__category-title">{category}</h3>
            </div>
            
            <div className="WordTable__container">
                <table className="WordTable__table">
                    <thead>
                        <tr>
                            <th>עברית</th>
                            <th>תעתיק</th>
                            <th>ערבית</th>
                            <th>אנגלית</th>
                        </tr>
                    </thead>
                    <tbody>
                        {words.map((word, index) => (
                            <tr key={index} className="WordTable__row">
                                <td className="WordTable__cell WordTable__cell--hebrew">{word.hebrew}</td>
                                <td className="WordTable__cell WordTable__cell--taatik">{word.taatik}</td>
                                <td className="WordTable__cell WordTable__cell--arabic">{word.arabic}</td>
                                <td className="WordTable__cell WordTable__cell--english">{word.english}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
