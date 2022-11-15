import style from './Cards.module.scss'

import {useRef, createRef} from 'react'

//Elements
import CardItem from './CardItem/CardItem';

function Cards () {

    const CardItemContainer = createRef(null);

    const CardItemHover = () => {
        console.log(1);
        CardItemContainer.current.style.transform = 'translateY(-50px)'
    };

    return (
        <div className={style.Cards} onMouseEnter={CardItemHover}>
            {new Array(3).fill().map((item, index) => (
                <CardItem zIndex={index} ref={CardItemContainer} />
            ))}
        </div>
    )
}

export default Cards;