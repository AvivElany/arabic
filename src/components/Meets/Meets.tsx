import { FaCarSide, FaClipboardList, FaMapMarkedAlt, FaShieldAlt, FaWalking } from 'react-icons/fa'
import './Meets.css'
import { FaHandcuffs } from 'react-icons/fa6'

/*interface IMeetsProps {

}*/

export default function Meets(/*props: IMeetsProps*/) {

    return (
        <div className='Meets'>
            <h1 dir='rtl'>איפה השפה הערבית פוגשת אותנו?</h1>
            <p>כאן תוכל למצוא מידע על מפגשים שונים.</p>
            <div className="theMeets">
                <div className='meet-item'>
                    <div className="meet-icon">
                        <FaCarSide />
                    </div>
                    <div className="meet-info">
                        סיורים
                    </div>
                </div>
                <div className='meet-item'>
                    <div className="meet-icon">
                        <FaHandcuffs />
                    </div>
                    <div className="meet-info">
                        מעצרים
                    </div>
                </div>
                <div className='meet-item'>
                    <div className="meet-icon">
                        <FaMapMarkedAlt />
                    </div>
                    <div className="meet-info">
                        מיפויים
                    </div>
                </div>
                <div className='meet-item'>
                    <div className="meet-icon">
                        <FaShieldAlt />
                    </div>
                    <div className="meet-info">
                        אבטחת צמתים
                    </div>
                </div>
                <div className='meet-item'>
                    <div className="meet-icon">
                        <FaClipboardList />
                    </div>
                    <div className="meet-info">
                        צ'קפוסט
                    </div>
                </div>
                <div className='meet-item'>
                    <div className="meet-icon">
                        <FaWalking />
                    </div>
                    <div className="meet-info">
                        פטרול בכפרים
                    </div>
                </div>
            </div>
        </div>
    )
}
