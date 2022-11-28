import { useState, useMemo, useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';

import "./header.scss";

//Img
import Logo from "../../assets/img/Logo/Black.svg";
import LogoWhite from "../../assets/img/Logo/White.svg";


const dataThemeLinks = [
    {
        pathname: '/about',
        theme: 'white'
    },{
        pathname: '/technology',
        theme: 'black'
    },{
        pathname: '/blog',
        theme: 'white'
    },
    {
        pathname: '/article',
        theme: 'black'
    },{
        pathname: '/job',
        theme: 'black'
    },{
        pathname: '/jobs',
        theme: 'black'
    }
]

const dataMenuItems = [
    {
        title: 'ABOUT',
        link: '/about'
    },{
        title: 'TECHNOLOGY',
        link: '/technology'
    },{
        title: 'DOCUMENTATION',
        link: '/documentation'
    },{
        title: 'Blog',
        link: '/blog'
    },{
        title: 'Jobs',
        link: '/jobs'
    },
]

function Header (props) {
    let location = useLocation();
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const refPoint = useRef(null);
    const refPointNum = useRef(null);
    const [theme, setTheme] = useState('black');

    const classOpenMenu = useMemo(() => isOpenMenu ? 'open' : '', [isOpenMenu]);

    const toggleOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu);
        document.body.style.overflow = !isOpenMenu ? 'hidden' : 'unset';
    };

    useEffect(() => {
        dataThemeLinks.map((link) => {
            if(link.pathname === location.pathname.toLowerCase()) {
                setTheme(link.theme)
            }
        })
    }, [location]);

    const mouseMoveEvent = (e) => {
        refPoint.current.style.left = e.clientX + 'px'
        refPoint.current.style.top = e.clientY + 'px'
    }

    const mouseMenuEnter = (e) => {
        let index = e.target.attributes.index.value
        refPointNum.current.innerText = index
        refPoint.current.style.width = '77px'
        refPoint.current.style.height = '77px'
    }

    const mouseMenuLeave = (e) => {
        refPointNum.current.innerText = ''
        refPoint.current.style.width = '10px'
        refPoint.current.style.height = '10px'
    }

    window.addEventListener('mousemove', mouseMoveEvent);

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
                            {dataMenuItems.map((e, i) => (
                                <div className={`header-nav-item`} >
                                    <a 
                                        className={`header-nav-item-a ${classOpenMenu} ${theme}`} 
                                        href={e.link}
                                        index={i+1}
                                        onMouseEnter={mouseMenuEnter}
                                        onMouseLeave={mouseMenuLeave}
                                    >
                                        {e.title}
                                    </a>
                                </div>
                            ))}
                            <div className="cards-button">
                                <button className={`btn ${theme}`}>register for beta</button>
                                <a className={`cards-link c-link ${theme}`}>read docs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`header-point ${classOpenMenu} ${theme}`} ref={refPoint} >
                <span ref={refPointNum}></span>
            </div>
        </header>
    )
}

export default Header;