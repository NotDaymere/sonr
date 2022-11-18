import style from './Build.module.scss'

import { useState, useRef, useEffect } from 'react'

import { gsap } from "gsap";

import Stack from '../../../../../assets/img/Stack.mp4'

import Eye from '../../../../../assets/img/eye.svg'
import AngleLeft from '../../../../../assets/img/Technology/angle/left.svg'
import AngleRight from '../../../../../assets/img/Technology/angle/right.svg'

//Elements

function Build () {

    const [menuItemActive, setMenuItemActive] = useState(0);
    const refEye = useRef(null);
    const refVideo = useRef(null);

    const dataMenu = [
        'Registry',
        'schema',
        'bucket',
        'channel',
        'function'
    ]

    const dataDes = [
        [
            'Canonical storage for grouping of associated content identifiers (CIDs).',
            'Configurable access control across unlimited number of parties.'
        ],
        [
            'Canonical storage for grouping of associated content identifiers (CIDs).',
            'Configurable access control across unlimited number of parties.'
        ],
        [
            'Canonical storage for grouping of associated content identifiers (CIDs).',
            'Configurable access control across unlimited number of parties.'
        ],
        [
            'Canonical storage for grouping of associated content identifiers (CIDs).',
            'Configurable access control across unlimited number of parties.'
        ],
        [
            'Canonical storage for grouping of associated content identifiers (CIDs).',
            'Configurable access control across unlimited number of parties.'
        ],

    ]
    useEffect(() => {
        refVideo.current.currentTime = 0.34
    }, []);
    

    const MenuChange = (e) => {
        const top = e.target.offsetTop + ((e.target.offsetHeight - refEye.current.clientHeight) / 2) + 'px';
        
        console.log(refVideo);
        
        refEye.current.style.top = top;
        setMenuItemActive(e.target.dataset.index);


        let tl = gsap.timeline();
        tl.to(refVideo.current, 
            {y : -30, opacity : 0, duration : 1, ease : 'expo.inOut'}
        ).to(refVideo.current, 
            {y : 0, opacity : 1, duration : 1, ease : 'expo.inOut'}
        )

        const time = refVideo.current.duration / 6 * (Number(e.target.dataset.index) + 1)
        console.log(refVideo.current.duration);
        console.log(menuItemActive);
        console.log(time );
        setTimeout(() => {
            refVideo.current.currentTime = time
        }, 1000)
        
    }

    return (
        <div className={style.Build}>
            <div className={style.Build_title}>Simple <span>Building</span> Blocks for<br />a Complex Modern <span>Web</span></div>
            <div className={`${style.Build_container} wr`}>
                <div className={style.Build_content}>
                    <div className={style.Build_menu}>
                        {dataMenu.map((item, index) => (
                            <div className={`${style.Build_menu_item} ${index == menuItemActive && style.Build_menu_item_active}`} data-index={index} onClick={MenuChange}>{item}</div>
                        ))}

                        <img className={style.Build_menu_icon} ref={refEye} src={Eye} alt="" />
                    </div>
                    <div className={style.Build_content_title}>{dataMenu[menuItemActive]}</div>
                    <video className={style.Build_content_video} ref={refVideo} src={Stack} Time={0.34}></video>
                    <div className={style.Build_content_des}>
                        {dataDes[menuItemActive].map((item, index) => (
                            <div className={style.Build_content_des_item}>
                                <div className={style.Build_content_des_item_num}>0{index+1}</div>
                                <div className={style.Build_content_des_item_text}>{item}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className={style.Build_angle}>
                    <img className={style.Build_angle_item} src={AngleLeft} alt="" />
                    <img className={style.Build_angle_item} src={AngleRight} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Build;