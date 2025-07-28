import './Footer.css'

/*interface IFooterProps {

}*/

export default function Footer(/*props: IFooterProps*/) {

    return (
        <div className="Footer">
            <div className='footer-parts'>
                <div className="footer-part1">
                    צד ימין
                </div>

                <div className="footer-part2">
                    <h3>ניווט מהיר</h3>
                <ul>
                    <li><a href="#home">דף הבית</a></li>
                    <li><a href="https://milon.madrasafree.com/" target='_blank'>מילון ערבי-עברי</a></li>
                    <li><a href="#dictionary" target='_blank'>אוצר מילים</a></li>
                    <li><a href="#quiz">תרגול</a></li>
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
