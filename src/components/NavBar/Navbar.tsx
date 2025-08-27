import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './Navbar.css'
import { 
    FaHome, 
    FaUser, 
    FaSearch, 
    FaExclamationTriangle, 
    FaShieldAlt, 
    FaBook, 
    FaLanguage, 
    FaPhone 
} from 'react-icons/fa'

/*interface INavbarProps {

}*/

const elmDocument = document.querySelector('html') as HTMLHtmlElement

export default function Navbar(/*props: INavbarProps*/) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Function to close the navbar when a link is clicked
    const closeNavbar = () => {
        setIsNavOpen(false);
    };

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };

    useEffect(()=>{
    const lsTheme = localStorage.getItem('theme')

    if (lsTheme) {
      // found theme key
        elmDocument.setAttribute('data-bs-theme',lsTheme)
    } else {
      // theme key not found
        localStorage.setItem('theme','light')
        elmDocument.setAttribute('data-bs-theme','light')
    }
    },[])

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bottom-navbar" data-bs-theme='dark'>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src="/picture/symbol_white.jpg" alt="logo" className="main-symbol" />
                    <h5 className="nav-name">פק"ל ערבית ללוחמי גדוד 9311</h5>
                </Link>
                <button 
                    className="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#navbarNavDropdown" 
                    aria-controls="navbarNavDropdown" 
                    aria-expanded={isNavOpen} 
                    aria-label="Toggle navigation" 
                    onClick={toggleNavbar}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active homePage" aria-current="page" to="/" onClick={closeNavbar}>
                                עמוד הבית
                                <FaHome className="nav-icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/DevPage" onClick={closeNavbar}>
                                אודות
                                <FaUser className="nav-icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/suspect" onClick={closeNavbar}>
                                נוהל מעצר חשוד
                                <FaSearch className="nav-icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/arrest" onClick={closeNavbar}>
                                מעצר מבוקש
                                <FaExclamationTriangle className="nav-icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/checkpost" onClick={closeNavbar}>
                                צ'קפוסט
                                <FaShieldAlt className="nav-icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/vocabulary" onClick={closeNavbar}>
                                אוצר מילים
                                <FaBook className="nav-icon" />
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/arabic-alphabet" onClick={closeNavbar}>
                                אלפבית ערבי
                                <FaLanguage className="nav-icon" />
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/combat-interrogation" onClick={closeNavbar}>
                                מבוא לתשאול קרבי
                                <GiInternalInjury className="nav-icon" />
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" onClick={closeNavbar}>
                                צור קשר
                                <FaPhone className="nav-icon" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
