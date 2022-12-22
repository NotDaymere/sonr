import style from './Footer.module.scss'

import { useRef, useState } from 'react';

//Elements
import TimeLineItem from '../TimeLine/elements/TimeLineItem/TimeLineItem';

import Sonr from '../../../../../assets/img/earth.gif';

//Animate
import { gsap } from "gsap";

function Footer () {

    const refFooter = useRef(null);
    const refSonr = useRef(null);
    const refDifference = useRef(null);
    const [animateActive, setAnimateActive] = useState(false);

    let tl = gsap.timeline();
    tl.to(refSonr.current,
        { y: -600, duration : 2, ease:"back.inOut" }
    ).to(refDifference.current, 
        { backgroundColor: 'rgb(227, 227, 227)', duration : 2, ease:"back.inOut" }
    )

    const scrollEvent = () => {
        console.log(refFooter.current.getBoundingClientRect().y)
        if (refFooter.current.getBoundingClientRect().y < 500 && animateActive == false) {
            setAnimateActive(!animateActive)
            tl.play(true)
        }
    }

    window.addEventListener('scroll', scrollEvent);

    return (
        <div className={style.Footer} ref={refFooter}>
            <div className={style.Footer_difference} ref={refDifference} />
            <div className={`${style.Footer_container} wr`}>
                <TimeLineItem
                    headerTitle='present'
                    title='This is Where You Come In'
                    des='Equipped with a comprehensive suite of developer tools, Sonr is launching into onboarding teams of builders to establish the first set of applications within the Sonr ecosystem.' 
                />
                <div className={style.Footer_BG}>
                    <img className={style.Footer_BG_sonr} ref={refSonr} src={Sonr} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer;