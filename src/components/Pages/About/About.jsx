import './About.scss'

//Elements
import Title from './elements/Title/Title';
import Slider from './elements/Slider/Slider';

function About () {
    return (
        <div className="About">
            <Title />
            <Slider />
        </div>
    )
}

export default About;