import "./Footer.css"

function Footer(){
    return(
        <footer className="footer">
            <div className="container">
                <div className="email">
                    <div className="email__title">
                        <p>Stay in Touch</p>
                    </div>
                    <div className="email__inp">
                        <input type="email" placeholder="Enter your email address"/>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="bottom__wrapper">
                    <div className="bottom__logo">
                        <h1>Escape.</h1>
                    </div>
                    <ul className="bottom__collection">
                        <li className="bottom__item">
                            <a href="#" className="bottom__link">
                                <span>HOME</span>
                            </a>
                        </li>
                        <li className="bottom__item">
                            <a href="#" className="bottom__link">
                                <span>Categories</span>
                            </a>
                        </li>
                        <li className="bottom__item">
                            <a href="#" className="bottom__link">
                                <span>About</span>
                            </a>
                        </li>
                        <li className="bottom__item">
                            <a href="#" className="bottom__link">
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
        </footer>
    )
}

export default Footer