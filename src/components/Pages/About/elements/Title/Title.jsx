import style from './Title.module.scss'
import "aos/dist/aos.css";

import { useRef, useEffect, useState } from 'react'

//Source
import Sonr from '../../../../../assets/img/About/earth.mp4';
import ArrowUp from '../../../../../assets/img/About/arrowUp.svg';
import CometWhite from '../../../../../assets/img/About/cometWhite.svg';
import CometBlack from '../../../../../assets/img/About/cometBlack.svg';
import Cross from "../../../../../assets/img/Hero/cross.png";

//Animate
import { gsap } from "gsap";
import AOS from 'aos';


function Title () {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    const [videoStatus, setVideoStatus] = useState(false)

    const refSonr = useRef(null);
    const refCometWhite = useRef(null);
    const refCometBlack = useRef(null);
    const refTitle = useRef(null);
    const refDes = useRef(null);
    const refBtn = useRef(null);

    useEffect(() => {
        
        let tl = gsap.timeline();
        tl.fromTo(refSonr.current, 
            { y: -600 }, 
            { y: 0, duration : 2, ease:"back.inOut" }
        ).fromTo(refTitle.current, 
            { y: 20, opacity : 0, scale : .6 }, 
            { y: 0, opacity : 1, scale : 1, duration : 1, ease:"expo.inOut" }
        ).fromTo(refDes.current, 
            { x: -100, opacity : 0 }, 
            { x: 0, opacity : 1, scale : 1, duration : .5, ease:"expo.inOut" }
        ).fromTo(refBtn.current, 
            { x: 100, opacity : 0 }, 
            { x: 0, opacity : 1, duration : .5, ease:"expo.inOut" }
        );

        tl.to(refCometWhite.current, {
            motionPath: {
                path: "#path",
                align: "#path",
                alignOrigin: [0.5, 0.5],
                autoRotate: true
            },
            duration: 5,
            ease: "power1.inOut"
        });
    }, []);

    return (
        <div className={style.Title}>
            <div className={`${style.Title_container} wr`}>
                <div className={`hero-videoBox ${!videoStatus && 'hidden'}`}>
                    <img className="hero-videoBox-icon" src={Cross} onClick={() => setVideoStatus(false)} alt="" />
                    <iframe className="hero-videoBox-video" width="560" height="315" src="https://www.youtube.com/embed/bex88Ku9Crk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className={`${style.Title_bg}`} >
                    <video className={`${style.Title_bg_sonr}`} ref={refSonr} src={Sonr} type="video/mp4" muted playsInline autoPlay='autoplay' loop  />
                </div>

                <div className={style.Title_title} ref={refTitle}>Your digital <span className={style.font}>liberty</span> is <span className={style.color}>worth</span> fighting for</div>
                <div className={style.Title_des} ref={refDes}>We’re on a mission to rebuild the internet around true digital ownership. It starts with verifiable on-chain identity, and ends with you having full control and straightforward management of your data.</div>
                <div className={style.Title_btn_container} ref={refBtn}>
                <div className={style.Title_btn_box} >
                    
                    <div className={style.Title_btn_text}>Play video</div>
                    <button className={style.Title_btn} onClick={() => setVideoStatus(true)}>
                        <img src={ArrowUp} alt="" />
                    </button>
                </div>
                </div>
            </div>
            <div className={style.Title_footer}>
                    The <span>Code</span> we Live By
                </div>
        </div>
    )
}

export default Title;