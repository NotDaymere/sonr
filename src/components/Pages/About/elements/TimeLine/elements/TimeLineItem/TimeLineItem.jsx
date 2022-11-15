import style from './TimeLineItem.module.scss'

function TimeLineItem (props) {
    return (
        <div className={style.TimeLineItem}>
            <div className={style.TimeLineItem_header}>
                {props.img && <img className={`${style.TimeLineItem_header_img} ${style['TimeLineItem_header_img_' + props.imgClass]}`} src={props.img} alt="" />}
                {props.year && <div className={style.TimeLineItem_header_year}>{props.year}</div>}
                {props.month && <div className={style.TimeLineItem_header_month}>{props.month}</div>}
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