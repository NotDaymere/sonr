import style from './CardItem.module.scss'



//Elements

function CardItem (props) {

    

    return (
        <div 
            className={style.CardItem} 
            style={{zIndex : 50 - props.zIndex}}
            
        >
            <div className={style.CardItem_container} ref={props.ref}>
                <div className={style.CardItem_box}>
                
                </div>
            </div>
        </div>
    )
}

export default CardItem;