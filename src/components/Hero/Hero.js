import "./hero.scss";
//img
import Earth from "../../assets/img/Hero/earth.svg";
import Arrow from "../../assets/img/Hero/arrow.svg";

function Hero () {
    return (
        <div className="hero">
            <div className="wr">
                <div className="hero-content">
                    <div className="hero-heading">
                        <span data-aos="fade-up"
                              data-aos-anchor-placement="top-center"
                              data-aos-duration="1500"
                        >
                            SONR
                        </span>
                        <span data-aos="fade-up"
                              data-aos-anchor-placement="top-center"
                              data-aos-duration="1200"
                        >
                            SONR
                        </span>
                        <span data-aos="fade-up"
                              data-aos-anchor-placement="top-center"
                              data-aos-duration="1500"
                        >
                            SONR
                        </span>
                    </div>
                    <h1
                        data-aos="fade-up"
                        data-aos-anchor-placement="top-center"
                        data-aos-duration="1700"
                    >
                        We’re
                        <span className="hero-build"
                              data-aos="fade-up"
                              data-aos-anchor-placement="top-center"
                              data-aos-duration="1800"
                        >
                            building
                        </span>
                        <span className="hero-span"
                              data-aos="fade-up"
                              data-aos-anchor-placement="top-center"
                              data-aos-duration="1000"
                        >
                            <img className="hero-earth" src={Earth} alt="#"/>
                            the internet
                        </span>
                        you deserve
                    </h1>
                    <div className="hero-block">
                        <div className="hero-left">
                            <div className="hero-title">
                                view showreel
                            </div>
                            <a className="hero-img" href="#">
                                <img  src={Arrow} alt="#"/>
                            </a>
                        </div>
                        <div className="hero-right">
                            A robust, rapid-scaling platform for interconnected apps, and total digital autonomy
                        </div>
                    </div>
                </div>
                <div className="hero-item">
                    all data in one place
                </div>
            </div>
        </div>
    )
}

export default Hero;