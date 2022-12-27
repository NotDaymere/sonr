import './Footer.scss'

//Media
import Logo from '../../assets/img/Logo/Black.svg'
import Icon_1 from '../../assets/img/Footer/discord.svg'
import Icon_2 from '../../assets/img/Footer/github.svg'
import Icon_3 from '../../assets/img/Footer/twitter.svg'
import Icon_4 from '../../assets/img/Footer/youtube.svg'

const navItems = [
    {
        title: 'About',
        link: '/about'
    },{
        title: 'Technology',
        link: '/technology'
    },{
        title: 'Documentation',
        link: '/documentation'
    },{
        title: 'Blog',
        link: '/blog'
    },{
        title: 'Jobs',
        link: '/jobs'
    },
]

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
                <div className='Footer_header'>
                    <div className='Footer_header_title'>become <span className='color'>a part</span> of the <span className='font'>sonr</span> community</div>
                    <div className='Footer_header_subtitle'>A robust, rapid-scaling platform for interconnected apps, and total digital autonomy</div>
                    <div className='Footer_header_btnBox'>
                        <div className="Footer_header_btnBox_text">get started</div>
                        <button className="Footer_header_btnBox_btn">
                            <svg width="34" height="38" viewBox="0 0 34 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <path d="M32.4935 1.85999C32.4161 1.03518 31.6848 0.429222 30.86 0.506547L17.4189 1.76665C16.5941 1.84397 15.9882 2.5753 16.0655 3.40011C16.1428 4.22492 16.8741 4.83087 17.699 4.75355L29.6466 3.63346L30.7666 15.5811C30.844 16.4059 31.5753 17.0118 32.4001 16.9345C33.2249 16.8572 33.8309 16.1259 33.7536 15.3011L32.4935 1.85999ZM3.15503 37.957L32.155 2.95703L29.845 1.04297L0.844968 36.043L3.15503 37.957Z" fill="white"/>
                                </g>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='Footer_middle'>
                    <div className='Footer_middle_logo'>
                        <img className='Footer_logo' src={Logo} alt="" />
                        <div className='Footer_middle_logo_subtitle'>The Internet rebuilt for you</div>
                    </div>
                    <div className='Footer_middle_nav'>
                        <div className='Footer_middle_nav_title'>Explore</div>
                        <div className='Footer_middle_nav_list'>
                            {navItems.map((e, i) => (
                                <a className='Footer_middle_nav_list_item' href={e.link}>{e.title}</a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className='Footer_bottom'>
                    <div className='Footer_bottom_copyright'>Copyright © Sonr Inc. 2022</div>
                    <div className="Footer_social">
                        {dataSocial.map((e, i) => (
                            <a className="Footer_social_item" href={e.link} key={i}>
                                <img className='Footer_social_icon' src={e.icon} alt="" />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer