import style from './TextItem.module.scss'

function TextItem (props) {
    return (
        <div className={`${style.TextItem}`} >
            {props.text}
        </div>
    )
}

export default TextItem;