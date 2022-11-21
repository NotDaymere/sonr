import style from './Requirements.module.scss'

//Elements
import Requirement from './Requirement/Requirement';

const dataRequirement = [
    'Knowledge of Adobe range of products including Photoshop, Illustrator, InDesign, Acrobat, and Dreamweaver',
    'Knowledge of Figma and WebfloW',
    'Some knowledge of Usability Factors in Human-Computer Interactio',
    'Bachelor’s degree in relevant fielD',
    'UI Design Portfolio',
    'Detail orientated'
]

function Requirements () {
    return (
        <div className={style.Requirements}>
            <div className={`${style.Requirements_container} wr`}>
                <div className={style.Requirements_title}>You ARE</div>
                <div className={style.Requirements_box}>
                    {dataRequirement.map((item, index) => (
                        <Requirement text={item} num={index+1 } />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Requirements;