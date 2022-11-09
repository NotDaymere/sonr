import "./hero.scss";
//img
import Earth from "../../assets/img/Hero/earth2.gif";
import Arrow from "../../assets/img/Hero/arrow.svg";
import Eye from "../../assets/img/Hero/eye2.gif";

function Hero() {
    return (
        <div className="hero">
            <div className="wr">
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
                            <div className="b-title-text b-line" data-aos="fade-down" data-aos-delay="300">
                                <img className="hero-earth" src={Earth} alt="#" />
                                the internet
                            </div>
                        </div>
                        <div className="hero-last-title h1">
                            <div className="b-title-text" data-aos="fade-down" data-aos-delay="500">
                                you <span className="b-text-underline">deserve</span>
                            </div>
                        </div>
                        <div className="hero-eye" data-aos="fade-left" data-aos-delay="500">
                            <img src={Eye} />
                        </div>
                    </div>

                    <div className="hero-block">
                        <div className="hero-block-left" data-aos="fade-right">
                            <div className="hero-block-text">
                                view showreel
                            </div>
                            <a className="hero-block-img" href="#">
                                <img src={Arrow} alt="#" />
                            </a>
                        </div>
                        <div className="hero-block-right" data-aos="fade-left">
                            A robust, rapid-scaling platform for interconnected apps, and total digital autonomy
                        </div>
                    </div>
                </div>
                <div className="hero-bottom" data-aos="fade-up">
                    all data in<br/>one place
                </div>
            </div>
        </div>
    )
}

export default Hero;