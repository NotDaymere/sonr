import "./Production.scss";

//Media
import Arrow from '../../../../../assets/img/Production/arrowDown.svg'
import Point from '../../../../../assets/img/Production/pointWhite.png'

function Production() {
    return (
        <div className="Production">
            <div className="wr">
                <div className="Production_title"><span className="color offBit">&#123;</span> Get to <span className="color offBit">&#125;</span> <span className="offBit">Production</span> <span className="offBit">&#8727;</span> <span className="color last">Yesterday</span></div>
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
                    <div className="Production_item">safssafssafssafssafssafssafs</div>
                </div>
            </div>
        </div>
    )
}

export default Production;