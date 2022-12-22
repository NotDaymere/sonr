import style from './Slider.module.scss'


//Media
import ArrowDown from '../../../../../assets/img/About/arrowDown.svg';
import Eye from '../../../../../assets/img/eye.svg';

import SlideBG1 from '../../../../../assets/img/About/slider/1.jpg' 
import SlideBG2 from '../../../../../assets/img/About/slider/2.png' 
import SlideBG3 from '../../../../../assets/img/About/slider/3.jpg' 
import SlideBG4 from '../../../../../assets/img/About/slider/4.jpg' 

import SliderIcon_1_1 from '../../../../../assets/img/About/slider/sliderItem_1/circle.svg' 
import SliderIcon_1_2 from '../../../../../assets/img/About/slider/sliderItem_1/line.svg'
import SliderIcon_2_1 from '../../../../../assets/img/About/slider/sliderItem_2/circle.svg' 
import SliderIcon_2_2 from '../../../../../assets/img/About/slider/sliderItem_2/line.svg' 
import SliderIcon_3_1 from '../../../../../assets/img/About/slider/sliderItem_3/circle.svg' 
import SliderIcon_3_2 from '../../../../../assets/img/About/slider/sliderItem_3/line.svg' 
import SliderIcon_4_1 from '../../../../../assets/img/About/slider/sliderItem_4/circle.svg' 
import SliderIcon_4_2 from '../../../../../assets/img/About/slider/sliderItem_4/line.svg' 

import { useRef, useEffect, useState } from 'react'

//Animate
import { gsap } from "gsap";

const dataSlider = [
    {
        title: <>UX <span>First</span></>,
        subtitle: [
            'We solve complexity with simplicity: intuitive and innovative user interfaces, rooted in technically sound engineering.'
        ],
        icons: [
            SliderIcon_1_1,
            SliderIcon_1_2
        ]
    },{
        title: <>Feel Stupid <span>Every</span> Day</>,
        subtitle: [
            'Everything we don’t know presents an opportunity. We actively explore the unknown, and live in perpetual curiosity.'
        ],
        icons: [
            SliderIcon_2_1,
            SliderIcon_2_2
        ]
    },{
        title: <>Move <span> with</span> Urgency</>,
        subtitle: [
            'The risk for startups is minimal compared to enterprise.',
            'Compared to big, legacy tech, we have tremendous agility, and the luxury of limited risk. Fail early, fail often, fail forward.'
        ],
        icons: [
            SliderIcon_3_1,
            SliderIcon_3_2
        ]
    },{
        title: <>nobody is<span> right</span>...</>,
        subtitle: [
            'In a nascent industry, answering the right questions begins with questioning the right answers'
        ],
        icons: [
            SliderIcon_4_1,
            SliderIcon_4_2
        ]
    }
]

function Slider () {
    const refArrow = useRef([]);
    const refSlider = useRef([]);

    useEffect(() => {
        const dur = .3;
        let tl = gsap.timeline({repeat: -1, repeatDelay: .5});
        tl.to(refArrow.current[0], {opacity : .2, duration : dur, ease:"expo.inOut" })
        .to(refArrow.current[1], {opacity : .5, duration : dur, ease:"expo.inOut" })
        .to(refArrow.current[2], {opacity : 1, duration : dur, ease:"expo.inOut" })
        .to(refArrow.current[0], {opacity : 0, duration : dur, ease:"expo.inOut" })
        .to(refArrow.current[1], {opacity : 0, duration : dur, ease:"expo.inOut" })
        .to(refArrow.current[2], {opacity : 0, duration : dur, ease:"expo.inOut" })
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
                        {dataSlider.map((e, i) => (
                            <div 
                                className={`${style.Slider_box_item} ${style[`Slider_box_item_${i+1}`]} ${i%2!=0 && style.right}`}
                                ref={(e) => refSlider.current[i] = e}
                                key={i}
                            >
                                {e.icons.map((el, ind) => (
                                    <img className={`${style.Slider_box_item_bg} ${style[`Slider_box_item_bg_${i+1}_${ind+1}`]}`} key={ind} src={el} alt="" />
                                ))}
                                <div className={style.Slider_box_item_content}>
                                    <div className={`${style.Slider_box_item_num} ${style[`Slider_box_item_num_${i+1}`]}`} >0{i+1}</div>
                                    <div className={style.Slider_box_item_content_bottom}>
                                        <div className={`${style.Slider_box_item_title} ${style[`Slider_box_item_title_${i+1}`]}`} >{e.title}</div>
                                        <div className={`${style.Slider_box_item_des} ${style[`Slider_box_item_des_${i+1}`]}`} >
                                            {e.subtitle.map((el, ind) => (
                                                <div key={ind}>{el}</div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider;