import style from './Title.module.scss'

import { useRef, useEffect } from 'react';

import Sonr from '../../../../../assets/img/earth.gif'

//Elements
import Cards from './elements/Cards/Cards';

//Animate
import { gsap } from "gsap";

function Title () {

    const refSonr = useRef(null);
    const refText1 = useRef(null);
    const refText2 = useRef(null);
    const refText3 = useRef(null);
    const refText4 = useRef(null);
    const refText5 = useRef(null);
    const refText6 = useRef(null);

    useEffect(() => {
        let tl = gsap.timeline();
        tl.fromTo(refSonr.current,
            { bottom: -600 },
            { bottom: -240, duration : 2, ease:"expo.inOut" }
        ).fromTo(refText1.current,
            { y: -50, opacity : 0 },
            { y: 0, opacity : 1, duration : .3, ease:"expo.inOut" }
        ).fromTo(refText2.current,
            { y: -50, opacity : 0 },
            { y: 0, opacity : 1, duration : .3, ease:"expo.inOut" }
        ).fromTo(refText3.current,
            { y: -50, opacity : 0 },
            { y: 0, opacity : 1, duration : .3, ease:"expo.inOut" }
        ).fromTo(refText4.current,
            { y: -50, opacity : 0 },
            { y: 0, opacity : 1, duration : .3, ease:"expo.inOut" }
        ).fromTo(refText5.current,
            { x: -50, opacity : 0 },
            { x: 0, opacity : 1, duration : .3, ease:"expo.inOut" }
        ).fromTo(refText6.current,
            { y: 200, opacity : 0 },
            { y: 0, opacity : 1, duration : .5, ease:"expo.inOut" }
        )
    }, [])
    

    return (
        <div className={style.Title}>
            <div className={`${style.Title_container} wr`}>
                <div className={style.Title_header}>
                    <div className={style.Title_subtitle}>
                        <div ref={refText1} >Build on the first user-owned interoperable blockchain network</div>
                    </div>
                    <div className={style.Title_title}>
                        <div><div ref={refText2} >The <span>revolution</span></div></div>
                        <div><div ref={refText3} ><div>will not be</div><span className={style.Title_slash}>///</span></div></div>
                        <div><div ref={refText4} >centralized</div></div>
                    </div>
                    <div className={style.Title_des}>
                        <div ref={refText5}>Sonr leverages Cosmos’ Inter-Blockchain Communication protocol (IBC) and a decentralized identity mechanism to enable secure multichain peer-to-peer communication.</div>
                    </div>
                </div>
                <div className={style.Title_Cards_container} ref={refText6} ><Cards /></div> 
                <img className={style.Title_sonr} ref={refSonr} src={Sonr} alt="" />
            </div>
        </div>
    )
}

export default Title;