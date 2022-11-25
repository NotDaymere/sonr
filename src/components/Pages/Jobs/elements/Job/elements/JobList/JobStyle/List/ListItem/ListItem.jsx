import style from './ListItem.module.scss'

//Elements

//Source
import Arrow from '../../../../../../../../../../assets/img/Jobs/arrowUpMini.svg'

function ListItem ({title, schedule, location, visit, link}) {

    console.log(location)

    return (
        <div className={style.ListItem}>
            <div className={style.ListItem_category}>
                <div className={style.ListItem_position}>{title}</div>
                <div className={style.ListItem_schedule}>
                    {schedule.map(e => (
                        <div className={style.ListItem_schedule_item}>{e}</div>
                    ))}
                </div>
            </div>
            <div className={style.ListItem_location}>
                {location.map(e => (
                    <div className={style.ListItem_location_item}>{e}</div>
                ))}
            </div>
            <div className={style.ListItem_visit}>{visit}</div>
            <div className={style.ListItem_link}>
                <a href={link}>
                    View job
                    <div className={style.ListItem_link_icon}><img src={Arrow} alt="" /></div>
                </a>
            </div>
        </div>
    )
}

export default ListItem;