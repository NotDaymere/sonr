import style from './FileInput.module.scss'

import { useEffect, useState } from 'react';

//SVG
import Clip from '../../../../../../../assets/img/Job/clip.svg'

function FileInput ({title, required}) {

    const [input, setInput]= useState(null)

    useEffect(() => {
    })

    return (
        <div className={style.FileInput}>
            <label className={style.FileInput_title}>
                {title}
                {required && <span>(required)</span>}
            </label>
            <div className={style.Link_input_box}>
                <label className={style.Link_clip} for='clip'>
                    <img src={Clip} alt="" />
                    {input ? input : 'Attach resume/CV'}
                </label>
                <input 
                    className={style.Input_input} 
                    type="file" 
                    required={required && required} 
                    id='clip'
                    onChange={(e) => setInput(e.target.files[0].name)}
                />
            </div>
            
        </div>
    )
}

export default FileInput;