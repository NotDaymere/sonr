import './Job.scss'

//Elements
import Title from './elements/Title/Title';
import Cards from './elements/Cards/Cards';
import Requirements from './elements/Requirements/Requirements';
import Restrictions from './elements/Restrictions/Restrictions';
import ApplyHere from './elements/ApplyHere/ApplyHere';

function Job () {
    return (
        <div className="Job">
            <Title />
            <Cards />
            <Requirements />
            <Restrictions />
            <ApplyHere />
        </div>
    )
}

export default Job;