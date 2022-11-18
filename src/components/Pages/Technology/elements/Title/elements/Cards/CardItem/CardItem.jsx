import style from './CardItem.module.scss'

//Elements

function CardItem (props) {

    

    return (
        <div 
            className={style.CardItem} 
            ref={props.ref}
            style={{zIndex : 50 - props.zIndex}}
        >
            <div 
                className={style.CardItem_container} 
                ref={props.ref}
                style={{backgroundColor : props.colors.bg}}
            >
                <div className={style.CardItem_box} style={{backgroundColor : props.colors.fill}}>
                    <img className={style.CardItem_img} src={props.img} alt="" />
                    <div className={style.CardItem_title}>{props.title}</div>
                    <div className={style.CardItem_subtitle}>{props.subtitle}</div>
                </div>
            </div>
        </div>
    )
}

export default CardItem;