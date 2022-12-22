import style from './DropFilter.module.scss'

import { useState, useRef } from 'react'

//Elements

//Source

const dataDropFilter = [
    {
        title: 'Location',
        filters: [
            'All category',
            'Design & User Experience',
            'Customer & Community',
            'Software Development',
            'Operations & Finance'
        ]
    },{
        title: 'Category',
        filters: [
            'All category',
            'Design & User Experience',
            'Customer & Community',
            'Software Development',
            'Operations & Finance'
        ]
    },{
        title: 'Type',
        filters: [
            'All category',
            'Design & User Experience',
            'Customer & Community',
            'Software Development',
            'Operations & Finance'
        ]
    }
]

function DropFilterItem ({title, filters}) {
    const refDropList = useRef()
    const refRoot = useRef()
    const [filterActive, setFilterActive] = useState(false)

    const HandleClickFilter = (e) => {
        const params = e.currentTarget.getClientRects()[0]
        const topPos = params.y + params.height + 10
        const leftPos = params.x
        console.log(refDropList.current.style)
        refDropList.current.style.left = `${leftPos}px`
        refDropList.current.style.top = `${topPos}px`
        setFilterActive(!filterActive)
    }

    return (
        <div className={`${style.DropFilterItem} ${filterActive && style.active}`} ref={refRoot} onClick={HandleClickFilter} >
            {title}
            <svg className={style.DropFilterItem_icon} width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>

            <div className={style.DropFilterItem_filters} ref={refDropList}>
                {filters.map((e, i) => (
                    <div className={style.DropFilterItem_filters_item} key={i} >{e}</div>
                ))}
            </div>
        </div>
    )
}

function DropFilter () {

    return (
        <div className={style.DropFilter}>
            {dataDropFilter.map((e, i) => (
                <DropFilterItem 
                    title={e.title}
                    filters={e.filters}
                    key={i}
                />
            ))}
        </div>
    )
}

export default DropFilter;