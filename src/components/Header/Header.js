import {useState, useMemo} from "react";
import "./header.scss";

//img
import Logo from "../../assets/img/logo.svg";

function Header () {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const classOpenMenu = useMemo(() => isOpenMenu ? 'open' : '', [isOpenMenu]);

    const toggleOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu);
        document.body.style.overflow = !isOpenMenu ? 'hidden' : 'unset';
    };

    return (
        <header className="header">
            <div className="wr">
                <div className="header-content">
                    <div className="header-logo"
                         data-aos="fade-up"
                         data-aos-anchor-placement="bottom-center"
                         data-aos-duration="1200"
                    >
                        <a href="#">
                            <img src={Logo} alt="#"/>
                        </a>
                    </div>
                    <div className="header-block">
                        <button
                            type="button"
                            className={`header-btn ${classOpenMenu}`}
                            onClick={toggleOpenMenu}
                        >
                            {[1, 2].map((item) => <span key={item} />)}
                        </button>
                        <div className={`header-nav ${classOpenMenu}`}>
                            <ul>
                                <li data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-center"
                                    data-aos-duration="1000"
                                >
                                    <a href="#About">About</a>
                                </li>
                                <li data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-center"
                                    data-aos-duration="1200"
                                >
                                    <a href="#Technology">Technology</a>
                                </li>
                                <li data-aos="fade-up"
                                    data-aos-anchor-placement="bottom-center"
                                    data-aos-duration="1500"
                                >
                                    <a href="#Documentation">Documentation</a>
                                </li>
                            </ul>
                            <div className="cards-button">
                                <button className="btn">register for beta</button>
                                <a className="cards-link c-link">read docs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;