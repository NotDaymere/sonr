import "./Hero.scss";

import { useState } from "react";

//img
import Earth from "../../../../../assets/img/Hero/earth.svg";
import Arrow from "../../../../../assets/img/Hero/arrow.svg";
import Cross from "../../../../../assets/img/Hero/cross.png";
import White from "../../../../../assets/img/White.svg";

function Hero() {
    const [videoStatus, setVideoStatus] = useState(false)

    return (
        <div className="hero">
            <div className="wr">
                <div className={`hero-videoBox ${!videoStatus && 'hidden'}`}>
                    <img className="hero-videoBox-icon" src={Cross} onClick={() => setVideoStatus(false)} alt="" />
                    <iframe className="hero-videoBox-video" width="560" height="315" src="https://www.youtube.com/embed/bex88Ku9Crk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="hero-content">
                    <div className="hero-heading">
                        {new Array(3).fill('sonr').map((text, index) => (
                            <div
                                key={index}
                                className="hero-heading-item"
                                data-aos="fade-up"
                                data-aos-duration={index % 2 === 0 ? '600' : '400'}
                            >
                                {text}
                            </div>
                        ))}
                    </div>
                    <div className="hero-description">
                        <h1 className="hero-title">
                            <span className="b-title-text" data-aos="fade-down" data-aos-delay="100">
                                We’re&nbsp;
                                <span className="b-color-blue">
                                    building
                                </span>
                            </span>
                        </h1>
                        <div className="hero-subtitle h1">
                            <div className="b-title-text" data-aos="fade-down" data-aos-delay="300">
                                <img className="hero-earth" src={Earth} alt="#"  autoCorrect />
                                the internet
                            </div>
                        </div>
                        <div className="hero-last-title h1">
                            <div className="b-title-text" data-aos="fade-down" data-aos-delay="500">
                                you <span className="b-text-underline">deserve</span>
                            </div>
                        </div>
                    </div>

                    <div className="hero-block">
                        <div className="hero-block-left" onClick={() => setVideoStatus(true)} data-aos="fade-right">
                            <div className="hero-block-text">
                                play video
                            </div>
                            <a className="hero-block-img" href="#">
                                <img src={Arrow} alt="#" />
                            </a>
                        </div>
                        <div className="hero-block-right" data-aos="fade-left">
                            A peer-to-peer identity and asset management system that uses Decentralized Standards to make simple self-custody a reality.
                        </div>
                    </div>
                </div>
                <div className="hero-bottom" data-aos="fade-up">
                    all data in<br/>one place
                </div>
                <img className="hero-white" src={White} alt="#"/>
                <div className="Title_bg_text" />
            </div>
        </div>
    )
}

export default Hero;