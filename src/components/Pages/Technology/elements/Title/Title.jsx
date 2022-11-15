import style from './Title.module.scss'

import Sonr from '../../../../../assets/img/About/earth.gif'

//Elements
import Cards from './elements/Cards/Cards';

function Title () {
    return (
        <div className={style.Title}>
            <div className={`${style.Title_container} wr`}>
                <div className={style.Title_header}>
                    <div className={style.Title_subtitle}>Build on the first user-owned interoperable blockchain network</div>
                    <div className={style.Title_title}>
                        <div>The <span>revolution</span></div>
                        <div>will not be</div>
                        <div>centralized</div>
                    </div>
                    <div className={style.Title_des}>
                        Sonr leverages Cosmos’ Inter-Blockchain Communication protocol (IBC) and a decentralized identity mechanism to enable secure multichain peer-to-peer communication.
                    </div>
                </div>
                <Cards />
                <img className={style.Title_sonr} src={Sonr} alt="" />
            </div>
        </div>
    )
}

export default Title;