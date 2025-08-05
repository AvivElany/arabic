import { Link } from 'react-router'
import DeveloperCard from '../../components/DeveloperCard/DeveloperCard'
import Title from '../../components/Title/Title'
import './DevPage.css'

/*interface IDevPageProps {

}*/

export default function DevPage(/*props: IDevPageProps*/) {

    return (
        <div className='DevPage'>
            <Title title="אודות" />
            <p className='greeting'>
                שלום וברוכים הבאים לפק"ל שיחון ערבית שמוכוון כולו ללוחמים בשטח שמחסום הערבית מהווה להם בעיה מבצעית. <br />
                הפק"ל נבנה על ידי לוחם ומתשאל, עבור לוחמים, מתוך מטרה להקל על הלוחם בשטח ולתת לו את הכלים הבסיסיים ביותר כדי שיוכל לתפקד בשטח בצורה טובה יותר. <br />
                הפק"ל נבדק ועבר עריכה לשונית מקיפה על ידי אנשי מודיעין ולהם תודה רבה על ההירתמות לדבר. <br />
                הפק"ל כולל את כל המילים והמשפטים הנדרשים ללוחם בשטח, עם תעתיק עברי ותרגום לאנגלית. <br /><br />
                אם מצאתם מילה או משפט שחסר, או שיש לכם הערות, הצעות או שאלות, אתם מוזמנים לפנות אלי דרך הטופס <Link to="/contact">צור קשר</Link>. <br />
            </p>
            <DeveloperCard />
        </div>
    )
}
