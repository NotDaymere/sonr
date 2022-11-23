import './Jobs.scss'

//Elements
import Title from './elements/Title/Title';
import Agitation from './elements/Аgitation/Agitation';
import Job from './elements/Job/Job';

function Jobs () {
    return (
        <div className="Jobs">
            <div className="Jobs_bg" />
            <Title />
            <Agitation />
            <Job />
        </div>
    )
}

export default Jobs;