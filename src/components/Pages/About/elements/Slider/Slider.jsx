import style from './Slider.module.scss'

import ArrowDown from '../../../../../assets/img/About/arrowDown.svg';

import SlideBG1 from '../../../../../assets/img/About/slider/1.jpg';
import SlideBG2 from '../../../../../assets/img/About/slider/2.png';
import SlideBG3 from '../../../../../assets/img/About/slider/3.jpg';
import SlideBG4 from '../../../../../assets/img/About/slider/4.jpg';

function Slider () {
    return (
        <div className={style.Slider}>
            <div className={`${style.Slider_container} wr`}>
                <div className={style.Slider_arrows} >
                    <img src={ArrowDown} alt="" />
                    <img src={ArrowDown} alt="" />
                    <img src={ArrowDown} alt="" />
                </div>

                <div className={style.Slider_box} >
                    <div className={style.Slider_box_item} >
                        <img className={style.Slider_box_item_bg} src={SlideBG1} alt="" />
                        <div className={`${style.Slider_box_item_title} ${style.Slider_box_item_title_1}`} >UX First UX <span>First</span> UX First UX <span>First</span></div>
                        <div className={`${style.Slider_box_item_des} ${style.Slider_box_item_des_1}`} >We solve complexity with simplicity: intuitive and innovative user interfaces, rooted in technically sound engineering.</div>
                        <div className={`${style.Slider_box_item_num} ${style.Slider_box_item_num_1}`} >01</div>
                    </div>
                    <div className={`${style.Slider_box_item} ${style.Slider_box_item_2}`} >
                        <img className={`${style.Slider_box_item_bg} ${style.Slider_box_item_bg_2}`} src={SlideBG2} alt="" />
                        <div className={`${style.Slider_box_item_title} ${style.Slider_box_item_title_2}`} >
                            <div>Feel <span>Stupid</span> Every Day</div>
                            <div>Feel Stupid <span>Every</span> Day</div>
                        </div>
                        <div className={`${style.Slider_box_item_des} ${style.Slider_box_item_des_2}`} >Everything we don’t know presents an opportunity. We actively explore the unknown, and live in perpetual curiosity.</div>
                        <div className={`${style.Slider_box_item_num} ${style.Slider_box_item_num_2}`} >02</div>
                    </div>
                    <div className={style.Slider_box_item} >
                        <img className={style.Slider_box_item_bg} src={SlideBG3} alt="" />
                        <div className={`${style.Slider_box_item_title} ${style.Slider_box_item_title_3}`} ><span>Move</span> with Urgency</div>
                        <div className={`${style.Slider_box_item_des} ${style.Slider_box_item_des_3}`} >The risk for startups is minimal compared to enterprise.<br /><br />Compared to big, legacy tech, we have tremendous agility, and the luxury of limited risk. Fail early, fail often, fail forward.</div>
                        <div className={`${style.Slider_box_item_num} ${style.Slider_box_item_num_3}`} >03</div>
                    </div>
                    <div className={style.Slider_box_item} >
                        <img className={style.Slider_box_item_bg} src={SlideBG4} alt="" />
                        <div className={`${style.Slider_box_item_title} ${style.Slider_box_item_title_4}`} >UX First UX <span>First</span> UX First UX <span>First</span></div>
                        <div className={`${style.Slider_box_item_des} ${style.Slider_box_item_des_4}`} >We solve complexity with simplicity: intuitive and innovative user interfaces, rooted in technically sound engineering.</div>
                        <div className={`${style.Slider_box_item_num} ${style.Slider_box_item_num_4}`} >04</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;