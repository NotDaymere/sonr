import style from './TimeLine.module.scss'

//Elements
import TimeLineItem from './elements/TimeLineItem/TimeLineItem';

//IMG
import TimeLineImg1 from '../../../../../assets/img/About/timeLine/1.png';
import TimeLineImg2 from '../../../../../assets/img/About/timeLine/2.png';
import TimeLineImg3 from '../../../../../assets/img/About/timeLine/3.png';
import TimeLineImg4 from '../../../../../assets/img/About/timeLine/4.png';

const dataTimeLineItems = [
    {
        img : TimeLineImg1,
        imgRight : '420px',
        year : 2020,
        month : 'nov',
        title : 'Lightbulb',
        des : 'In order to send a video game clip to his friends, Prad Nukala realizes he has to manually plug a USB into his PC, copy it to his mac, then airdrop it to his phone. He thinks this is dumb. This inspires the universal data transmission protocol that would evolve into Sonr’s user-owned internet.'
    },
    {
        img : TimeLineImg2,
        imgRight : '420px',
        year : 2021,
        month : 'nov',
        title : '$5M Seed Round',
        des : 'With a functional MVP and the 5th most Github commits in the world, Prad raises a Seed Round from several investors including Shima Capital, Torch, Synergis, Tess Ventures, Backend Capital, Builder Capital, Portico Ventures.'
    },
    {
        img : TimeLineImg3,
        imgRight : '490px',
        year : 2021,
        month : 'dec',
        title : 'We’re Gonna Need a Bigger Boat',
        des : "As the vision for Sonr starts to crystalize, the scope of possibility starts to erupt. It’s clear a team is needed. Prad pitches Sonr to Michael Amoako, an MIT grad working on Microsoft's Responsible AI program. Michael agrees to join Sonr on the spot."
    },
    {
        img : TimeLineImg4,
        imgRight : '205px',
        year : 2022,
        month : 'jan',
        title : 'An NFT in Space for Some Reason',
        des : 'At Miami Hack Week, Sonr pairs up with an ambitious team of devs looking to launch an NFT in space. Shortly after winning the hackathon, the team assume critical roles at Sonr. Nick Tindle and Ben Linville become the Head of Engineering and Buisiness operations lead, respectively.'
    }
]

function TimeLine () {
    return (
        <div className={style.TimeLine}>
            <div className={style.TimeLine_bg} />
            <div className={`${style.TimeLine_container} wr`}>
                <div className={style.TimeLine_title}><span>How</span> on earth did <span>we get here</span>?</div>
                <div className={style.TimeLine_items}>
                    {dataTimeLineItems.map (item => (
                        <TimeLineItem 
                            img={item.img} 
                            imgRight={item.imgRight} 
                            year={item.year} 
                            month={item.month} 
                            title={item.title} 
                            des={item.des}  
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TimeLine;