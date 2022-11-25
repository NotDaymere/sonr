import './Jobs.scss'

import { useState } from 'react';

//Elements
import Title from './elements/Title/Title';
import Agitation from './elements/Аgitation/Agitation';
import Job from './elements/Job/Job';
import Contact from './elements/Contact/Contact';
import Subscribe from './elements/Subscribe/Subscribe';

function Jobs () {
    const [subscribeActive, setSubscribeActive] = useState(false)

    const changeSubscribeActive = () => setSubscribeActive(!subscribeActive)

    return (
        <div className="Jobs">
            <div className="Jobs_bg" />
            <Title />
            <Agitation />
            <Job />
            <Contact />
            <Subscribe />
            <div className="Subscribe_box">
            <div className="Subscribe_box">

            </div>
            </div>
        </div>
    )
}

export default Jobs;