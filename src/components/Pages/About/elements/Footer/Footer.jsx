import style from './Footer.module.scss'

//Elements
import TimeLineItem from '../TimeLine/elements/TimeLineItem/TimeLineItem';

import Sonr from '../../../../../assets/img/Sonr/earth-white.mp4';

function Footer () {
    return (
        <div className={style.Footer}>
            <div className={`${style.Footer_container} wr`}>
                <TimeLineItem
                    headerTitle='present'
                    title='This is Where You Come In'
                    des='Equipped with a comprehensive suite of developer tools, Sonr is launching into onboarding teams of builders to establish the first set of applications within the Sonr ecosystem.' 
                />
                <div className={style.Footer_BG}>
                    <video className={style.Footer_BG_sonr} src={Sonr} type="video/mp4" autoplay="autoplay" loop />
                </div>
            </div>
        </div>
    )
}

export default Footer;