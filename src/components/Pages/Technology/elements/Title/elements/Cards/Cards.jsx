import style from './Cards.module.scss'

import {useRef, useState, createRef, useEffect} from 'react'

//Elements
import CardItem from './CardItem/CardItem';

//SVG
import SVG1 from '../../../../../../../assets/img/Technology/Cards/figure_1.svg';
import SVG2 from '../../../../../../../assets/img/Technology/Cards/figure_2.svg';
import SVG3 from '../../../../../../../assets/img/Technology/Cards/figure_3.svg';

function Cards () {

    const CardItemContainer = createRef(null);
    const CardItems = useRef([]);

    useEffect(() => {
        console.log(CardItems);
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
        },
        {
            colors : {
                bg : '#FFFFFF',
                fill : '#ECEEFF'
            },
            img : SVG2,
            title : '11 Mb',
            subtitle : 'Lightweight Motor Node'
        },{
            colors : {
                bg : '#DAFFFA',
                fill : '#FFFFFF'
            },
            img : SVG3,
            title : '11 Mb',
            subtitle : 'Lightweight Motor Node'
        }
    ]

    const CardHover = (e) => {
        console.log(e.currentTarget, e.nativeEvent.layerY);

        CardItems.current.map((e, i) => {
            e.style = `
            z-index : ${50 - i};
            transition: margin-left .4s cubic-bezier(.55,-0.02,.57,.98), margin-right .4s cubic-bezier(.55,-0.02,.57,.98);
        `
            console.log(e)
        })

        let index = e.currentTarget.dataset.index;
        let posY = e.nativeEvent.layerY;
        let posX = e.nativeEvent.layerX;
        let sizeH = e.currentTarget.offsetHeight;
        let sizeW = e.currentTarget.offsetWidth;

        
        let marginTop = posY * -50 / sizeH
        let marginRight = posX * 150 / sizeW
        
        if(posY < sizeH) {
            e.currentTarget.style = `
                z-index : ${50 - index};
                margin-left : -40px;
                margin-right : ${marginRight}px;
                transform: translateY(${marginTop}px);
                transition: margin-left .4s cubic-bezier(.55,-0.02,.57,.98), margin-right 0 cubic-bezier(.55,-0.02,.57,.98);
            `
        }
        
    }

    const CardZero = (e) => {
        CardItems.current.map((e, i) => {
            e.style = `
            z-index : ${50 - i};
            transition: margin-left .4s cubic-bezier(.55,-0.02,.57,.98), margin-right .4s cubic-bezier(.55,-0.02,.57,.98);
        `
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
                    ref={(el) => (CardItems.current[index] = el)}
                    style={{zIndex : 50 - index}}
                    data-index={index}
                    onMouseMove={CardHover}
                >
                    <div 
                        className={style.CardItem_container} 
                        style={{backgroundColor : item.colors.bg}}
                    >
                        <div className={style.CardItem_box} style={{backgroundColor : item.colors.fill}}>
                            <img className={style.CardItem_img} src={item.img} alt="" />
                            <div className={style.CardItem_title}>{item.title}</div>
                            <div className={style.CardItem_subtitle}>{item.subtitle}</div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cards;