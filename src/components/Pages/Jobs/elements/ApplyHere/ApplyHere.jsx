import style from './ApplyHere.module.scss'

//Elements
import Category from './Category/Category';
import Input from './Inputs/Input/Input';
import Link from './Inputs/Link/Link';
import Accordion from './Inputs/Accordion/Accordion';
import FileInput from './Inputs/FileInput/FileInput';
import TextArea from './Inputs/TextArea/TextArea';

//Source
import Sonr from '../../../../../assets/img/About/earth.mp4'
import Arrow from '../../../../../assets/img/Jobs/arrowUp.svg'

const dataInputs1 = [
    {
        title : 'Name',
        required : true
    },{
        title : 'Email address',
        required : true
    },{
        title : 'Phone number'
    },{
        title : 'Location',
        placeholder : 'City, state, etc.'
    },
]

const dataInputs2 = [
    {
        title : 'LinkedIn profile',
        link : 'https://linkedin.com/in/',
        required : true
    },{
        title : 'Twitter profile',
        link : 'https://twitter.com/'
    },{
        title : 'Dribbble profile',
        link : 'https://dribbble.com/'
    },{
        title : 'Website URL',
        link : 'https://'
    }
]

const dataInputs3 = [
    {
        title : 'Resume',
        required : true
    }
]

const dataInputs4 = [
    {
        title : 'In your own words, what’s the difference between UX and UI?'
    },{
        title : 'What was the last product you’ve built or designed? What was the most creative solution in that product? What were the outcomes?'
    },{
        title : 'Describe a time when your gut feeling or personal research clashed with your team (e.g. designers, data analysts, management). How did you handle the situation?'
    },{
        title : 'Tell us about a time your research influenced the product design or strategy. How did you make it happen?'
    },
]

const dataCategory = [
    {
        title : 'personal info',
        inputs : dataInputs1
    },{
        title : 'social',
        links : dataInputs2
    },{
        title : 'resume',
        files : dataInputs3
    },{
        title : 'answer a few questions',
        areas : dataInputs4
    }
]

function ApplyHere () {
    return (
        <div className={style.ApplyHere}>
            <div className={style.ApplyHere_bg} />
            <div className={`${style.ApplyHere_container} wr`}>
                <div className={style.ApplyHere_points} />
                <div className={style.ApplyHere_title}>APPLY HERE</div>
                <div className={style.ApplyHere_box}>
                    <form className={style.ApplyHere_form} action="">
                        {dataCategory.map((item) => (
                            <Category title={item.title}>
                                {item.inputs && item.inputs.map((item) => (
                                    <Input {...item} />
                                ))}
                                {item.links && 
                                    <div>
                                        {item.links.map((item, index) => (
                                            index < 1 && <Link {...item} />
                                        ))}

                                        <Accordion >
                                            {item.links.map((item, index) => (
                                                index > 0 && <Link {...item} />
                                            ))}
                                        </Accordion>
                                        
                                    </div>
                                }
                                {item.files && item.files.map((item) => (
                                    <FileInput {...item} />
                                ))}
                                {item.areas && item.areas.map((item) => (
                                    <TextArea {...item} />
                                ))}
                            </Category>
                        ))}

                        <div className={style.ApplyHere_btn_box}>
                            <div className={style.ApplyHere_btn_title}>Submit application</div>
                            <button className={style.ApplyHere_btn} type="submit">
                                <img src={Arrow} alt="" />
                            </button>
                        </div>

                    </form>
                    <div className={style.ApplyHere_sonr_box}>
                        <video className={style.ApplyHere_sonr} src={Sonr} autoPlay='autoplay' loop></video>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ApplyHere;