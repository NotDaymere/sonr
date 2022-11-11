import style from './Social.module.scss'

function Social (props) {
    return (
        <div className={`${style.Social} ${props.data.text && style.Social_text} ${props.theme && style.black}`}>
            {props.data.icon}
            {props.data.text && <span>{props.data.text}</span>}
            
        </div>
    )
}

export default Social;