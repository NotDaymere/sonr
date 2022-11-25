import style from './Forms.module.scss'

import { useRef, useEffect, useState } from 'react';

//Elements
import FileInput from './FileInput/FileInput';


const dataNeed = [
    'Consultation',
    'Jobs',
    'Other'
]

function Forms () {
    const [needActive, setNeedActive] = useState(null)
    const [files, setFiles] = useState(null)

    const refInputs = useRef([])
    const refNeed = useRef()

    const autoSize = (e) => {
        e.target.style.height = "5px";
        e.target.style.height = (e.target.scrollHeight)+"px";
    }

    const getFiles = (e) => {
        setFiles(Array.from(e.target.files));
    }

    const deleteFile = (e) => {
        setFiles(files.filter(file => file.name !== e.currentTarget.attributes.name.value))
    }

    const formSubmit = (e) => {
        e.preventDefault();

        refInputs.current.map((e, i) => {
            console.log(e)
            e.classList.remove(style.required)
            e.parentElement.classList.remove(style.required)
            !e.value && e.classList.add(style.required)
            !e.value && e.parentElement.classList.add(style.required)
        })

        refNeed.current.classList.remove(style.required)
        !needActive && refNeed.current.classList.add(style.required)
    }

    return (
        <form className={style.Forms} action="" method="get">
            <div className={style.Forms_need}>
                <div className={style.Forms_need_title} ref={refNeed}>I need</div>
                <div className={style.Forms_need_select}>
                    {dataNeed.map((e, i) => (
                        <div 
                            className={`${style.Forms_need_select_item} ${needActive == i && style.active}`}
                            index={i}
                            onClick={(e) => setNeedActive(e.target.attributes.index.value)}
                        >
                            {e}
                        </div>
                    ))}
                </div>
            </div>
            <div className={style.Forms_inputs}>
                <div className={style.Forms_inputs_box}>
                    <div className={style.Forms_inputs_box}>
                        <input className={style.Forms_inputs_input} ref={e => refInputs.current[0] = e} type="text" placeholder='Your name' />
                    </div>
                    <div className={style.Forms_inputs_box}>
                        <input className={style.Forms_inputs_input} ref={e => refInputs.current[1] = e} type="text" placeholder='Your email' />
                    </div>
                </div>
                <div className={style.Forms_inputs_box}>
                    <textarea 
                        className={style.Forms_inputs_input} 
                        name="" 
                        id="" 
                        cols="30" 
                        rows="1" 
                        placeholder='Your question' 
                        ref={e => refInputs.current[2] = e}
                        onInput={(e) => autoSize(e)}
                    />
                </div>
                
            </div>
            <div className={style.Forms_fileInput}>
                <div className={style.Forms_fileInput_files}>
                    {files && files.map((e, i) => (
                        <div 
                            className={style.Forms_fileInput_files_item}
                            name={e.name}
                            onClick={deleteFile}
                        >
                            <div className={style.Forms_fileInput_files_item_icon} />
                            {e.name}
                        </div>
                    ))}
                </div>
                <FileInput func={getFiles} />
            </div>
            <div className={style.Forms_policy}>This site is protected by reCAPTCHA and the Google <span>Privacy Policy</span> and <span>Terms of Service</span> apply.</div>
            <div className={style.Forms_btn_box}>
                <button className={style.Forms_btn} type="submit" onClick={formSubmit}>
                    <div className={style.Forms_btn_text}>Submit</div>
                    <div className={style.Forms_btn_icon}></div>
                </button>
            </div>
        </form>
    )
}

export default Forms;