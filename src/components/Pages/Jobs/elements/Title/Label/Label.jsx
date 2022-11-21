import style from './Label.module.scss'

function Label (props) {
    return (
        <div className={style.Label}>{props.title}</div>
    )
}

export default Label;