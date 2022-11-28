import style from './JobList.module.scss'

import { useRef, useEffect, useState } from 'react'
import { useSelector } from 'react-redux' 

//Elements
import JobsList from './JobStyle/List/List';
import JobsBox from './JobStyle/Box/Box';

//Source
import Arrow from '../../../../../../../assets/img/Jobs/arrowDown.svg';

//Animate
import { gsap } from "gsap";

const dataJobs = [
    {
        title: 'Lead Designer',
        schedule: [
            'Full-time',
            '90K - 125K USD a year'
        ],
        location: [
            'Remote friendly',
            'Brooklyn, NY'
        ],
        visit: "5M",
        link: '#'
    },{
        title: 'Developer Advocate (Flutter)',
        schedule: [
            'Contract'
        ],
        location: [
            'Remote friendly'
        ],
        visit: "27d",
        link: '#'
    },{
        title: 'Application Ecosystem Development Manager',
        schedule: [
            'Full-time',
            '120K - 150K USD a year'
        ],
        location: [
            'Remote friendly'
        ],
        visit: "22d",
        link: '#'
    },{
        title: 'Senior Engineer - Applied Cryptography',
        schedule: [
            'Full-time'
        ],
        location: [
            'Remote friendly',
            'Brooklyn, NY'
        ],
        visit: "1M",
        link: '#'
    },{
        title: 'Senior System Design Architect',
        schedule: [
            'Full-time'
        ],
        location: [
            'Remote friendly'
        ],
        visit: "26d",
        link: '#'
    },{
        title: 'Executive Assistant to CEO',
        schedule: [
            'Full-time'
        ],
        location: [
            'Remote friendly',
            'Austin, TX'
        ],
        visit: "24d",
        link: '#'
    }
]

function JobList () {
    const refArrow = useRef([]);

    const styleView = useSelector(state => state.jobs.styleView)

    useEffect(() => {
        const dur = .3;
        let tl = gsap.timeline({repeat: -1, repeatDelay: .5});
        tl.to(refArrow.current[0], {opacity : .2, duration : dur, ease:"expo.inOut" })
        .to(refArrow.current[1], {opacity : .5, duration : dur, ease:"expo.inOut" })
        .to(refArrow.current[2], {opacity : 1, duration : dur, ease:"expo.inOut" })
        .to(refArrow.current[0], {opacity : 0, duration : dur, ease:"expo.inOut" })
        .to(refArrow.current[1], {opacity : 0, duration : dur, ease:"expo.inOut" })
        .to(refArrow.current[2], {opacity : 0, duration : dur, ease:"expo.inOut" })
    }, []);

    return (
        <div className={style.JobList}>
            {
                {
                    0: <JobsList jobs={dataJobs} />,
                    1: <JobsBox jobs={dataJobs} />
                }[styleView]
            }

        <div className={style.JobList_arrows}  >
            <img src={Arrow} alt="" ref={e => refArrow.current[0] = e} />
            <img src={Arrow} alt="" ref={e => refArrow.current[1] = e} />
            <img src={Arrow} alt="" ref={e => refArrow.current[2] = e} />
        </div>
        </div>
    )
}

export default JobList;