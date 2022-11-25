import style from './Box.module.scss'

//Elements
import BoxItem from './BoxItem/BoxItem';

//Source


function Box ({jobs}) {
    return (
        <div className={style.Box}>
            {jobs.map(e => (
                <BoxItem 
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

export default Box;