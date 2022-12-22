import style from './SelectFilter.module.scss'

import { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux' 
import { changeStyleView } from '../../../../../../../../../store/jobsSlice'

//Elements

//Source

function SelectFilter ({id}) {
    const dispatch = useDispatch()

    const styleView = useSelector(state => state.jobs.styleView)

    const changeStyle = () => dispatch(changeStyleView({id}))

    const WindowResize = () => {
        const width = window.innerWidth
        width < 768 && dispatch(changeStyleView({id: 1}))
    }

    useEffect(() => {
        WindowResize()
        window.addEventListener("resize", WindowResize);
        return () => window.removeEventListener("resize", WindowResize);
    }, [])

    return (
        <div className={`${style.SelectFilter} ${styleView === id && style.active}`} onClick={changeStyle} >
            {
                {
                0: <div className={`${style.SelectFilter_icon} ${style.SelectFilter_icon_list}`}>
                    <div className={style.SelectFilter_icon_list_item} />
                    <div className={style.SelectFilter_icon_list_item} />
                    <div className={style.SelectFilter_icon_list_item} />
                </div>,
                1: <div className={`${style.SelectFilter_icon} ${style.SelectFilter_icon_box}`}>
                    <div className={style.SelectFilter_icon_box_item} />
                    <div className={style.SelectFilter_icon_box_item} />
                    <div className={style.SelectFilter_icon_box_item} />
                    <div className={style.SelectFilter_icon_box_item} />
                </div>
                }[id]
            }
        </div>
    )
}

export default SelectFilter;