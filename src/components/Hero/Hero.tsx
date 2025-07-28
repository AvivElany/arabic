import './Hero.css'

/*interface IHeroProps {

}*/

export default function Hero(/*props: IHeroProps*/) {

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>ברוכים הבאים לאתר לימוד ערבית ללוחמי <span className='unit'>גדוד 9311</span></h1>
                <p>למד לתקשר בצורה יעילה בשטח עם שיחונים פשוטים, אוצר מילים שימושי למבצעים, ותרגולים פיזיים מותאמים לכל פלוגה.</p>
                <a href="#Importance" className="hero-button">התחל ללמוד עכשיו</a>
            </div>
        </section>
    )
}
