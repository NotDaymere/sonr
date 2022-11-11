import './Posts.scss'

//Elements
import Filter from '../../../../Filter/Filter';
import Post from '../../../../Post/Post';

//IMG
import Img1 from '../../../../../assets/img/Blog/posts/post_1.jpg'
import Img2 from '../../../../../assets/img/Blog/posts/post_2.jpg'
import Img3 from '../../../../../assets/img/Blog/posts/post_3.jpg'
import Img4 from '../../../../../assets/img/Blog/posts/post_4.jpg'
import Img5 from '../../../../../assets/img/Blog/posts/post_5.jpg'
import Img6 from '../../../../../assets/img/Blog/posts/post_6.jpg'

//SVG
import Arrow from '../../../../../assets/img/Blog/arrow-down_1.svg'

function Posts () {

    const dataPost = [
        {
            className : 'big',
            img : Img1,
            title : '🎉 Introducing our First Motor Package 🚗',
            author : 'PRAD NUKALA',
            likes : 5,
            des : 'Sonr’s Flutter SDK package is live at motor.build'
        },
        {
            className : 'little',
            img : Img2,
            title : 'How We Authenticate Every Twitter User',
            author : 'PRAD NUKALA',
            likes : 5,
            des : 'Sonr’s Flutter SDK package is live at motor.build'
        },
        {
            className : 'little',
            img : Img3,
            title : 'How We Authenticate Every Twitter User',
            author : 'PRAD NUKALA',
            likes : 5,
            des : 'Sonr’s Flutter SDK package is live at motor.build'
        },
        {
            className : 'big',
            img : Img4,
            title : '🎉 Introducing our First Motor Package 🚗',
            author : 'PRAD NUKALA',
            likes : 5,
            des : 'Sonr’s Flutter SDK package is live at motor.build'
        },
        {
            className : 'big',
            img : Img5,
            title : '🎉 Introducing our First Motor Package 🚗',
            author : 'PRAD NUKALA',
            likes : 5,
            des : 'Sonr’s Flutter SDK package is live at motor.build'
        },
        {
            className : 'little',
            img : Img6,
            title : 'How We Authenticate Every Twitter User',
            author : 'PRAD NUKALA',
            likes : 5,
            des : 'Sonr’s Flutter SDK package is live at motor.build'
        }
    ]

    const dataCat = [
        'New',
        'Community',
        'Archive'
    ]

    return (
        <div className="Posts wr">
            <Filter data={dataCat} />

            <div className="Posts_posts">
                {dataPost.map((item,) => (
                    <Post data={item} />
                ))}
            </div>

            <div className="Posts_more">
                <div className="Posts_more_text">more</div>
                <button className="Posts_more_btn">
                    <img src={Arrow} alt="" />
                </button>
            </div>
        </div>
    )
}

export default Posts;