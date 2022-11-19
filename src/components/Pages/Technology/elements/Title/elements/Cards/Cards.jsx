import style from './Cards.module.scss'

import {useRef, useState, createRef, useEffect} from 'react'

//Elements
import CardItem from './CardItem/CardItem';

//SVG
import SVG1 from '../../../../../../../assets/img/Technology/Cards/figure_1.svg';
import SVG2 from '../../../../../../../assets/img/Technology/Cards/figure_2.svg';
import SVG3 from '../../../../../../../assets/img/Technology/Cards/figure_3.svg';

import { gsap } from "gsap";

function Cards () {

    const [cardItemsActive, setCardItemsActive] = useState(null);
    const CardItems = useRef([]);

    useEffect(() => {
        console.log(CardItems);
        CardItems.current[0].style.left = '10em'
        CardItems.current[1].style.left = '-2em'
        CardItems.current[2].style.left = '-14em'
    }, [])

    const dataCards = [
        {
            colors : {
                bg : '#ECEEFF',
                fill : '#FFFFFF'
            },
            img : SVG1,
            title : '30%',
            subtitle : 'Faster Transmission'
        }, {
            colors : {
                bg : '#FFFFFF',
                fill : '#ECEEFF'
            },
            img : SVG2,
            title : '11 Mb',
            subtitle : 'Lightweight Motor Node'
        }, {
            colors : {
                bg : '#DAFFFA',
                fill : '#FFFFFF'
            },
            img : SVG3,
            title : '11 Mb',
            subtitle : 'Lightweight Motor Node'
        }
    ]

    // const CardHover = (e) => {
    //     console.log(e.currentTarget, e.nativeEvent.layerY);

    //     CardItems.current.map((e, i) => {
    //         e.style = `
    //         z-index : ${50 - i};
    //     `
    //         console.log(e)
    //     })

    //     let index = e.currentTarget.dataset.index;
    //     let posY = e.nativeEvent.layerY;
    //     let posX = e.nativeEvent.layerX;
    //     let sizeH = e.currentTarget.offsetHeight;
    //     let sizeW = e.currentTarget.offsetWidth;

        
    //     let marginTop = posY * -50 / sizeH
    //     let marginRight = posX * 150 / sizeW
        
    //     if(posY < sizeH) {
    //         e.currentTarget.style = `
    //             z-index : ${50 - index};
    //             margin-left : -40px;
    //             margin-right : ${marginRight}px;
    //             transform: translateY(${marginTop}px);
    //         `
    //     }
        
    // }
    const CardHover = (e) => {
        let index = e.currentTarget.dataset.index;
        let posY = e.nativeEvent.layerY;
        let posX = e.nativeEvent.layerX;
        let sizeH = e.currentTarget.offsetHeight;
        let sizeW = e.currentTarget.offsetWidth;

        console.log(posX)

        let tl1 = gsap.timeline()
        let tl2 = gsap.timeline()
        let tl3 = gsap.timeline()
        let tl4 = gsap.timeline()

        let LandslideY = posY * -50 / sizeH
        let LandslideR = posX * 70 / sizeW
        let LandslideL = posX * 100 / sizeW / 2 * -1 - 80

        let deathZoneLeft = sizeW - (sizeW - (sizeW / 100 * 5))
        let deathZoneRight = sizeW - (sizeW / 100 * 5)
        
        if(posY < sizeH && deathZoneLeft < posX && deathZoneRight > posX) {

            gsap.to(CardItems.current[index], {
                x : LandslideL / 5,
                y : LandslideY, 
                duration : .2
            })

            CardItems.current.map((e, i) => {
                if(i < index) {
                    tl2.add(gsap.to(CardItems.current[i], {
                        x : LandslideL,
                        duration : .2
                    }))
                }
                if(i > index) {
                    tl3.add(gsap.to(CardItems.current[i], {
                        x : LandslideR,
                        duration : .2
                    }))
                }
            })
        }
    }

    const CardZero = (e) => {
        CardItems.current.map((e, i) => {
            let tl = gsap.timeline()
            tl.add(gsap.to(CardItems.current[i], {
                x : 0, 
                y : 0, 
                duration : .5
            }))
        })
    }

    return (
        <div 
            className={style.Cards}
            onMouseLeave={CardZero}
        >
            {dataCards.map((item, index) => (
                // <CardItem 
                //     ref={(el) => CardItems.current[index] = el}
                //     zIndex={index} 
                //     colors={item.colors} 
                //     img={item.img} 
                //     title={item.title} 
                //     subtitle={item.subtitle}  
                // />
                    <div 
                        className={style.CardItem} 
                        
                        style={{zIndex : 50 - index}}
                    >
                        <div 
                            className={style.CardItem_container} 
                            style={{backgroundColor : item.colors.bg}}
                            ref={(el) => (CardItems.current[index] = el)}
                        >
                            <div className={style.CardItem_box} style={{backgroundColor : item.colors.fill}}>
                                <img className={style.CardItem_img} src={item.img} alt="" />
                                <div className={style.CardItem_title}>{item.title}</div>
                                <div className={style.CardItem_subtitle}>{item.subtitle}</div>
                            </div>
                        </div>
                    </div>
            ))}
            <div className={style.CardItem_hover} >
                {dataCards.map((item, index) => (
                    <div className={style.CardItem_hover_item_box}>
                        <div 
                            className={style.CardItem_hover_item} 
                            style={{zIndex : 100 - index}}
                            data-index={index}
                            onMouseMove={CardHover}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards;