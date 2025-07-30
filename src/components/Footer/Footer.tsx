import './Footer.css'

/*interface IFooterProps {

}*/

export default function Footer(/*props: IFooterProps*/) {

    return (
        <div className="Footer">
            <div className='footer-parts'>
                <div className="footer-part1">
                    הפרויקט נוצר באהבה גדולה ובהתנדבות ומיועד לכם ובשבילכם. <br/> גם אם הוא עזר במעט הוא מילא את ייעודו בהצלחה!<br />
                </div>

                <div className="footer-part2">
                    <h3>ניווט מהיר</h3>
                <ul>
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
                <p>כל הזכויות שמורות ל<a href='https://portfolio-avivelanys.vercel.app/' target='_blank' className='god'>אביב אילני מפתח פולסטאק</a> | © {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}
