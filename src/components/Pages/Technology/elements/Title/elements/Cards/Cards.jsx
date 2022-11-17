import style from './Cards.module.scss'

import {useRef, createRef, useEffect} from 'react'

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

    return (
        <div className={style.Cards} >
            {dataCards.map((item, index) => (
                <CardItem 
                    ref={(el) => CardItems.current[index] = el}
                    zIndex={index} 
                    colors={item.colors} 
                    img={item.img} 
                    title={item.title} 
                    subtitle={item.subtitle}  
                />
            ))}
        </div>
    )
}

export default Cards;