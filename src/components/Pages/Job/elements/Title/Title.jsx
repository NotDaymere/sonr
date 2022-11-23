import style from './Title.module.scss'

//Elements
import Label from './Label/Label';

//IMG
import IMG from "../../../../../assets/img/Jobs/title.jpg";

const dataLabels = [
    'Design & User Experience',
    'Full-time',
    'Brooklyn, NY',
    'Remote friendly',
    '90K - 125K USD a year'
]

function Title () {
    return (
        <div className={style.Title}>
            <div className={`${style.Title_container} wr`}>
                <div className={style.Title_subtitle}>Posted on June 16th, 2022</div>
                <div className={style.Title_title}>Lead Designer</div>

                <div className={style.Title_label_container}>
                    {dataLabels.map(item => (
                        <Label title={item} />
                    ))}
                    
                </div>

                <img className={style.Title_img} src={IMG} alt="" />

                <div className={style.Title_des}>
                    <div className={style.Title_des_title}>Description</div>
                    <div className={style.Title_des_content}>
                        <div className={style.Title_des_content_title}>We are looking for an experienced and creative UI/UX Designer to join our team!</div>
                        <div className={style.Title_des_content_text}>
                            <div>As a UI-UX Designer, you will be responsible for delivering the best online user experience, which makes your role extremely important for our success and ensuring customer satisfaction and loyalty.</div>
                            <div>You will be designing ideas using various methods and the latest technology. You will be designing graphic user interface elements, like menus, tabs, forms, and widgets.</div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Title;