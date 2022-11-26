import style from './Preloader.module.scss'

import { useRef, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'

//Media
import Sonr from '../../assets/img/earth.gif'
import Ellipse from '../../assets/img/Preloader/ellipse.svg'
import EllipseMob from '../../assets/img/Preloader/ellipseMob.svg'

function Preloader () {
    const refPercent = useRef(null)

    const Num = ({n}) => {
        const { number } = useSpring({
            from: {number: 0},
            number: n,
            delay: 200,
            config: {mass: 1, tension: 20, friction: 10}
        });
        return <animated.span>{number.to((n) => n.toFixed(0))}</animated.span>
    } 

    return (
        <div className={style.Preloader}>
            <div className={style.Preloader_title}>loading<span>...</span></div>
            <div className={style.Preloader_percent}><Num n={100} />%</div>
            <div className={style.Preloader_bg_ring} />
            <img className={style.Preloader_bg_sonr} src={Sonr} alt="" />
            <img className={style.Preloader_bg_ellipse} src={Ellipse} alt="" />
            <img className={`${style.Preloader_bg_ellipse} ${style.mob}`} src={EllipseMob} alt="" />
        </div>
    )
}

export default Preloader;