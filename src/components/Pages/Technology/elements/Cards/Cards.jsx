import style from './Cards.module.scss'
import './Slider.css'

import { useState, useRef, useEffect } from 'react'

import { gsap } from "gsap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import IMG1 from '../../../../../assets/img/Technology/img1.png';
import Arrow from '../../../../../assets/img/Cards/arrow_3.svg';


const settings = {
    arrows: false,
    settings:  'unslick',
    responsive: [
        {
            breakpoint: 19200,
            settings:  'unslick'
        },
        {
            breakpoint: 768,
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
};

const dataCards = [
    {
        title : 'HNS Backed Top-Level Domain',
        des : 'Sonr leverages Handshake, making Sonr aliases universally resolvable as top-level domains across the Sonr Network.',
        img : IMG1
    },
    {
        title : 'Out-of-Box Filecoin & IPFS Support',
        des : 'Native integrations with Filecoin and IPFS enable low-cost decentralized data storage for all Sonr users.',
        img : IMG1
    },
    {
        title : 'W3C & Fido Compliant',
        des : 'Sonr’s blockchain comes with a built-in fully compliant decentralized identity implementation, enabling on-chain verification between the nodes within the Sonr network.',
        img : IMG1
    }
]

function Cards () {

    const [cardItemActive, setCardItemActive] = useState(null);
    const refCards = useRef([]);
    const refCardsBox = useRef([]);
    const refCardsImg = useRef([]);
    const refCardsBtn = useRef([]);
    const refCardsImgContainer = useRef([]);

    function CardActive(e) {
        const index = e.currentTarget.dataset.index;

        let tl = gsap.timeline();
        tl.add(gsap.fromTo(refCardsImgContainer.current[index], 
            { opacity: 0},
            { opacity: 1, duration : .8, ease:"power2.inOut" }
        ),gsap.fromTo(refCards.current[index], 
            { maxWidth: '34em' },
            { maxWidth: '80em', duration : .8, ease:"power2.inOut" }
        ),
        gsap.fromTo(refCardsBox.current[index], 
            { opacity : .5 },
            { opacity : 1, duration : 1, ease:"power2.inOut" }
        )).fromTo(refCardsImg.current[index], 
            { opacity : 0, width: '0%', height: '0%'},
            { opacity : 1, width: '100%', height: '100%', duration : 1, ease:"expo.inOut" }
        ).fromTo(refCardsBtn.current[index], 
            { x : '0em',  opacity : 0},
            { x : '2em',  opacity : 1, duration : .5, ease:"expo.inOut" }
        )
    }

    function CardDisable(e) {
        const index = e.currentTarget.dataset.index;
        
        let tl = gsap.timeline();
        tl.add(gsap.to(refCardsBtn.current[index], 
            { x : 0,  opacity : 0, duration : .5, ease:"expo.inOut" }
        ),gsap.to(refCardsImg.current[index], 
            { opacity : 0, width: '0%', height: '0%', duration : 1, ease:"expo.inOut" }
        ),gsap.to(refCards.current[index], 
            { maxWidth: '34em', duration : 1, ease:"power2.inOut" }
        ),gsap.to(refCardsBox.current[index], 
            { opacity : .5, duration : .8, ease:"power2.inOut" }
        ),gsap.to(refCardsImgContainer.current[index], 
            { opacity: 0, duration : .8, ease:"power2.inOut" }
        ))
    }

    function CardActiveChange(e) {
        const index = e.currentTarget.dataset.index;
        setCardItemActive(index);

        let tl = gsap.timeline();

        if (index == cardItemActive) {
            setCardItemActive(null);

            tl.add(gsap.to(refCardsBtn.current[cardItemActive], 
                { x : 0,  opacity : 0, duration : .5, ease:"expo.inOut" }
            ),gsap.to(refCardsImg.current[cardItemActive], 
                { opacity : 0, width: '0%', height: '0%', duration : 1, ease:"expo.inOut" }
            ),gsap.to(refCards.current[cardItemActive], 
                { maxWidth: '34em', duration : 1, ease:"power2.inOut" }
            ),gsap.to(refCardsBox.current[cardItemActive], 
                { opacity : .5, duration : .8, ease:"power2.inOut" }
            ),gsap.to(refCardsImgContainer.current[cardItemActive], 
                { opacity: 0, duration : .8, ease:"power2.inOut" }
            ))
        } else {
            tl.add(gsap.to(refCardsImgContainer.current[index], 
                { opacity: 1, duration : .8, ease:"power2.inOut" }
            ),gsap.to(refCards.current[index], 
                { maxWidth: '80em', duration : .8, ease:"power2.inOut" }
            ),
            gsap.to(refCardsBox.current[index], 
                { opacity : 1, duration : 1, ease:"power2.inOut" }
            )).to(refCardsImg.current[index], 
                { opacity : 1, width: '100%', height: '100%', duration : 1, ease:"expo.inOut" }
            ).to(refCardsBtn.current[index], 
                { x : '2em',  opacity : 1, duration : .5, ease:"expo.inOut" }
            )
    
            tl.add(gsap.to(refCardsBtn.current[cardItemActive], 
                { x : 0,  opacity : 0, duration : .5, ease:"expo.inOut" }
            ),gsap.to(refCardsImg.current[cardItemActive], 
                { opacity : 0, width: '0%', height: '0%', duration : 1, ease:"expo.inOut" }
            ),gsap.to(refCards.current[cardItemActive], 
                { maxWidth: '34em', duration : 1, ease:"power2.inOut" }
            ),gsap.to(refCardsBox.current[cardItemActive], 
                { opacity : .5, duration : .8, ease:"power2.inOut" }
            ),gsap.to(refCardsImgContainer.current[cardItemActive], 
                { opacity: 0, duration : .8, ease:"power2.inOut" }
            ))
        }
    }

    return (
        <div className={style.Cards}>
            <div className={`${style.Cards_container} wr`}>
                <div className={style.Cards_title}>Building <span>the future</span> requires a solid <span>foundation</span></div>
                <div className={style.Cards_des_box}>
                    <div className={style.Cards_slashes}>///</div>
                    <div className={style.Cards_des}>Sonr’s architecture is designed to ensure a reliable and secure end-to-end experience, compliant with key protocols and specifications from leading orgs, like WC3 and IPLD.</div>
                </div>
                <div className={style.Cards_content}>
                    <div className={style.Cards_content_container}>
                        {dataCards.map((item, index) => (
                            <div 
                                className={style.Cards_item} 
                                ref={(el) => (refCards.current[index] = el)} 
                                data-index={index} 
                                onMouseEnter={CardActive}
                                onMouseLeave={CardDisable}
                            >
                                <div className={style.Cards_item_box} ref={(el) => (refCardsBox.current[index] = el)}>
                                    <div className={style.Cards_item_num}>0{index+1}</div>
                                    <div className={style.Cards_item_title}>{item.title}</div>
                                    <div className={style.Cards_item_subtitle}>{item.des}</div>
                                    <div className={style.Cards_item_border}>
                                        <div className={style.Cards_item_border_item}></div>
                                    </div>
                                </div>
                                <div className={style.Cards_item_img_container} ref={(el) => (refCardsImgContainer.current[index] = el)}>
                                    <div className={style.Cards_item_btn_container} ref={(el) => (refCardsBtn.current[index] = el)}>
                                        <div className={style.Cards_item_btn_text} >learn more</div>
                                        <button className={style.Cards_item_btn} >
                                            <img src={Arrow} alt="" />
                                        </button>
                                    </div>
                                    <img className={style.Cards_item_img} ref={(el) => (refCardsImg.current[index] = el)} src={item.img} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                    
                </div>
                <div className={style.Cards_content_mob}>
                        <Slider {...settings}>
                            {dataCards.map((item, index) => (
                                <div className={style.Cards_item_mob}>
                                    <img className={style.Cards_item_mob_img} src={item.img} alt="" />
                                    <div className={style.Cards_item_mob_num}>0{index+1}</div>
                                    <div className={style.Cards_item_mob_title}>{item.title}</div>
                                    <div className={style.Cards_item_mob_des}>{item.des}</div>
                                </div>
                                )) }
                        </Slider>
                    </div>
                <div className={style.Cards_container_rings}>
                    <svg width="754" height="571" viewBox="0 0 754 571" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.06456 518.931C8.81175 524.239 14.9411 527.732 23.2614 529.474C31.585 531.217 42.063 531.199 54.4353 529.512C79.1787 526.14 111.389 516.113 148.857 500.343C223.786 468.808 319.64 414.354 418.652 344.451C517.664 274.548 601.062 202.449 655.858 142.398C683.259 112.369 703.489 85.3732 714.949 63.1858C720.679 52.0916 724.204 42.2241 725.347 33.7971C726.491 25.3737 725.251 18.4288 721.504 13.1212C717.757 7.81362 711.627 4.32092 703.307 2.57864C694.983 0.835641 684.505 0.85391 672.133 2.54014C647.39 5.91243 615.18 15.9398 577.711 31.7091C502.783 63.2444 406.928 117.699 307.916 187.602C208.904 257.505 125.506 329.604 70.7102 389.655C43.3092 419.683 23.079 446.679 11.6191 468.867C5.8889 479.961 2.36451 489.828 1.22092 498.255C0.077766 506.679 1.31738 513.624 5.06456 518.931Z" stroke="#D5D5D5" stroke-opacity="0.18"/>
                        <path d="M32.7482 558.143C36.4953 563.451 42.6247 566.943 50.9449 568.686C59.2685 570.429 69.7466 570.41 82.1189 568.724C106.862 565.352 139.072 555.325 176.541 539.555C251.469 508.02 347.324 453.566 446.336 383.663C545.348 313.759 628.746 241.661 683.542 181.61C710.943 151.581 731.173 124.585 742.633 102.398C748.363 91.3035 751.887 81.436 753.031 73.0091C754.174 64.5856 752.935 57.6407 749.187 52.3331C745.44 47.0255 739.311 43.5328 730.991 41.7906C722.667 40.0476 712.189 40.0658 699.817 41.7521C675.073 45.1243 642.863 55.1517 605.395 70.921C530.466 102.456 434.612 156.911 335.6 226.814C236.588 296.717 153.19 368.816 98.3938 428.867C70.9928 458.895 50.7625 485.891 39.3027 508.079C33.5725 519.173 30.0481 529.04 28.9045 537.467C27.7614 545.891 29.001 552.836 32.7482 558.143Z" stroke="#D5D5D5" stroke-opacity="0.18"/>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Cards;