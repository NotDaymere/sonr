import style from './Cards.module.scss'

import {useRef, createRef} from 'react'

//Elements
import CardItem from './CardItem/CardItem';

//SVG
import SVG1 from '../../../../../../../assets/img/Technology/Cards/figure_1.svg';
import SVG2 from '../../../../../../../assets/img/Technology/Cards/figure_2.svg';
import SVG3 from '../../../../../../../assets/img/Technology/Cards/figure_3.svg';

function Cards () {

    const CardItemContainer = createRef(null);

    const CardItemHover = () => {
        console.log(1);
        CardItemContainer.current.style.transform = 'translateY(-50px)'
    };

    const dataCards = [
        {
            img : SVG1
        },
        {
            img : SVG2
        },
        {
            img : SVG3
        }
    ]

    return (
        <div className={style.Cards} onMouseEnter={CardItemHover}>
            {dataCards.map((item, index) => (
                <CardItem zIndex={index} ref={CardItemContainer} img={item.img} />
            ))}
        </div>
    )
}

export default Cards;