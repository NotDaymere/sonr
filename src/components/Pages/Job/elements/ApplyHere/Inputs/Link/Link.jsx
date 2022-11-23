import style from './Link.module.scss'

function Link (props) {
    return (
        <div className={style.Link}>
            <label className={style.Link_title}>
                {props.title}
                {props.required && <span>(required)</span>}
            </label>
            <div className={style.Link_input_box}>
                <div className={style.Link_link}>{props.link}</div>
                <input 
                    className={style.Link_input} 
                    type="text" 
                    required={props.required && props.required} 
                    placeholder={props.placeholder && props.placeholder} 
                />
            </div>
            
        </div>
    )
}

export default Link;