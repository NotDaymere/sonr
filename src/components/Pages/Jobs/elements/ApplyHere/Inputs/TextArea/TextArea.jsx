import style from './TextArea.module.scss'

function TextArea (props) {
    return (
        <div className={style.TextArea}>
            <label className={style.TextArea_title}>
                {props.title}
                {props.required && <span>(required)</span>}
            </label>
            <textarea 
                className={style.TextArea_input} 
                type="text" 
                required={props.required && props.required} 
                placeholder={props.placeholder && props.placeholder}
            />
        </div>
    )
}

export default TextArea;