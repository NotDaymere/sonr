import style from './BoxItem.module.scss'

//Elements

//Source
import Arrow from '../../../../../../../../../../assets/img/Jobs/arrowUpMini.svg'


function BoxItem ({title, schedule, location, visit, link}) {

    return (
        <div className={style.BoxItem}>
            <div className={style.BoxItem_top}>
                <div className={style.BoxItem_position}>{title}</div>
                <div className={style.BoxItem_visit}>{visit}</div>
            </div>
            <div className={style.BoxItem_middle}>
                <div className={style.BoxItem_schedule}>
                    {schedule.map(e => (
                        <div className={style.BoxItem_schedule_item}>{e}</div>
                    ))}
                </div>
            </div>
            <div className={style.BoxItem_bottom}>
                <div className={style.BoxItem_location}>
                    {location.map(e => (
                        <div className={style.BoxItem_location_item}>{e}</div>
                    ))}
                </div>
                <a className={style.BoxItem_link} href={link}>
                    View job
                    <div className={style.BoxItem_link_icon}><img src={Arrow} alt="" /></div>
                </a>
            </div>
        </div>
    )
}

export default BoxItem;