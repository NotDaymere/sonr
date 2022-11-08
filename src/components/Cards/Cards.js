import "./cards.scss";

function Cards () {
    return (
        <div className="cards" id="Technology">
            <div className="wr">
                <div className="cards-content">
                    <div className="cards-block" data-aos="fade">
                        <div className="cards-box c-one">
                            <a href="#" className="cards-box-link" />
                            <div className="cards-top">
                                <div className="cards-title">
                                    NO-CODE BUILDER
                                </div>
                                <div className="h2">Speedway</div>
                            </div>
                            <div className="cards-description">
                                Comprehensive developer tools in a simple, intuitive dashboard
                            </div>
                            <div className="cards-index">
                                <div className="cards-list">
                                    <div className="cards-list-item"></div>
                                    <div className="cards-list-title">
                                        No-code Automation
                                    </div>
                                </div>
                                <div className="cards-list">
                                    <div className="cards-list-item"></div>
                                    <div className="cards-list-title">
                                        Efficient workflows
                                    </div>
                                </div>
                                <div className="cards-list">
                                    <div className="cards-list-item"></div>
                                    <div className="cards-list-title">
                                        Progress tracking
                                    </div>
                                </div>
                                <div className="cards-list">
                                    <div className="cards-list-item">
                                        Coming Soon:
                                    </div>
                                    <div className="cards-list-title">
                                        Real-time collaboration
                                    </div>
                                </div>
                            </div>
                            <div className="cards-button">
                                <button className="btn btn-white">learn more</button>
                                <a className="cards-link" href="#">read docs</a>
                            </div>
                        </div>
                        <div className="cards-box c-two" data-aos="fade">
                            <a href="#" className="cards-box-link" />
                            <div className="cards-top">
                                <div className="cards-title">
                                    FRONTEND PLUGINS
                                </div>
                                <div className="h2">Motor SDK</div>
                            </div>
                            <div className="cards-description">
                                Streamline connectivity, authorization and cross-platform compatibility into a single workflow. Integrate with Sonr’s Motor plugins to automatically secure peer-to-peer networking from any device.
                            </div>
                        </div>
                        <div className="cards-box c-three" data-aos="fade">
                            <a href="#" className="cards-box-link" />
                            <div className="cards-top">
                                <div className="cards-title">
                                    COMING SOON
                                </div>
                                <div className="h2">Smart Contracts</div>
                            </div>
                            <div className="cards-description">
                                Plug-and-play: seamlessly integrate smart contracts into your dApp with just a few clicks.
                            </div>
                        </div>
                    </div>
                    <div className="cards-button">
                        <button className="btn">register for beta</button>
                        <a href="#" className="cards-link c-link">read docs</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;