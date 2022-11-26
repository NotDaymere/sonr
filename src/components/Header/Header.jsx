import {useState, useMemo, useEffect } from "react";
import { useLocation } from 'react-router-dom';

import "./header.scss";

//Img
import Logo from "../../assets/img/Logo/Black.svg";
import LogoWhite from "../../assets/img/Logo/White.svg";

function Header (props) {
    let location = useLocation();
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const [theme, setTheme] = useState('black');

    const classOpenMenu = useMemo(() => isOpenMenu ? 'open' : '', [isOpenMenu]);

    const toggleOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu);
        document.body.style.overflow = !isOpenMenu ? 'hidden' : 'unset';
    };

    const dataThemeLinks = [
        {
            pathname: '/about',
            theme: 'white'
        },
        {
            pathname: '/technology',
            theme: 'black'
        },
        {
            pathname: '/blog',
            theme: 'white'
        },
        {
            pathname: '/article',
            theme: 'black'
        },
        {
            pathname: '/job',
            theme: 'black'
        },
        {
            pathname: '/jobs',
            theme: 'black'
        }
    ]

    useEffect(() => {
        dataThemeLinks.map((link) => {
            if(link.pathname === location.pathname.toLowerCase()) {
                setTheme(link.theme)
            }
        })
    }, [location]);

    return (
        <header className={`
            header
            ${isOpenMenu && theme}
        `}>
            <div className="wr">
                <div className="header-content">
                    <div className="header-logo"
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-center"
                        data-aos-duration="1200"
                    >
                        <a href="/">
                            <img src={
                                theme === 'white' ? LogoWhite : Logo
                            } alt="#"/>
                        </a>
                    </div>
                    <div className="header-block">
                        <button
                            type="button"
                            className={`header-btn ${classOpenMenu}`}
                            onClick={toggleOpenMenu}
                        >
                            {[1, 2].map((item) => <span className={theme} key={item} />)}
                        </button>
                        <div className={`header-nav ${classOpenMenu} ${theme}`}>
                            
                            <div className="cards-button">
                                <button className={`btn ${theme}`}>register for beta</button>
                                <a className={`cards-link c-link ${theme}`}>read docs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;