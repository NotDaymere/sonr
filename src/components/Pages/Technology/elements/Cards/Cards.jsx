import style from './Cards.module.scss'

import { useState, useRef } from 'react'

import { gsap } from "gsap";

//Elements

function Cards () {

    const [cardItemActive, setCardItemActive] = useState(null);
    const refCards = useRef([]);

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

        let tl = gsap.timeline();
        tl.to(refCards.current, 
            { maxWidth: 800, duration : 1, ease:"power2.inOut" }
        );
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
                    {dataCards.map((item, index) => (
                        <div className={style.Cards_item} ref={refCards} data-index={index} onClick={CardActiveChange}>
                            <div className={style.Cards_item_box}>
                                <div className={style.Cards_item_num}>0{index+1}</div>
                                <div className={style.Cards_item_title}>{item.title}</div>
                                <div className={style.Cards_item_subtitle}>{item.des}</div>
                                <div className={style.Cards_item_border}>
                                    <div className={style.Cards_item_border_item}></div>
                                </div>
                            </div>
                            <img src="" alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards;