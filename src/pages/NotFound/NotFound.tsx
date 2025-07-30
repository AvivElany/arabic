import { Link } from 'react-router-dom'
import './NotFound.css'

export default function NotFound() {
    return (
        <div className='NotFound'>
            <div className='notfound-container'>
                <div className='notfound-content'>
                    <div className='notfound-text'>
                        <h1 className='notfound-title'>404</h1>
                        <h2 className='notfound-subtitle'>עמוד לא נמצא</h2>
                        <p className='notfound-description'>
                            מצטערים, הדף שאתם מחפשים לא קיים או הועבר למקום אחר.
                            <br />
                            ייתכן שהקישור שגוי או שהדף הוסר.
                        </p>
                        
                        <div className='notfound-actions'>
                            <Link to="/" className='btn-home'>
                                חזרה לעמוד הבית
                            </Link>
                            <button 
                                onClick={() => window.history.back()} 
                                className='btn-back'
                            >
                                חזור אחורה
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className='notfound-footer'>
                    <p>אם אתם חושבים שזו טעות, <Link to="/contact" className='notfound-footer-link'>אנא צרו איתנו קשר</Link></p>
                </div>
            </div>
        </div>
    )
}
