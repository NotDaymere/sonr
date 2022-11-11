import "./Sonr.scss";

function Sonr () {
    return (
        <div className="sonr">
            <div className="wr">
                <div className="sonr-content">
                    <div className="sonr-item s-one" data-aos="zoom-in">
                        <span>s</span>
                    </div>
                    <div className="sonr-item s-two" data-aos="zoom-in">
                        <span>o</span>
                    </div>
                    <div className="sonr-item" data-aos="zoom-in">
                        n
                    </div>
                    <div className="sonr-item s-three" data-aos="zoom-in">
                        r
                    </div>
                    <div className="sonr-angles" data-aos="fade">
                        <div className="sonr-angle s-lt" />
                        <div className="sonr-angle s-rt" />
                        <div className="sonr-angle s-lb" />
                        <div className="sonr-angle s-rb" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sonr;