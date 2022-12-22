import style from './JobFilter.module.scss'

//Elements
import DropFilter from './elements/DropFilter/DropFilter';
import SelectFilter from './elements/SelectFilter/SelectFilter';

//Source


function JobFilter () {

    return (
        <div className={style.JobFilter}>
            <DropFilter />
            <div className={style.JobFilter_select}>
                {[1, 2].map((e, i) => (
                    <SelectFilter id={i} />
                ))}
            </div>
        </div>
    )
}

export default JobFilter;