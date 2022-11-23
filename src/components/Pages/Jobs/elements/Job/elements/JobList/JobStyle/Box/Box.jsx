import style from './Box.module.scss'

//Elements
import BoxItem from './BoxItem/BoxItem';

//Source


function Box ({jobs}) {

    return (
        <div className={style.Box}>
            {jobs.map(e => (
                <BoxItem />
            ))}
        </div>
    )
}

export default Box;