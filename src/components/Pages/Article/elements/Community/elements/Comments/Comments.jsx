import style from './Comments.module.scss'

//IMG
import Img from '../../../../../../../assets/img/Article/img/comments_1.png';

function Comments (props) {
    return (
        <div className={`${style.Comments} wr wr-community`} >
            <div className={style.Comments_title} >Comments (0)</div>
            <div className={style.Comments_comment} >
                <img className={style.Comments_img} src={Img} alt="" />
                <div className={style.Comments_input_container}>
                    <input className={style.Comments_input} type="text" placeholder='Write your comment here...' />
                </div>
                
            </div>
        </div>
    )
}

export default Comments;