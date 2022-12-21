import "./Beam.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//img
import Mobile from "../../../assets/img/Beam/mobile.png";
import Technology from "../../../assets/img/Beam/technology.png";
import Keyboard from "../../../assets/img/Beam/keyboard.png";
import Sonr from '../../../assets/img/About/earth.mp4'
import White from '../../../assets/img/White.svg'

const dataBeams = [
    {
        title: 'A Central Hub for Messaging',
        img: Mobile,
        text: 'Send and receive messages and media across any platform from a single app'
    },
    {
        title: 'Rapid File Sharing for Everyone',
        img: Technology,
        text: 'Quickly and securely share data between any devices with end-to-end encryption and transfer speeds 30% faster than AirDrop.'
    },
    {
        title: 'Full Privacy & Control',
        img: Keyboard,
        text: 'Built-in identity management means you own your data, and control who has access to it.'
    }
]

function Beam () {
    const settings = {
        arrows: false,
        settings:  'unslick',
        responsive: [
            {
                breakpoint: 19200,
                settings:  'unslick'
            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <div className="beam">
            <div className="wr">
                <div className="beam-content">
                    <div className="beam-content-sonr">
                        {Array(3).fill('sonr').map((e, i) => (
                            <div className="beam-content-sonr-item" key={i}>{e}</div>
                        ))}
                    </div>
                    <div className="h1"
                        data-aos="fade-up"
                        data-aos-duration="1000"
                    >
                        The Chat App has <span> Leveled Up</span>
                    </div>
                    <div className="beam-block">
                        <Slider {...settings}>
                            {dataBeams.map((item, index) => (
                                <div className="beam-box"
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-duration="1200"
                                >
                                    <div className="beam-img">
                                        <img src={item.img} alt="#" />
                                    </div>
                                    <div className="beam-case">
                                        <div className="beam-number">
                                            0{index + 1}
                                        </div>
                                        <div className="beam-text">
                                            <div className="beam-title">
                                                {item.title}
                                            </div>
                                            <div className="beam-description">
                                                {item.text}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="beam-signUp">
                <div className="beam-signUp-bg"/>
                <div className="beam-signUp-box wr">
                    <div className="beam-signUp-box-subtitle">We are always wait for you</div>
                    <div className="beam-signUp-box-title">sign up</div>
                    <form className="beam-signUp-box-form" action="">
                        <div className="beam-signUp-box-form-inputs">
                            <input className="beam-signUp-box-form-inputs-input" type="text" placeholder="Your name" />
                            <input className="beam-signUp-box-form-inputs-input" type="text" placeholder="Your email" />
                        </div>
                        <button className="beam-signUp-box-form-btn">sign up<span></span></button>
                    </form>
                    <video className="beam-signUp-box-sonr" src={Sonr} autoPlay loop muted />
                    <img className="beam-signUp-box-white" src={White} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Beam;