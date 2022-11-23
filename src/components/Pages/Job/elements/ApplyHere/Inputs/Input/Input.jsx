import style from './Input.module.scss'

function Input (props) {
    return (
        <div className={style.Input}>
            <label className={style.Input_title}>
                {props.title}
                {props.required && <span>(required)</span>}
            </label>
            <input 
                className={style.Input_input} 
                type="text" 
                required={props.required && props.required} 
                placeholder={props.placeholder && props.placeholder}
            />
        </div>
    )
}

export default Input;