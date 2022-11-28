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
                    {props.month.split('').map((item, index) => (
                        <div
                            className={style.TimeLineItem_header_month_item}
                            data-aos="slide-up"
                            data-aos-duration={1000 + 500 * index}
                            data-aos-delay="500"
                            data-aos-offset="200"
                        >{item}</div>
                    ))}
                </div>}
                {props.headerTitle && 
                    <div className={style.TimeLineItem_header_title}>
                        {props.headerTitle.split('').map((item, index) => (
                            <div
                                // className={style.TimeLineItem_header_month_item}
                                data-aos="slide-up"
                                data-aos-duration={1000 + index * 100}
                                data-aos-delay="500"
                                data-aos-offset="200"
                            >{item}</div>
                        ))}
                    </div>
                }
            </div>
            
            <div className={`${style.TimeLineItem_content} ${props.headerTitle && style.TimeLineItem_content_footer}`}>
                <div 
                    className={`
                        ${style.TimeLineItem_content_title} 
                        ${props.headerTitle && style.TimeLineItem_content_title_footer}
                    `}
                >
                    {props.title.split(' ').map((item) => (
                        <div className={style.TimeLineItem_content_title_inner}>
                            {item.split('').map((item, index) => (
                                <div
                                    // className={style.TimeLineItem_header_month_item}
                                    data-aos="slide-up"
                                    data-aos-duration={1000 + index * 200}
                                    data-aos-delay="200"
                                    data-aos-offset="0"
                                >{item}</div>
                            ))}
                        </div>
                    ))}
                </div>
                <div 
                    className={`
                        ${style.TimeLineItem_content_des} 
                        ${props.headerTitle && style.TimeLineItem_content_des_footer}
                    `}
                >
                    {props.des.split(' ').map((item) => (
                        <div className={style.TimeLineItem_content_des_inner}>
                            {item.split('').map((item, index) => (
                                <div
                                    // className={style.TimeLineItem_header_month_item}
                                    data-aos="slide-up"
                                    data-aos-duration={1000 + index * 200}
                                    data-aos-delay="200"
                                    data-aos-offset="0"
                                >{item}</div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TimeLineItem;