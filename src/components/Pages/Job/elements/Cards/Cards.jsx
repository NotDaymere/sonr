import style from './Cards.module.scss'

//Elements
import Card from './Card/Card';

//SVG
import SVG1 from "../../../../../assets/img/Job/CardsIcon/svg1.svg"
import SVG2 from "../../../../../assets/img/Job/CardsIcon/svg2.svg"
import SVG3 from "../../../../../assets/img/Job/CardsIcon/svg3.svg"
import SVG4 from "../../../../../assets/img/Job/CardsIcon/svg4.svg"
import SVG5 from "../../../../../assets/img/Job/CardsIcon/svg5.svg"
import SVG6 from "../../../../../assets/img/Job/CardsIcon/svg6.svg"

const dataCards = [
    {
        text : 'Optimize existing user interface designs',
        icon : SVG1,
        bg : '#C1C7FF'
    },
    {
        text : 'Plan and implement new designS',
        icon : SVG2,
        bg : '#EFCBF5'
    },
    {
        text : "Cultivate a deep understanding of Sonr's problem space and our users",
        icon : SVG3,
        bg : '#C9E5FF'
    },
    {
        text : 'Create specifications, wireframes, visual mockups, and/or prototypes as needed',
        icon : SVG4,
        bg : '#C9FFF5'
    },
    {
        text : 'Work collaboratively with engineering teams to realize product design',
        icon : SVG5,
        bg : '#FFEAC1'
    },
    {
        text : 'Foster user-centered thinking across the team',
        icon : SVG6,
        bg : '#FFC1D7'
    }
]

function Cards () {
    return (
        <div className={style.Cards}>
            <div className={`${style.Cards_container} wr`}>
                <div className={style.Cards_title}>You Will</div>
                <div className={style.Cards_box}>
                    {dataCards.map((item, index) => (
                        <Card 
                            bg={item.bg} 
                            num={index+1} 
                            text={item.text}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Cards;