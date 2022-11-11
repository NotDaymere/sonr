import './Title.scss'

import Arrow from "../../../../../assets/img/Blog/arrow.svg";

import Post from './PostMini/PostMini';

function Title () {

    const dataPost = [
        {
            title : 'Community Update | May 2022',
            author : 'PRAD NUKALA',
            likes : 5
        },
        {
            title : '🎉 Introducing our First Motor Package 🚗',
            author : 'PRAD NUKALA',
            likes : 5
        },
        {
            title : 'How We Authenticate Every Twitter User',
            author : 'PRAD NUKALA',
            likes : 5
        }
    ]

    return (
        <div className="Title">
            <div className="title_content wr">
                <div className="title_content_left">
                    <div className="title_content_left_sonr">
                        <div className="title_content_left_sonr_item">SONR</div>
                        <div className="title_content_left_sonr_item">SONR</div>
                        <div className="title_content_left_sonr_item">SONR</div>
                    </div>
                    <div className="title_content_left_title">blog</div>
                    <div className="title_content_left_search_form">
                        <div className="title_content_left_search_form_input_border" />
                        <input className='title_content_left_search_form_input' type="text" name="" id="" placeholder='Search articles..' />
                        <button className='title_content_left_search_form_btn'>
                            <img src={Arrow} alt="" />
                        </button>
                    </div>
                </div>
                <div className="title_content_right">
                    <div className="title_content_right_title">most popular</div>
                    <div className="title_content_right_posts">
                        {dataPost.map((item) => (
                            <Post data ={item} />
                        ))}
                    </div>
                </div>
            </div>
            <svg className="Title-back" width="2880"  viewBox="0 0 1440 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M 0 0 L 1440 0 C 967.573 150 456.281 150 0 2 Z" fill="#131313"/>
            </svg>
        </div>
    )
}

export default Title;