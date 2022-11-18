import style from './TimeLineItem.module.scss'

import { useEffect } from 'react';

//Animation
import AOS from 'aos';

function TimeLineItem (props) {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className={style.TimeLineItem}>
            <div className={style.TimeLineItem_header}>
                {props.img && <img 
                    className={`${style.TimeLineItem_header_img} ${style['TimeLineItem_header_img_' + props.imgClass]}`} 
                    src={props.img} 
                    alt=""
                />}
                {props.year && <div className={style.TimeLineItem_header_year}>{props.year}</div>}
                {props.month && <div 
                    className={style.TimeLineItem_header_month}
                >
                    {console.log(props.month.split(''))}
                    {props.month.split('').map((item, index) => (
                        <div
                            className={style.TimeLineItem_header_month_item}
                            data-aos="slide-up"
                            data-aos-duration={1000 + 500 * index}
                        >{item}</div>
                    ))}
                </div>}
                {props.headerTitle && <div className={style.TimeLineItem_header_title}>{props.headerTitle}</div>}
            </div>
            
            <div className={`${style.TimeLineItem_content} ${props.headerTitle && style.TimeLineItem_content_footer}`}>
                <div className={`${style.TimeLineItem_content_title} ${props.headerTitle && style.TimeLineItem_content_title_footer}`}>{props.title}</div>
                <div className={`${style.TimeLineItem_content_des} ${props.headerTitle && style.TimeLineItem_content_des_footer}`}>{props.des}</div>
            </div>
        </div>
    )
}

export default TimeLineItem;