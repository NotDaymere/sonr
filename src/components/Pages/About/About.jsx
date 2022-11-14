import './About.scss'

//Elements
import Title from './elements/Title/Title';
import Slider from './elements/Slider/Slider';
import TimeLine from './elements/TimeLine/TimeLine';
import Footer from './elements/Footer/Footer';

function About () {
    return (
        <div className="About">
            <Title />
            <Slider />
            <TimeLine />
            <Footer />
        </div>
    )
}

export default About;