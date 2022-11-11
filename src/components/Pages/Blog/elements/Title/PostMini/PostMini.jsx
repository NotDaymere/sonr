import './PostMini.scss'

import Like from '../../../../../../assets/img/Blog/Like';
import Comment from '../../../../../../assets/img/Blog/Comment';

function PostMini (props) {
    return (
        <div className="PostMini">
            <div className="PostMini_title">{props.data.title}</div>
            <div className="PostMini_data">
                <div className="PostMini_data_item">{props.data.author}</div>
                <div className="PostMini_data_item">
                    <Like color='#F6F6F6' />
                    {props.data.likes}
                </div>
                <div className="PostMini_data_item">
                    <Comment color='#F6F6F6' />
                </div>
            </div>
        </div>
    )
}

export default PostMini;