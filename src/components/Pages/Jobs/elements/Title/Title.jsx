import style from './Title.module.scss'

import { useRef, useEffect } from 'react';

//Media
import Mail from '../../../../../assets/img/Jobs/mail.svg'
import SubscribeBg from '../../../../../assets/img/Jobs/titleBg.svg'

//Animate
import { gsap } from "gsap";

function Title () {
    const refText11 = useRef(null);
    const refText12 = useRef(null);
    const refText13 = useRef(null);
    const refText2 = useRef(null);
    const refText3 = useRef(null);
    const refText4 = useRef(null);
    const refText5 = useRef(null);

    useEffect(() => {

        let tl = gsap.timeline();
        tl.fromTo(refText11.current,
            { y: -50, opacity : 0 },
            { y: 0, opacity : 1, duration : .2, ease:"expo.inOut" }
        ).fromTo(refText12.current,
            { y: -50, opacity : 0 },
            { y: 0, opacity : 1, duration : .2, ease:"expo.inOut" }
        ).fromTo(refText13.current,
            { y: -50, opacity : 0 },
            { y: 0, opacity : 1, duration : .2, ease:"expo.inOut" }
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
        )
    }, [])

    return (
        <div className={style.Title}>
            <div className={`${style.Title_container} wr`}>
                <div className={style.Title_box}>
                    <div className={style.Title_subtitle}>
                        <div className={style.Title_subtitle_item} ref={refText11}>Jobs</div>
                        <div className={style.Title_subtitle_item} ref={refText12}>Jobs</div>
                        <div className={style.Title_subtitle_item} ref={refText13}>Jobs</div>
                    </div>
                    <div className={style.Title_title}>
                        <div><div ref={refText2} >Let's <span>Rebuild</span></div></div>
                        <div><div ref={refText3} ><div>the Internet</div><span className={style.Title_slash}>///</span></div></div>
                        <div><div ref={refText4} >together</div></div>
                        <div className={style.Title_des}>
                            <div ref={refText5} >We're a team of Artists, and Engineers working closely to empower users to have digital inalienable rights.</div>
                        </div>
                    </div>
                    
                </div>
                <div className={style.Title_subscribe}>
                    <div className={style.Title_subscribe_inner}>
                        <img className={style.Title_subscribe_bg} src={SubscribeBg} alt="" />
                        <div className={style.Title_subscribe_title}>Subscribe to be notified by email whenever we post a new job opening.</div>
                        <div className={style.Title_subscribe_btn_box}>
                            <button className={style.Title_subscribe_btn}>
                                <img className={style.Title_subscribe_btn_icon} src={Mail} alt="" />
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.Title_bg_text} />
            <div className={style.Title_bg} />
        </div>
    )
}

export default Title;