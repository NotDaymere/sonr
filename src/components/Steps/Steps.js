import "./steps.scss";
//img
import Mobile from "../../assets/img/Steps/mobile.svg";
import Technology from "../../assets/img/Steps/technology.svg";
import Keyboard from "../../assets/img/Steps/keyboard.svg";

const dataSteps = [
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

function Steps () {
    return (
        <div className="steps">
            <div className="wr">
                <div className="steps-content">
                    <div className="h1">The Chat App has <span> Leveled Up</span></div>
                    <div className="steps-block">
                        {dataSteps.map((item, index) => (
                            <div className="steps-box" key={index}>
                                <div className="steps-img">
                                    <img src={item.img} alt="#" />
                                </div>
                                <div className="steps-case">
                                    <div className="steps-number">
                                        0{index + 1}
                                    </div>
                                    <div className="steps-text">
                                        <div className="steps-title">
                                            {item.title}
                                        </div>
                                        <div className="steps-description">
                                            {item.text}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Steps;