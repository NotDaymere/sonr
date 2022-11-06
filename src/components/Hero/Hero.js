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
                        <span>SONR</span>
                        <span>SONR</span>
                        <span>SONR</span>
                    </div>
                    <h1>
                        We’re
                        <span className="hero-build"> building</span>
                        <span className="hero-span">
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