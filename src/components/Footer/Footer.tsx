import { Link } from 'react-router'
import './Footer.css'

/*interface IFooterProps {

}*/

export default function Footer(/*props: IFooterProps*/) {

    return (
        <div className="Footer">
            <div className='footer-parts'>
                <div className="footer-part1">
                    הפרויקט נוצר באהבה גדולה ובהתנדבות ומיועד לכם ובשבילכם. גם אם הוא עזר במעט הוא מילא את ייעודו בהצלחה!<br />
                    אם יש לכם שאלות, הערות, בקשות או סתם רוצים לדבר על ערבית, אתם מוזמנים לפנות אליי דרך הטופס צור קשר או דרך המייל <br />
                    <Link to="contact" className="contact-link">צור קשר</Link>
                </div>

                <div className="footer-part2">
                    <h3>ניווט מהיר</h3>
                <ul>
                    <li><Link to="/">דף הבית</Link></li>
                    <li><a href="https://milon.madrasafree.com/" target='_blank'>מילון ערבי-עברי</a></li>
                    <li><a href='https://www.arabic-keyboard.org/' target='_blank'>מקלדת ערבית</a></li>
                    <li><a href='https://he.wikipedia.org/wiki/%D7%A2%D7%A8%D7%91%D7%99%D7%AA' target='_blank'>ערבית - ויקיפדיה</a></li>
                </ul>
                </div>

                <div className="footer-part3">
                    <img src="/picture/logo.jpg" alt="9311_unit_logo" className="symbol" />
                </div>
            </div>

            <div className="footer-credits">
                <p>כל הזכויות שמורות לאביב אילני | © {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}
