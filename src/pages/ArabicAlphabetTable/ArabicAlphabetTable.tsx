import Title from '../../components/Title/Title';
import './ArabicAlphabetTable.css'

export default function ArabicAlphabetTable() {

    const letters = [
        { name: "אַלִיף", isolated: "ا", initial: "ا", medial: "ـا", final: "ـا", hebrew: "א" },
        { name: "בַּא", isolated: "ب", initial: "بـ", medial: "ـبـ", final: "ـب", hebrew: "ב" },
        { name: "תַּא", isolated: "ت", initial: "تـ", medial: "ـتـ", final: "ـت", hebrew: "ת" },
        { name: "ת׳ַא", isolated: "ث", initial: "ثـ", medial: "ـثـ", final: "ـث", hebrew: "ת׳" },
        { name: "ג'ִים", isolated: "ج", initial: "جـ", medial: "ـجـ", final: "ـج", hebrew: "ג'" },
        { name: "חַא", isolated: "ح", initial: "حـ", medial: "ـحـ", final: "ـح", hebrew: "ח" },
        { name: "ח׳ַא", isolated: "خ", initial: "خـ", medial: "ـخـ", final: "ـخ", hebrew: "ח׳" },
        { name: "דַאל", isolated: "د", initial: "د", medial: "ـد", final: "ـد", hebrew: "ד" },
        { name: "ד׳ַאל", isolated: "ذ", initial: "ذ", medial: "ـذ", final: "ـذ", hebrew: "ד׳" },
        { name: "רַא", isolated: "ر", initial: "ر", medial: "ـر", final: "ـر", hebrew: "ר" },
        { name: "זַיִן", isolated: "ز", initial: "ز", medial: "ـز", final: "ـز", hebrew: "ז" },
        { name: "סִין", isolated: "س", initial: "سـ", medial: "ـسـ", final: "ـس", hebrew: "ס" },
        { name: "שִין", isolated: "ش", initial: "شـ", medial: "ـشـ", final: "ـش", hebrew: "ש" },
        { name: "צַאד", isolated: "ص", initial: "صـ", medial: "ـصـ", final: "ـص", hebrew: "צ" },
        { name: "צ׳ַאד", isolated: "ض", initial: "ضـ", medial: "ـضـ", final: "ـض", hebrew: "צ׳" },
        { name: "טַא", isolated: "ط", initial: "طـ", medial: "ـطـ", final: "ـط", hebrew: "ט" },
        { name: "ט׳ַא", isolated: "ظ", initial: "ظـ", medial: "ـظـ", final: "ـظ", hebrew: "ט׳" },
        { name: "עַיִן", isolated: "ع", initial: "عـ", medial: "ـعـ", final: "ـع", hebrew: "ע" },
        { name: "ע׳ַיִן", isolated: "غ", initial: "غـ", medial: "ـغـ", final: "ـغ", hebrew: "ע׳" },
        { name: "פַא", isolated: "ف", initial: "فـ", medial: "ـفـ", final: "ـف", hebrew: "פ" },
        { name: "קַאף", isolated: "ق", initial: "قـ", medial: "ـقـ", final: "ـق", hebrew: "ק" },
        { name: "כַאף", isolated: "ك", initial: "كـ", medial: "ـكـ", final: "ـك", hebrew: "כ" },
        { name: "לַאם", isolated: "ل", initial: "لـ", medial: "ـلـ", final: "ـل", hebrew: "ל" },
        { name: "מִים", isolated: "م", initial: "مـ", medial: "ـمـ", final: "ـم", hebrew: "מ" },
        { name: "נוּן", isolated: "ن", initial: "نـ", medial: "ـنـ", final: "ـن", hebrew: "נ" },
        { name: "הַא", isolated: "ه", initial: "هـ", medial: "ـهـ", final: "ـه", hebrew: "ה" },
        { name: "וַאו", isolated: "و", initial: "و", medial: "ـو", final: "ـو", hebrew: "ו" },
        { name: "יַא", isolated: "ي", initial: "يـ", medial: "ـيـ", final: "ـي", hebrew: "י" },
    ];



    return (
        <div className="alphabet-container">
            <Title title="טבלת האלפבית הערבי" />
            {/* מידע כללי */}
            <div className="alphabet-info">
                <div className="info-card">
                    <h3>🔤 סך הכל אותיות</h3>
                    <p className="info-number">{letters.length}</p>
                </div>
                <div className="info-card">
                    <h3>🔄 צורות שונות</h3>
                    <p className="info-text">כל אות יכולה להופיע ב-4 צורות שונות</p>
                </div>
                <div className="info-card">
                    <h3>📖 כיוון כתיבה</h3>
                    <p className="info-text">מימין לשמאל</p>
                </div>
            </div>

            {/* הטבלה */}
            <div className="alphabet-table-wrapper">
                <table className="alphabet-table">
                    <thead>
                        <tr>
                            <th>שם האות</th>
                            <th>צורה בודדת</th>
                            <th>בתחילת מילה</th>
                            <th>באמצע מילה</th>
                            <th>בסוף מילה</th>
                            <th>תעתיק עברי</th>
                        </tr>
                    </thead>
                    <tbody>
                        {letters.map((letter, index) => (
                            <tr key={index} className="letter-row">
                                <td className="letter-name">{letter.name}</td>
                                <td className="arabic-letter isolated">{letter.isolated}</td>
                                <td className="arabic-letter initial">{letter.initial}</td>
                                <td className="arabic-letter medial">{letter.medial}</td>
                                <td className="arabic-letter final">{letter.final}</td>
                                <td className="hebrew-letter">{letter.hebrew}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                
            </div>

            {/* הסבר על הצורות השונות */}
            <div className="forms-explanation">
                <h3><span className='letter-explanation-symbol'>💡</span> הסבר על הצורות השונות של האותיות</h3>
                <div className="explanation-grid">
                    <div className="explanation-item">
                        <h4>🔹 צורה בודדת</h4>
                        <p>כאשר האות עומדת לבדה או בסוף מילה שלא מתחברת</p>
                    </div>
                    <div className="explanation-item">
                        <h4>🔸 בתחילת מילה</h4>
                        <p>כאשר האות פותחת מילה ומתחברת לאות הבאה</p>
                    </div>
                    <div className="explanation-item">
                        <h4>🔹 באמצע מילה</h4>
                        <p>כאשר האות נמצאת באמצע ומתחברת משני הצדדים</p>
                    </div>
                    <div className="explanation-item">
                        <h4>🔸 בסוף מילה</h4>
                        <p>כאשר האות סוגרת את המילה ומתחברת מהצד הימני</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
