import style from './Footer.module.scss'

//Elements
import Social from '../../../Social/Social';

//IMG
import Likes_1 from '../../../../../../../assets/img/Article/img/likes_1.png';
import Likes_2 from '../../../../../../../assets/img/Article/img/likes_2.png';

//SVG
import Like from '../../../../../../../assets/img/Article/icon/Like';
import Comment from '../../../../../../../assets/img/Article/icon/Comment';
import Massage from '../../../../../../../assets/img/Article/icon/Massage';

const dataSocial = [
    {
        text : '5',
        icon : <Like color='#F6F6F6' />
    },
    {
        icon : <Comment color='#F6F6F6' />
    },
    {
        icon : <Massage color='#F6F6F6' />
    }
]

function Footer (props) {
    return (
        <div className={`${style.Footer}`} >
            <div className={`${style.Footer_container} wr wr-community`} >
                <div className={style.Footer_likes}>
                    <div className={style.Footer_likes_images}>
                        <img className={style.Footer_likes_img} src={Likes_1} alt="" />
                        <img className={style.Footer_likes_img} src={Likes_2} alt="" />
                    </div>
                    <div className={style.Footer_likes_count}>
                        5 likes
                    </div>
                </div>
                <div className={style.Footer_social}>
                    {dataSocial.map((item) => (
                        <Social data={item} theme='black' />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer;