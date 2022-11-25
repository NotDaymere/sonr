import style from './Slider.module.scss'

import ArrowDown from '../../../../../assets/img/About/arrowDown.svg';
import Eye from '../../../../../assets/img/eye.svg';

import SlideBG1 from '../../../../../assets/img/About/slider/1.jpg';
import SlideBG2 from '../../../../../assets/img/About/slider/2.png';
import SlideBG3 from '../../../../../assets/img/About/slider/3.jpg';
import SlideBG4 from '../../../../../assets/img/About/slider/4.jpg';

import { useRef, useEffect, useState } from 'react'

//Animate
import { gsap } from "gsap";

function Slider () {
    const refArrow = useRef([]);
    const refSlider = useRef([]);

    useEffect(() => {
        let tl = gsap.timeline({repeat: -1, repeatDelay: .5});
        tl.fromTo(refArrow.current[0], {opacity : .2}, {opacity : 0, duration : .4, ease:"expo.inOut" }
        ).fromTo(refArrow.current[1], {opacity : .5}, {opacity : 0, duration : .4, ease:"expo.inOut" }
        ).fromTo(refArrow.current[2], {opacity : 1}, {opacity : 0, duration : .4, ease:"expo.inOut" }
        )
    }, []);

    const scrollEvent = () => {
        refSlider.current.map((e, i) => {
            if (e.getBoundingClientRect().y == 0) {
                e.classList.add(style.active)
            } else {
                e.classList.remove(style.active)
            }
        })
    }

    window.addEventListener('scroll', scrollEvent);


    return (
        <div className={style.Slider}>
            <div className={`${style.Slider_container} wr`}>
                <div className={style.Slider_arrows}  >
                    <img src={ArrowDown} alt="" ref={e => refArrow.current[0] = e} />
                    <img src={ArrowDown} alt="" ref={e => refArrow.current[1] = e} />
                    <img src={ArrowDown} alt="" ref={e => refArrow.current[2] = e} />
                </div>

                <div className={style.Slider_container} >
                    <div className={style.Slider_box} >
                        <div 
                            className={style.Slider_box_item} 
                            ref={(e) => refSlider.current[0] = e}
                        >
                            <img className={style.Slider_box_item_bg} src={SlideBG1} alt="" />
                            <div className={`${style.Slider_box_item_title} ${style.Slider_box_item_title_1}`} >UX First UX <span>First</span> UX First UX <span>First</span></div>
                            <div className={`${style.Slider_box_item_des} ${style.Slider_box_item_des_1}`} >We solve complexity with simplicity: intuitive and innovative user interfaces, rooted in technically sound engineering.</div>
                            <div className={`${style.Slider_box_item_num} ${style.Slider_box_item_num_1}`} >01</div>
                        </div>
                        <div 
                            className={`${style.Slider_box_item} ${style.Slider_box_item_2}`} 
                            ref={(e) => refSlider.current[1] = e}
                        >
                            <img className={`${style.Slider_box_item_bg} ${style.Slider_box_item_bg_2}`} src={SlideBG2} alt="" />
                            <div className={`${style.Slider_box_item_title} ${style.Slider_box_item_title_2}`} >
                                <div>Feel <span>Stupid</span> Every Day</div>
                                <div>Feel Stupid <span>Every</span> Day</div>
                            </div>
                            <div className={`${style.Slider_box_item_des} ${style.Slider_box_item_des_2}`} >Everything we don’t know presents an opportunity. We actively explore the unknown, and live in perpetual curiosity.</div>
                            <div className={`${style.Slider_box_item_num} ${style.Slider_box_item_num_2}`} >02</div>
                        </div>
                        <div 
                            className={`${style.Slider_box_item} ${style.Slider_box_item_3}`} 
                            ref={(e) => refSlider.current[2] = e}
                        >
                            <img className={`${style.Slider_box_item_bg} ${style.Slider_box_item_bg_3}`} src={SlideBG3} alt="" />
                            <div className={`${style.Slider_box_item_title} ${style.Slider_box_item_title_3}`} ><span>Move</span> with Urgency</div>
                            <div className={`${style.Slider_box_item_des} ${style.Slider_box_item_des_3}`} >The risk for startups is minimal compared to enterprise.<br /><br />Compared to big, legacy tech, we have tremendous agility, and the luxury of limited risk. Fail early, fail often, fail forward.</div>
                            <div className={`${style.Slider_box_item_num} ${style.Slider_box_item_num_3}`} >03</div>
                        </div>
                        <div 
                            className={style.Slider_box_item} 
                            ref={(e) => refSlider.current[3] = e}
                        >
                            <img className={style.Slider_box_item_bg} src={SlideBG4} alt="" />
                            <div className={`${style.Slider_box_item_title} ${style.Slider_box_item_title_4} ${style.Slider_box_item_title_desk}`} ><span>Nobody</span><br />is Right...</div>
                            <div className={`${style.Slider_box_item_title} ${style.Slider_box_item_title_4} ${style.Slider_box_item_title_mob}`} ><div><span>Nobody</span> is</div><div>Right...</div></div>
                            <div className={`${style.Slider_box_item_des} ${style.Slider_box_item_des_4}`} >In a nascent industry, answering the right questions begins with questioning the right answers</div>
                            <div className={`${style.Slider_box_item_num} ${style.Slider_box_item_num_4}`} >04</div>
                            <img className={style.Slider_box_item_icon} src={Eye} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;