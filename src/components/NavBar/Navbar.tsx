import { Link } from 'react-router-dom'
import './Navbar.css'

/*interface INavbarProps {

}*/

export default function Navbar(/*props: INavbarProps*/) {

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary bottom-navbar" data-bs-theme='dark'>
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src="/picture/symbol_white.jpg" alt="9311_unit_logo" className="main-symbol" />
                    <h5 className="nav-name">פק"ל ערבית עם גדוד 9311</h5>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">עמוד הבית</Link>
                        </li>
                        <li><Link className="nav-link" to="/Namach">נוהל מעצר חשוד</Link></li>
                        <li><Link className="nav-link" to="/arrest">מעצר</Link></li>
                        <li><Link className="nav-link" to="/Checkpost">צ'קפוסט</Link></li>
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
                    </ul>
                </div>
            </div>
        </nav>
    )
}
