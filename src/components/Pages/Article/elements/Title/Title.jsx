import style from './Title.module.scss'

//Elements
import Info from './elements/Info/Info';
import Social from '../Social/Social';

//img
import Img from '../../../../../assets/img/Article/img/title.jpg';

//SVG
import Like from '../../../../../assets/img/Article/icon/Like';
import Comment from '../../../../../assets/img/Article/icon/Comment';
import Massage from '../../../../../assets/img/Article/icon/Massage';

function Title () {

    const dataInfo = [
        {
            title : 'Date',
            content : 'Oct 5'
        },
        {
            title : 'Author',
            content : 'Michael'
        }
    ]

    const dataSocial = [
        {
            text : '5',
            icon : <Like />
        },
        {
            icon : <Comment />
        },
        {
            icon : <Massage />
        }
    ]

    return (
        <div className= {style.Title}>
            <div className={`${style.Title_title_container} wr`}>
                <div className= {style.Title_title} >Introducing our First Motor Package</div>
                <div className={style.Title_des}>
                    <div className={style.Title_des_info}>
                        {dataInfo.map((item) => (
                            <Info data={item} />
                        ))}
                    </div>
                    <div className={style.Title_des_social}>
                        {dataSocial.map((item) => (
                            <Social data={item} />
                        ))}
                    </div>
                </div>
            </div>

            <img className={style.Title_img} src={Img} alt="" />

        </div>
    )
}

export default Title;