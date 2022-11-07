import "./features.scss";

//img
import Figure from "../../assets/img/Features/figure.svg";
import Sphere from "../../assets/img/Features/planet.svg";

function Features () {
    return (
        <div className="features">
            <div className="wr">
                <div className="features-content">
                    <div className="features-left">
                        <div className="features-item"
                             data-aos="fade-left"
                             data-aos-duration="1000"
                        >
                            FEATURES
                        </div>
                        <div className="features-img">
                            <img src={Sphere} alt="#"/>
                        </div>
                        <div className="features-paragraph">
                            <p className="features-paragraph-text">A robust, rapid-scaling
                                <br /> platform for interconnected
                                <br />apps, and total digital
                                <br />autonomy</p>
                            <p className="features-paragraph-text p-two">A robust, rapid-
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;scaling platform
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;for interconnected
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;apps, and total
                                <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;digital autonomy</p>
                        </div>
                    </div>
                    <div className="features-right">
                        <div className="features-line"></div>
                        <div className="features-block"
                             data-aos="fade-up"
                             data-aos-duration="1000"
                        >
                            <h2>Secure Your Digital Liberty</h2>
                            <div className="features-text">
                                Simpler and more secure than passwords or key phrases. Access your apps and data using only your device.
                            </div>
                            <div className="features-icon">
                                <img src={Figure} alt="#"/>
                            </div>
                        </div>
                        <div className="features-block"
                             data-aos="fade-up"
                             data-aos-duration="1200"
                        >
                            <h2>Native Compatibility</h2>
                            <div className="features-text">
                                Sonr apps are interoperable by design. Each new app creates exponential opportunity.
                            </div>
                            <div className="features-icon">
                                <img src={Figure} alt="#"/>
                            </div>
                        </div>
                        <div className="features-block"
                             data-aos="fade-up"
                             data-aos-duration="1500"
                        >
                            <h2>Cross-Chain  and IBC Enabled</h2>
                            <div className="features-text">
                                Sonr supports communication with hundreds of other blockchains for streamlined development and superior user experience.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;