import style from './FileInput.module.scss'

import { useEffect, useState } from 'react';

//SVG
import Clip from '../../../../../../../assets/img/Job/clip.svg'

function FileInput ({func}) {

    return (
        <div className={style.FileInput}>
            <label className={style.Link_clip} for='clip'>
                <img src={Clip} alt="" />
                Add attachment
            </label>
            <input 
                className={style.Input_input} 
                type="file" 
                id='clip'
                multiple
                onChange={(e) => func(e)}
            />
        </div>
    )
}

export default FileInput;