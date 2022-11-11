import { useState } from "react";

import './Filter.scss'

//SVG
import Arrow from "../../../../../../../assets/img/Blog/arrow-down.svg";
import Arrow_1 from "../../../../../../../assets/img/Blog/arrow-down_2.svg";

function FilterCat (props) {
    return (
        <button className={`FilterCat ${props.className}`} onClick={props.onClick} >
            {props.title}
            {props.icon && <img src={props.icon} alt="" />}
        </button>
    )
}

function Filter () {

    const [isOpenFilter, setIsOpenFilter] = useState(false);
    const [isOpenTime, setIsOpenTime] = useState(false);

    const dataCat = [
        'New',
        'Community',
        'Archive'
    ]

    const toggleOpenFilter = () => {
        setIsOpenFilter(!isOpenFilter);
    };
    const toggleCloseFilter = () => {
        setIsOpenFilter(false);
    };

    const toggleOpenTime = () => {
        setIsOpenTime(!isOpenTime);
    };
    const toggleCloseTime = () => {
        setIsOpenTime(false);
    };

    return (
        <div className="Filter">
            <div className="Filter_cat">
                <FilterCat title='All' className={`hub active ${isOpenFilter && 'open'}`} icon={Arrow_1} onClick={toggleOpenFilter} />
                <div className={`Filter_cat_container ${isOpenFilter && 'open'}`}>
                    <FilterCat title='All' className='active' onClick={toggleCloseFilter} />
                    {dataCat.map((title) => (
                        <FilterCat title={title} onClick={toggleCloseFilter} />
                    ))}
                </div>
                
            </div>
            <div className="Filter_time">
                <div className={`Filter_time_title ${isOpenTime && 'open'}`} onClick={toggleOpenTime}>latest<img src={Arrow} alt="" /></div>

                <div className={`Filter_time_container ${isOpenTime && 'open'}`}>
                    <div className="Filter_time_container_item" onClick={toggleCloseTime}>latest</div>
                    <div className="Filter_time_container_item" onClick={toggleCloseTime}>latest</div>
                    <div className="Filter_time_container_item" onClick={toggleCloseTime}>latest</div>
                </div>
            </div>
        </div>
    )
}

export default Filter;