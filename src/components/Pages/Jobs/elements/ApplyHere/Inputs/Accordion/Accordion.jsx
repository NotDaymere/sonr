import style from './Accordion.module.scss'

import { useState, useEffect, useRef } from 'react'

function Accordion (props) {

    const [accordionActive, setAccordionActive] = useState(false);
    const content = useRef(null);

    const ChangeAccordion = () => {
        setAccordionActive(!accordionActive)

        if(!accordionActive) {
            content.current.style.height = content.current.scrollHeight + 'px';
        } else {
            content.current.style.height = 0 + 'px';
        }
    }

    useEffect(() => {

    })

    return (
        <div className={style.Accordion}>
            <div className={style.Input_title} onClick={ChangeAccordion} >
                <div className={style.Input_title_text}>{accordionActive ? 'less socials' : 'more socials'}</div>
                <div className={`${style.Input_title_icon} ${accordionActive && style.Input_title_icon_active}`} />
            </div>
            <div 
                className={`${style.Accordion_content} ${accordionActive && style.Accordion_content_active}`}
                ref={content}
            >
                {console.log(props.children)}
                {props.children}
            </div>
        </div>
    )
}

export default Accordion;