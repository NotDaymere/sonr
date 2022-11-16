import style from './Cards.module.scss'

import { useState, useRef } from 'react'

import { gsap } from "gsap";

import IMG1 from '../../../../../assets/img/Technology/img1.png';

//Elements

function Cards () {

    const [cardItemActive, setCardItemActive] = useState(null);
    const refCards = useRef([]);
    const refCardsImg = useRef([]);
    const refCardsImgContainer = useRef();

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

    const CardActiveChange = (e) => {
        const index = e.currentTarget.dataset.index;
        setCardItemActive(index);
        let tl = gsap.timeline();

        if(index == cardItemActive) {
            tl.to(refCards.current[index], 
                { maxWidth: 800, duration : 1, ease:"power2.inOut" }
            ).to(refCardsImg.current[index], 
                { opacity : 1, width: '100%', height: '100%', duration : 1, ease:"expo.inOut" }
            ).reverse(1);
        } else {
            tl.to(refCards.current[index], 
                { maxWidth: 800, duration : 1, ease:"power2.inOut" }
            ).to(refCardsImg.current[index], 
                { opacity : 1, width: '100%', height: '100%', duration : 1, ease:"expo.inOut" }
            );
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
                                <div className={style.Cards_item_box}>
                                    <div className={style.Cards_item_num}>0{index+1}</div>
                                    <div className={style.Cards_item_title}>{item.title}</div>
                                    <div className={style.Cards_item_subtitle}>{item.des}</div>
                                    <div className={style.Cards_item_border}>
                                        <div className={style.Cards_item_border_item}></div>
                                    </div>
                                </div>
                                <div className={style.Cards_item_img_container} ref={refCardsImgContainer}>
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