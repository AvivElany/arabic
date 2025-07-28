import './Hero.css'

/*interface IHeroProps {

}*/

export default function Hero(/*props: IHero.HeroProps*/) {

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>ברוכים הבאים למערכת ללימוד ערבית ללוחמים</h1>
                <p>למד לתקשר בצורה יעילה בשטח עם שיחונים פשוטים, אוצר מילים שימושי למבצעים, ותרגולים פיזיים מותאמים לכל פלוגה.</p>
                <a href="#lessons" className="hero-button">התחל ללמוד עכשיו</a>
            </div>
        </section>
    )
}
