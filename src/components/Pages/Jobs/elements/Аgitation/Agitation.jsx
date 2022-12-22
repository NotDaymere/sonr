import style from './Аgitation.module.scss'

//Elements

//Source
import Arrow from '../../../../../assets/img/Jobs/arrowUp.svg'
import Bg from '../../../../../assets/img/Jobs/agitationBg.svg'

function Agitation () {

    return (
        <div className={style.Agitation}>
            <div className={`${style.Agitation_container} wr`}>
                <div className={style.Agitation_title}><span>Software</span> has lost its magic. We want <span>your help</span> to bring it back.</div>
                <div className={style.Agitation_des_box}>
                    <div className={style.Agitation_des}>
                        <div>Remember when software still felt magical? Good software used to be an experience. It used to radically change how we lived and worked. It made us feel like we lived in the future.Today, software is everywhere. But truly great software has become incredibly rare. Computers are faster, but apps work slower. Craftsmanship has been replaced with growth hacks. Visionary product ideas turned into incremental changes.The magic of software got lost along the way. At Linear, we are on a quest to bring it back.</div>
                        <div>We are building the tools for the next generation of high-impact companies. The place where ambitious creators come to bring radical ideas to life. Our mission is to empower the world's best product and engineering teams to do their best work. To build products that feel magical again.</div>
                    </div>
                </div>
                <div className={style.Agitation_text}>
                    <span>But we can't do it alone.</span>We are looking for talented people who share our passion for crafting exceptional software products. That person might be you.Join us and let's bring back the magic of software.
                </div>
                <div className={style.Agitation_btn_box}>
                    <div className={style.Agitation_btn_title}>See  positions</div>
                    <button className={style.Agitation_btn}><img src={Arrow} alt="" /></button>
                </div>
                <img className={style.Agitation_bg} src={Bg} alt="" />
            </div>
        </div>
    )
}

export default Agitation;