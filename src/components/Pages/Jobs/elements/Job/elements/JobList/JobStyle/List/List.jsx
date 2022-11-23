import style from './List.module.scss'

//Elements
import ListItem from './ListItem/ListItem';

function List ({jobs}) {

    return (
        <div className={style.List}>
            <div className={style.List_title}>
                <div className={style.List_title_category}>category</div>
                <div className={style.List_title_location}>location</div>
                <div className={style.List_title_visit}>Visit website</div>
                <div className={style.List_title_link}></div>
            </div>
            {jobs.map(e => (
                <ListItem 
                    title={e.title}
                    schedule={e.schedule}
                    location={e.location}
                    visit={e.visit}
                    link={e.link}
                />
            ))}
        </div>
    )
}

export default List;