import style from './Requirement.module.scss'

function Requirement (props) {
    return (
        <div className={style.Requirement}>
            <div className={style.Requirement_num}>0{props.num}</div>
            <div className={style.Requirement_text}>{props.text}</div>
        </div>
    )
}

export default Requirement;