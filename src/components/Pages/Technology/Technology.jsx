import './Technology.scss'

//Elements
import Title from './elements/Title/Title';
import Build from './elements/Build/Build';
import Cards from './elements/Cards/Cards';

function Technology () {
    return (
        <div className="Technology">
            <Title />
            <Build />
            <Cards />
        </div>
    )
}

export default Technology;