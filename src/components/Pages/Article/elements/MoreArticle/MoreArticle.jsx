import style from './MoreArticle.module.scss'

//Elements
import Filter from '../../../../Filter/Filter';
import Post from '../../../../Post/Post';

//IMG
import Img1 from '../../../../../assets/img/Blog/posts/post_2.jpg'
import Img2 from '../../../../../assets/img/Blog/posts/post_5.jpg'
import Img3 from '../../../../../assets/img/Blog/posts/post_6.jpg'

const dataCat = [
    'New',
    'Community',
]

const dataPost = [
    {
        className : 'little middle',
        img : Img1,
        title : '🎉 Introducing our First Motor Package 🚗',
        author : 'PRAD NUKALA',
        likes : 5,
        des : 'Sonr’s Flutter SDK package is live at motor.build'
    },
    {
        className : 'little middle',
        img : Img2,
        title : '🎉 Introducing our First Motor Package 🚗',
        author : 'PRAD NUKALA',
        likes : 5,
        des : 'Sonr’s Flutter SDK package is live at motor.build'
    },
    {
        className : 'little middle',
        img : Img3,
        title : '🎉 Introducing our First Motor Package 🚗',
        author : 'PRAD NUKALA',
        likes : 5,
        des : 'Sonr’s Flutter SDK package is live at motor.build'
    }
]

function MoreArticle () {
    return (
        <div className={`${style.MoreArticle} wr`}>
            <div className={style.MoreArticle_points} />
            <div className={style.MoreArticle_title} >MORE ARTICLES</div>
            <div className={style.MoreArticle_filter} ><Filter data={dataCat} /></div>
            <div className={style.MoreArticle_posts}>
                {dataPost.map((item,) => (
                    <Post data={item} />
                ))}
            </div>
        </div>
    )
}

export default MoreArticle;