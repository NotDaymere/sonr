import './Post.scss'

import Like from '../../assets/img/Blog/Like';
import Comment from '../../assets/img/Blog/Comment';

function Post (props) {
    return (
        <div className={`Post ${props.data.className}`}>
            
            <img className='Post_img' src={props.data.img} alt="" />

            <div className={`PostMini_data Post_data ${props.data.className}`}>
                <div className="PostMini_data_item Post_data_item">{props.data.author}</div>
                <div className="PostMini_data_item Post_data_item">
                    <Like color='#292D32' />
                    {props.data.likes}
                </div>
                <div className="PostMini_data_item Post_data_item">
                    <Comment color='#292D32' />
                </div>
            </div>

            <div className={`Post_title ${props.data.className}`}>{props.data.title}</div>

            <div className={`Post_des ${props.data.className}`}>{props.data.des}</div>

        </div>
    )
}

export default Post;