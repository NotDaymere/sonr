import style from './Info.module.scss'

function Info (props) {
    return (
        <div className={style.Info}>
            <div className={style.Info_title}>{props.data.title}</div>
            <div className={style.Info_content}>{props.data.content}</div>
        </div>
    )
}

export default Info;