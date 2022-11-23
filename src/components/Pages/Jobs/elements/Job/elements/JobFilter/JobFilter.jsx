import style from './JobFilter.module.scss'

//Elements
import SelectFilter from './elements/SelectFilter/SelectFilter';

//Source


function JobFilter () {

    return (
        <div className={style.JobFilter}>
            {[1, 2].map((e, i) => (
                <SelectFilter id={i} />
            ))}
        </div>
    )
}

export default JobFilter;