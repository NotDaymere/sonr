import style from './Restrictions.module.scss'

//Elements
import Restriction from './Restriction/Restriction';

const dataRestrictions = [
    {
        text : 'Workday must overlap by at least 6 hours with New York, NY, USA',
        bg : '#C9E5FF'
    },
    {
        text : 'Must be a resident of United States',
        bg : '#C1C7FF'
    }
    
]

function Restrictions () {
    return (
        <div className={style.Restrictions}>
            <div className={`${style.Restrictions_container} wr`}>
                <div className={style.Restrictions_title}>Remote restrictions</div>
                <div className={style.Restrictions_box}>
                    {dataRestrictions.map((item, index) => (
                        <Restriction num={index+1} text={item.text} bg={item.bg} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Restrictions;