import style from './Contact.module.scss'

import { useRef, useEffect } from 'react';

//Elements
import Forms from './Forms/Forms';

//Source
import Figures from '../../../../../assets/img/Jobs/figures.svg'


function Contact () {
    return (
        <div className={style.Contact}>
            <div className={`${style.Contact_container} wr`}>
                <div className={style.Contact_img_box}>
                    <img src={Figures} alt="" />
                </div>
                <div className={style.Contact_subtitle}>We are always happy to help</div>
                <div className={style.Contact_title}>Contact FORM</div>
                <Forms />
            </div>
        </div>
    )
}

export default Contact;