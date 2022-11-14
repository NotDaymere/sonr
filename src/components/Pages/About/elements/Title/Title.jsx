import style from './Title.module.scss'

import Sonr from '../../../../../assets/img/About/earth.mp4';
import ArrowUp from '../../../../../assets/img/About/arrowUp.svg';

function Title () {
    return (
        <div className={style.Title}>
            <div className={`${style.Title_container} wr`}>
                <div className={style.Title_bg}>
                    <video className={style.Title_bg_sonr} src={Sonr} type="video/mp4" autoplay="autoplay" loop />
                </div>

                <div className={style.Title_title}>Your digital <span>liberty</span> is <span>worth</span> fighting for</div>
                <div className={style.Title_des}>We’re on a mission to rebuild the internet around true digital ownership. It starts with verifiable on-chain identity, and ends with you having full control and straightforward management of your data.</div>
                <div className={style.Title_btn_box}>
                    <div className={style.Title_btn_text}>view showreel</div>
                    <button className={style.Title_btn}>
                        <img src={ArrowUp} alt="" />
                    </button>
                </div>
            </div>
            <div className={style.Title_footer}>
                    The <span>Code</span> we Live By
                </div>
        </div>
    )
}

export default Title;