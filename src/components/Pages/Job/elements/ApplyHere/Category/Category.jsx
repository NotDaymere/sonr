import style from './Category.module.scss'

//SVG
import Arrow from '../../../../../../assets/img/Jobs/arrow.svg'

function Category (props) {
    return (
        <div className={style.Category}>
            <div className={style.Category_title}>
                <div className={style.Category_title_icon}>
                    <img className={style.Category_title_icon_item} src={Arrow} alt="" />
                    <img className={style.Category_title_icon_item} src={Arrow} alt="" />
                    <img className={style.Category_title_icon_item} src={Arrow} alt="" />
                </div>
                <span>{props.title}</span>
            </div>
            <div className={style.Category_content}>{props.children}</div>
        </div>
    )
}

export default Category;