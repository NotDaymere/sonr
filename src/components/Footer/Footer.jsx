import './Footer.scss'

//Media
import Logo from '../../assets/img/Logo/Black.svg'
import Icon_1 from '../../assets/img/Footer/discord.svg'
import Icon_2 from '../../assets/img/Footer/github.svg'
import Icon_3 from '../../assets/img/Footer/twitter.svg'
import Icon_4 from '../../assets/img/Footer/youtube.svg'

const dataSocial = [
    {
        title: 'Discord',
        icon: Icon_1,
        link: 'https://snr.la/dev-chat&quot'
    },{
        title: 'GitHub',
        icon: Icon_2,
        link: 'https://snr.la/gh-sonr&quot'
    },{
        title: 'Twitter',
        icon: Icon_3,
        link: 'https://snr.la/tw&quot'
    },{
        title: 'YouTube',
        icon: Icon_4,
        link: 'https://snr.la/yt&quot'
    }
]

function Footer () {
    return (
        <div className='Footer'>
            <div className="Footer_inner wr">
                <img className='Footer_logo' src={Logo} alt="" />
                <div className="Footer_social">
                    {dataSocial.map((e, i) => (
                        <a className="Footer_social_item" href={e.link} key={i}>
                            <img className='Footer_social_icon' src={e.icon} alt="" />
                            <div className="Footer_social_title">{e.title}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer