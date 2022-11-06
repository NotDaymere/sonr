import "./header.scss";

//img
import Logo from "../../assets/img/logo.svg";

function Header () {


    return (
        <header className="header">
            <div className="wr">
                <div className="header-content">
                    <div className="header-logo">
                        <a href="#">
                            <img src={Logo} alt="#"/>
                        </a>
                    </div>
                    <div className="header-block">
                        <button className="header-button">
                            {new Array(4).fill('').map((_, index) => (
                                <span key={index}>
                                    <span />
                                </span>
                            ))}
                        </button>
                        <div className="header-nav">
                            <ul>
                                <li>
                                    <a href="#">About</a>
                                </li>
                                <li>
                                    <a href="#">Technology</a>
                                </li>
                                <li>
                                    <a href="#">Documentation</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;