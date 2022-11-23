import style from './Title.module.scss'
import "aos/dist/aos.css";

import { useRef, useEffect } from 'react'

//Source
import Sonr from '../../../../../assets/img/About/earth.mp4';
import ArrowUp from '../../../../../assets/img/About/arrowUp.svg';
import CometWhite from '../../../../../assets/img/About/cometWhite.svg';
import CometBlack from '../../../../../assets/img/About/cometBlack.svg';

//Animate
import { gsap } from "gsap";
import AOS from 'aos';


function Title () {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


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
                <div className={`${style.Title_bg}`} >
                    <video className={`${style.Title_bg_sonr}`} ref={refSonr} src={Sonr} type="video/mp4" autoplay="autoplay" loop />
                </div>

                <div className={style.Title_title} ref={refTitle}>Your digital <span>liberty</span> is <span>worth</span> fighting for</div>
                <div className={style.Title_des} ref={refDes}>We’re on a mission to rebuild the internet around true digital ownership. It starts with verifiable on-chain identity, and ends with you having full control and straightforward management of your data.</div>
                <div className={style.Title_btn_container} ref={refBtn}>
                <div className={style.Title_btn_box} >
                    
                    <div className={style.Title_btn_text}>view showreel</div>
                    <button className={style.Title_btn}>
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