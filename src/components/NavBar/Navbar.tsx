import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'
/* import { useEffect, useState } from 'react'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs' */

/*interface INavbarProps {

}*/

/* const elmDocument = document.querySelector('html') as HTMLHtmlElement */

export default function Navbar(/*props: INavbarProps*/) {
    const [isNavOpen, setIsNavOpen] = useState(false);

    // Function to close the navbar when a link is clicked
    const closeNavbar = () => {
        setIsNavOpen(false);
    };

    const toggleNavbar = () => {
        setIsNavOpen(!isNavOpen);
    };

    /* const [theme, setTheme] = useState('dark') */


    /* useEffect(()=>{
    const lsTheme = localStorage.getItem('theme')

    if (lsTheme) {
      // found theme key
      elmDocument.setAttribute('data-bs-theme',lsTheme)
      setTheme(lsTheme)
    } else {
      // theme key not found
      localStorage.setItem('theme','light')
      elmDocument.setAttribute('data-bs-theme','light')
      setTheme('light')
    }
    },[]) */

    /* const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light'; // Determine the new theme based on the current one
        setTheme(newTheme); // Update the state with the new theme
        elmDocument.setAttribute('data-bs-theme', newTheme); // Set the attribute based on the new theme
        localStorage.setItem('theme', newTheme)
    } */

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bottom-navbar" data-bs-theme='dark'>
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src="/picture/symbol_white.jpg" alt="9311_unit_logo" className="main-symbol" />
                    <h5 className="nav-name">פק"ל ערבית עם גדוד 9311</h5>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded={isNavOpen} aria-label="Toggle navigation" onClick={toggleNavbar}>
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" onClick={closeNavbar}>עמוד הבית</Link>
                        </li>
                        <li><Link className="nav-link" to="/namach" onClick={closeNavbar}>נוהל מעצר חשוד</Link></li>
                        <li><Link className="nav-link" to="/arrest" onClick={closeNavbar}>מעצר חשוד</Link></li>
                        <li><Link className="nav-link" to="/checkpost" onClick={closeNavbar}>צ'קפוסט</Link></li>
                        <li><Link className="nav-link" to="/vocabulary" onClick={closeNavbar}>אוצר מילים</Link></li>
                        <li><Link className="nav-link" to="/arabic-alphabet" onClick={closeNavbar}>אלפבית ערבי</Link></li>
                        <li><Link className="nav-link" to="/contact" onClick={closeNavbar}>צור קשר</Link></li>
                        {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            מבצעי
                        </a>
                        <ul className="dropdown-menu dropdown-menu-up">
                            <li><Link className="nav-link" to="/Namach">נוהל מעצר חשוד</Link></li>
                            <li><Link className="nav-link" to="/arrest">מעצר</Link></li>
                            <li><Link className="nav-link" to="/Checkpost">צ'קפוסט</Link></li>
                        </ul>
                        </li> */}

                        {/* 
                        <li className="nav-link dmBtn">
                            <button type="button" className='dark-light-mode-button' onClick={() => toggleTheme()}>
                                
                                {
                                theme === 'light' ?
                                    <BsFillMoonStarsFill size={18} fill='#000070'/>
                                :
                                    <BsFillSunFill size={18} fill='#FFFFB0'/>
                                }
                            </button>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}
