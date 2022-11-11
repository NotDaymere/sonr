import style from './Community.module.scss'

//Elements
import TextItem from './elements/TextItem/TextItem';
import Footer from './elements/Footer/Footer';
import Comments from './elements/Comments/Comments';

//IMG
import Img from '../../../../../assets/img/Article/img/community.jpg';

const dataText1 = [
    'Try it out now 💻',
    'Install the package: Find the Flutter package at motor.build',
    'Explore our guides: Setup your Sonr-powered Flutter application in minutes with our Documentation and Motor Flutter guide',
    'Show us what you got! 💰',
    'Add the #sonr to your application repository for a chance to win a $SNR token airdrop.',
    'Need some inspiration? 😎',
    'Checkout some winners from several hackathons Sonr has sponsored:',
]

const dataText2 = [
    'Checkout sonr.fyi, our public roadmap where you can see the planned features and updates and leave feedback on what you want to see next! Find the Flutter SDK helpful? Like our package on pub.dev and star our motor-flutter repo ⭐',
    'Thank you for continuing to follow along in our journey to empower everyone to control their data on the internet! You will hear from us again soon with more on what we have been up to and what’s to come.'
]

function Community () {
    return (
        <div className={`${style.Community}`} >
            <div className={`${style.Community_container} wr wr-community`} >
                <div className={`${style.Community_title} ${style.Community_title_1}`}>Hello Sonr community!</div>
                <div className={`${style.Community_motto} ${style.Community_motto_1}`}>The team has been hard at work for the past few months and we’re excited to share that Sonr’s Flutter SDK package is live at motor.build. This package provides methods for Authentication, Data Management, and Wallet interactions for the Sonr Network.</div>
                <div className={`${style.Community_text} ${style.Community_text_1}`}>
                    {dataText1.map((text) => (
                        <TextItem text={text} />
                    ))}
                </div>
                <img className={style.Community_img} src={Img} alt="" />
                <div className={`${style.Community_text} ${style.Community_text_2}`}>
                    <TextItem text='HackTheNorth winning team built a decentralized advertising network!' />
                </div>
                <div className={`${style.Community_motto} ${style.Community_motto_2} ${style.center}`}>HackMIT winning team designed a tokenized creator platform to help creators and their fans connect more deeply.</div>
                <div className={`${style.Community_text} ${style.Community_text_3}`}>
                    <TextItem text='And more on Devpost and Github!!' />
                </div>
                <div className={`${style.Community_title} ${style.Community_title_2}`}>Product Roadmap and Feedback 🚀</div>
                <div className={`${style.Community_text} ${style.Community_text_4}`}>
                    {dataText2.map((text) => (
                        <TextItem text={text} />
                    ))}
                </div>
                <div className={`${style.Community_author}`}>Sonr Team</div>
            </div>
            <Footer />
            <Comments />
        </div>
    )
}

export default Community;