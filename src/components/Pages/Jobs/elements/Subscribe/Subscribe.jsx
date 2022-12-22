import style from './Subscribe.module.scss'

import { useRef, useEffect } from 'react';

//Source
import Mail from '../../../../../assets/img/Jobs/mail.svg'
import Sonr from '../../../../../assets/img/earth.gif'

function Subscribe () {
    return (
        <div className={style.Subscribe}>
            <div className={`${style.Subscribe_container} wr`}>
                <div className={style.Subscribe_box}>
                    <div className={style.Subscribe_title}>Don’t see the <span>job</span> you’re looking for?</div>
                    <div className={style.Subscribe_subtitle}>Subscribe to be notified by email whenever we post a new job opening.</div>
                </div>
                <div className={style.Subscribe_btn_box}>
                    <button className={style.Subscribe_btn}>
                        <img className={style.Subscribe_btn_icon} src={Mail} alt="" />
                        Subscribe
                    </button>
                </div>
            </div>
            <img className={style.Subscribe_sonr} src={Sonr} alt="" />
        </div>
    )
}

export default Subscribe;