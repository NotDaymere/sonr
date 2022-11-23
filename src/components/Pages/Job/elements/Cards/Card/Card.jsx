import style from './Card.module.scss'

import Arrow from "../../../../../../assets/img/Job/CardsIcon/arrow.svg";

function Card (props) {
    return (
        <div className={style.Card}>
            <div className={style.Card_container} style={{backgroundColor : props.bg}}>
                <div className={style.Card_num}>0{props.num}</div>
                <div className={style.Card_text}>{props.text}</div>
                <button className={style.Card_btn}>
                    <img src={Arrow} alt="" />
                </button>
                <img className={style.Card_icon}src={props.icon} alt="" />
            </div>
            
            <div className={style.Card_bg} />
        </div>
    )
}

export default Card;