import { useRef, useEffect, useState } from "react";

import "./features.scss";

//img
import Figure from "../../assets/img/Features/figure.svg";
import Sphere from "../../assets/img/Features/sphere.gif";
import Arrow from "../../assets/img/Features/arrow.svg";

const data = [
    {
        title: 'Secure Your Digital Liberty',
        text: 'Simpler and more secure than passwords or key phrases. Access your apps and data using only your device.',
        icon: Figure
    },
    {
        title: 'Native Compatibility',
        text: 'Sonr apps are interoperable by design. Each new app creates exponential opportunity.',
        icon: Figure
    },
    {
        title: 'Cross-Chain and IBC Enabled',
        text: 'Sonr supports communication with hundreds of other blockchains for streamlined development and superior user experience.'
    }
]

function Features() {
    const containerRef = useRef(null);
    const [top, setTop] = useState(0);

    const lineOffset = () => {
        if (window.innerWidth <= 768) return;
        const containerRect = containerRef.current.getBoundingClientRect();
        const _top = (containerRect.top * -1) / ((containerRect.height) / 100);
        if (_top >= 100) {
            setTop(100);
            return;
        }
        if (_top <= 0) {
            setTop(0);
            return;
        }
        setTop(_top);
    };

    useEffect(() => {
        if (!containerRef.current || window.innerWidth <= 768) return;
        const height = containerRef.current.clientHeight;
        containerRef.current.style.height = `${height + (data.length * 200)}px`;
        window.addEventListener('scroll', lineOffset);
        return () => {
            window.removeEventListener('scroll', lineOffset);
        }
    }, []);

    return (
        <div className="features" id="About">
            <div className="features-container" ref={containerRef}>
                <div className="wr">
                    <div className="features-content">
                        <div className="features-left">
                            <div className="features-item" data-aos="fade-left">
                                FEATURES
                            </div>
                            <div className="features-img">
                                <img src={Sphere} alt="#" />
                                <a className="features-link" href="#">
                                    <img src={Arrow} alt="#"/>
                                </a>
                            </div>
                            <div className="features-paragraph">
                                <p className="features-paragraph-text">
                                    A robust, rapid-scaling
                                    <span>platform for interconnected</span>
                                    <span>apps, and total digital</span>
                                    <span>autonomy</span>
                                </p>
                                <p className="features-paragraph-text p-two">
                                    A robust, rapid-
                                    <span>scaling platform</span>
                                    <span>for interconnected</span>
                                    <span>apps, and total</span>
                                    <span>digital autonomy</span>
                                </p>
                            </div>
                        </div>
                        <div className="features-right">
                            <div className="features-line">
                                <div className="features-line-inner" style={{ top: `${top}%` }} />
                            </div>
                            {data.map((item, index) => {
                                const part = 100 / data.length;
                                const rangeTo = part * (index + 1);
                                const rangeFrom = rangeTo - part;
                                return (
                                    <div
                                        className="features-block"
                                        data-aos="fade-up"
                                        key={index}
                                    >
                                        <div className={`features-block-inner ${top >= rangeFrom && top <= rangeTo ? 'active' : ''}`}>
                                            <h2 className="features-title">{item.title}</h2>
                                            <div className="features-text">
                                                {item.text}
                                            </div>
                                            {item.icon && (
                                                <div className="features-icon">
                                                    <img src={item.icon} alt="#" />
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;