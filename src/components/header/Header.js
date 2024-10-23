import "./Header.css"
import menu from "../assets/hamburger.png"


function Header(){
    return (
        <header className="header">
            <div className="container">
                <nav className="navbar">
                    <div className="navbar__logo">
                        <h1>Escape.</h1>
                    </div>
                    <ul className="navbar__collection">
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span>HOME</span>
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span>Categories</span>
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span>About</span>
                            </a>
                        </li>
                        <li className="navbar__item">
                            <a href="#" className="navbar__link">
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                    <div className="navbar__menu">
                        <img src={menu} alt="" />
                    </div>
                </nav>
                <div className="navbar__text">
                    <h2>Let's do it together.</h2>
                    <p>We travel the world in search of stories. Come along for the ride.</p>
                    <button>View Latest Posts</button>
                </div>
            </div>
        </header>
    )
}

export default Header