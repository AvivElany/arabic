import { useEffect } from 'react'
import './Arrest.css'
import Title from '../../components/Title/Title';
import Summary from '../../components/Summary/Summary';
import Board from '../../components/Board/Board';
import { arrest } from '../../data/data';

/*interface IArrestProps {

}*/

export default function Arrest(/*props: IArrestProps*/) {

    useEffect(() => {
        

    }, []);

    return (
        <div className='Arrest'>
            <Title title="מעצר מבוקש" />
            <Summary summary="ככלל - בעיקר מבחינה מבצעית, נעדיף להתנהל מול גורם אחד שהוא יקרא בעל הבית שיפעיל וישלוט בבני הבית. הרבה יותר קל להתנהל הול אדם אחד מאשר עם קבוצה בעיקר מבחינה לשונית. בעיקר מבחינת אלמנט השליטה שיש לבעל הבית בחברה הערבית ופה נשתמש בזה לטובתנו. שכן נוכל להתמקד במשימה, באבטחה ולא בהתדיינות עמוקה לחינם." />
            <Board data={arrest} />
        </div>
    )
}
