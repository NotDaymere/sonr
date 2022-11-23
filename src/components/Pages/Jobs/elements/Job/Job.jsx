import style from './Job.module.scss'

//Elements
import JobFilter from './elements/JobFilter/JobFilter';
import JobList from './elements/JobList/JobList';

//Source


function Job () {

    return (
        <div className={style.Job}>
            <div className={`${style.Job_container} wr`}>
                <JobFilter />
                <JobList />
            </div>
        </div>
    )
}

export default Job;