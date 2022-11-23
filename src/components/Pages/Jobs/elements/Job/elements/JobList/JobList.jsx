import style from './JobList.module.scss'

import { useSelector } from 'react-redux' 

//Elements
import JobsList from './JobStyle/List/List';
import JobsBox from './JobStyle/Box/Box';

//Source

const dataJobs = [
    {
        title: 'Lead Designer',
        schedule: 'Full-time 90K - 125K USD a year',
        location: [
            'Remote friendly',
            'Brooklyn, NY'
        ],
        visit: "5M",
        link: '#'
    },{
        title: 'Developer Advocate (Flutter)',
        schedule: 'Contract',
        location: [
            'Remote friendly'
        ],
        visit: "27d",
        link: '#'
    },{
        title: 'Application Ecosystem Development Manager',
        schedule: 'Full-time 120K - 150K USD a year',
        location: [
            'Remote friendly'
        ],
        visit: "22d",
        link: '#'
    },{
        title: 'Senior Engineer - Applied Cryptography',
        schedule: 'Full-time',
        location: [
            'Remote friendly',
            'Brooklyn, NY'
        ],
        visit: "1M",
        link: '#'
    },{
        title: 'Senior System Design Architect',
        schedule: 'Full-time',
        location: [
            'Remote friendly'
        ],
        visit: "26d",
        link: '#'
    },{
        title: 'Executive Assistant to CEO',
        schedule: 'Full-time',
        location: [
            'Remote friendly',
            'Austin, TX'
        ],
        visit: "24d",
        link: '#'
    }
]

function JobList () {

    const styleView = useSelector(state => state.jobs.styleView)

    return (
        <div className={style.JobList}>
            {
                {
                    0: <JobsList jobs={dataJobs} />,
                    1: <JobsBox jobs={dataJobs} />
                }[styleView]
            }
        </div>
    )
}

export default JobList;