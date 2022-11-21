import './Jobs.scss'

//Elements
import Title from './elements/Title/Title';
import Cards from './elements/Cards/Cards';
import Requirements from './elements/Requirements/Requirements';
import Restrictions from './elements/Restrictions/Restrictions';
import ApplyHere from './elements/ApplyHere/ApplyHere';

function Jobs () {
    return (
        <div className="Jobs">
            <Title />
            <Cards />
            <Requirements />
            <Restrictions />
            <ApplyHere />
        </div>
    )
}

export default Jobs;