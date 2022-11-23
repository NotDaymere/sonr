import style from './Restriction.module.scss'

function Restriction (props) {
    return (
        <div className={style.Restriction} style={{backgroundColor : props.bg}}>
            <div className={style.Restriction_num}>0{props.num}</div>
            <div className={style.Restriction_slashes}>///</div>
            <div className={style.Restriction_text}>{props.text}</div>
        </div>
    )
}

export default Restriction;