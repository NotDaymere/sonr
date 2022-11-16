import style from './Cards.module.scss'

import { useState, useRef, useEffect } from 'react'

import { gsap } from "gsap";

import IMG1 from '../../../../../assets/img/Technology/img1.png';
import Arrow from '../../../../../assets/img/Cards/arrow_3.svg';

//Elements

function Cards () {

    const [cardItemActive, setCardItemActive] = useState(null);
    const refCards = useRef([]);
    const refCardsBox = useRef([]);
    const refCardsImg = useRef([]);
    const refCardsBtn = useRef([]);
    const refCardsImgContainer = useRef([]);
    

    const dataCards = [
        {
            title : 'HNS Backed Top-Level Domain',
            des : 'Sonr leverages Handshake, making Sonr aliases universally resolvable as top-level domains across the Sonr Network.'
        },
        {
            title : 'Out-of-Box Filecoin & IPFS Support',
            des : 'Native integrations with Filecoin and IPFS enable low-cost decentralized data storage for all Sonr users.'
        },
        {
            title : 'W3C & Fido Compliant',
            des : 'Sonr’s blockchain comes with a built-in fully compliant decentralized identity implementation, enabling on-chain verification between the nodes within the Sonr network.'
        }
    ]

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
                { maxWidth: 340, duration : 1, ease:"power2.inOut" }
            ),gsap.to(refCardsBox.current[cardItemActive], 
                { opacity : .5, duration : .8, ease:"power2.inOut" }
            ),gsap.to(refCardsImgContainer.current[cardItemActive], 
                { opacity: 0, duration : .8, ease:"power2.inOut" }
            ))
        } else {
            tl.add(gsap.to(refCardsImgContainer.current[index], 
                { opacity: 1, duration : .8, ease:"power2.inOut" }
            ),gsap.to(refCards.current[index], 
                { maxWidth: 800, duration : .8, ease:"power2.inOut" }
            ),
            gsap.to(refCardsBox.current[index], 
                { opacity : 1, duration : 1, ease:"power2.inOut" }
            )).to(refCardsImg.current[index], 
                { opacity : 1, width: '100%', height: '100%', duration : 1, ease:"expo.inOut" }
            ).to(refCardsBtn.current[index], 
                { x : 20,  opacity : 1, duration : .5, ease:"expo.inOut" }
            )
    
            tl.add(gsap.to(refCardsBtn.current[cardItemActive], 
                { x : 0,  opacity : 0, duration : .5, ease:"expo.inOut" }
            ),gsap.to(refCardsImg.current[cardItemActive], 
                { opacity : 0, width: '0%', height: '0%', duration : 1, ease:"expo.inOut" }
            ),gsap.to(refCards.current[cardItemActive], 
                { maxWidth: 340, duration : 1, ease:"power2.inOut" }
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
                            <div className={style.Cards_item} ref={(el) => (refCards.current[index] = el)} data-index={index} onClick={CardActiveChange}>
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
                                    <img className={style.Cards_item_img} ref={(el) => (refCardsImg.current[index] = el)} src={IMG1} alt="" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;