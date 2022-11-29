import "./Production.scss";

import { useRef } from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Media
import Arrow from '../../../../../assets/img/Production/arrowDown.svg'
import Point from '../../../../../assets/img/Production/pointWhite.png'

//ProductionItemWindows
import Item1 from "./ProductionItemWindows/Item1";
import Item2 from "./ProductionItemWindows/Item2";
import Item3 from "./ProductionItemWindows/Item3";

//Animate
import { gsap } from "gsap";

const settings = {
    arrows: false,
    settings:  'unslick',
    responsive: [
        {
            breakpoint: 19200,
            settings:  'unslick'
        },
        {
            breakpoint: 768,
            settings: {
                dots: true,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
    ]
};

const dataProduction = [
    {
        title: 'Built in IPFS/FileCoin',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        window: <Item1 />
    },{
        title: 'Handshake Resolver',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        window: <Item2 />
    },{
        title: 'Embedded Lite Node',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        window: <Item3 />
    },
]

function Production() {

    const refWindows = useRef([])

    const animateWindow = (e, reverse) => {
        let tl = gsap.timeline();
        if(reverse) {
            tl.fromTo(e,
                { right: 50, opacity: 0 },
                { right: 0, opacity: 1, duration : 1, ease:"expo.inOut" }
            ).reverse(0)
        } else {
            tl.fromTo(e,
                { right: 50, opacity: 0 },
                { right: 0, opacity: 1, duration : 1, ease:"expo.inOut" }
            )
        }
        
    }

    const prodItemEnter = (e) => {
        const index = e.currentTarget.attributes.index.value;
        animateWindow(refWindows.current[index])
    }

    const prodItemLeave = (e) => {
        console.log(1)
        const index = e.currentTarget.attributes.index.value;
        animateWindow(refWindows.current[index], true)
    }

    return (
        <div className="Production">
            <div className="Production_bg"/>
            <div className="wr">
                <div className="Production_title"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                >
                    <span className="color offBit">&#123;</span> Get to <span className="color offBit">&#125;</span> <span className="offBit">Production</span> <span className="offBit">&#8727;</span> <span className="color last">Yesterday</span>
                </div>
                <div className="Production_des">
                    <div className="Production_des_text">Sonr’s client SDKs are designed to work with your existing workflows not against them. Build Flutter, React and Unity Apps without worrying about App Store compliance or a high learning curve.</div>
                    <div className="Production_des_btn_container">
                        <div className="Production_des_btn_box">
                            <div className="Production_des_btn_text">view details</div>
                            <button className="Production_des_btn">
                                <img src={Arrow} alt="" />
                            </button>
                        </div>
                    </div>
                    <img className="Production_des_point" src={Point} alt="" />
                </div>
                <div className="Production_items">
                    {dataProduction.map((e, i) => (
                        <div className="Production_item" index={i} onMouseEnter={prodItemEnter} onMouseLeave={prodItemLeave}>
                            <div className="Production_item_num"><span>/</span>0{i+1}</div>
                            <div className="Production_item_text">
                                <div className="Production_item_title"><span>&#60;</span> {e.title} <span>&#62;</span></div>
                                <div className="Production_item_subtitle">{e.subtitle}</div>
                            </div>
                            <div className="Production_item_window" ref={el => refWindows.current[i] = el}>{e.window}</div>
                            
                        </div>
                    ))}
                </div>
                <div className="Production_items_mob">
                        <Slider {...settings}>
                            {dataProduction.map((e, i) => (
                                <div className="Production_item_mob">
                                    {e.window}
                                    <div className="Production_item_num"><span>/</span>0{i+1}</div>
                                    <div className="Production_item_title"><span>&#60;</span> {e.title} <span>&#62;</span></div>
                                    <div className="Production_item_subtitle">{e.subtitle}</div>
                                </div>
                            ))}
                        </Slider>
                    </div>
            </div>
        </div>
    )
}

export default Production;