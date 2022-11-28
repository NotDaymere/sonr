import styleG from "./Items.module.scss";

//Elements
import ControlButtons from "./ControlButtons";

//Media


function Item1() {
    return (
        <div className={`${styleG.Item} ${styleG.Item_1}`}>
            <div className={`${styleG.window} ${styleG.window_1}`}>
                <ControlButtons />
                <div className={styleG.comment}># Check out reflecting key aspects of software development and delivery</div>
                <div className={styleG.code}>
                    <div><span className={styleG.purple}>import</span> time</div>
                    <div className={styleG.l1}>
                        <span className={styleG.purple}>&#60;head&#62;</span>
                    </div>
                    <div className={styleG.l2}>
                        <span className={styleG.purple}>&#60;meta </span>
                        <span className={styleG.pink}>http-equiv=</span>
                        <span className={styleG.blue}>"Content-Type" </span>
                        <span className={styleG.pink}>content=</span>
                        <span className={styleG.blue}>"text/html; charset=utf-8" </span>
                        <span className={styleG.purple}>&#62;</span>
                    </div>
                    <div className={styleG.l3}>
                        <span className={styleG.purple}>&#60;title&#62;</span>
                        DevOps
                        <span className={styleG.purple}>&#60;/title&#62;</span>
                    </div>
                    <div className={styleG.l1}>
                        <span className={styleG.purple}>&#60;/head&#62;</span>
                    </div>
                    <div className={styleG.l1}>
                        <span className={styleG.purple}>&#60;body&#62;</span>
                    </div>
                    <div className={styleG.l2}>
                        <span className={styleG.purple}>&#60;h1&#62;</span>
                        DevOps Life Cycle
                        <span className={styleG.purple}>&#60;/h1&#62;</span>
                    </div>
                </div>
            </div>
            <div className={`${styleG.window} ${styleG.window_2}`}>
                <div className={styleG.code}>
                    <div>Try &#123;</div>
                    <div className={styleG.l2}>
                        // <span className={styleG.purple}>Scip Setup</span> and Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </div>
                </div>
                <svg className={`${styleG.svg} ${styleG.svg_1}`} width="278" height="236" viewBox="0 0 278 236" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M84 0.5L109 34H187" stroke="#40414C"/>
                    <path d="M252.454 174.488H274V202.19" stroke="#40414C"/>
                    <path d="M27.0811 127.294H6.90356V100.618" stroke="#40414C"/>
                    <path d="M162.852 103.354H193.974L217.229 70.1807" stroke="#40414C"/>
                    <path d="M64.5437 63.264L101.808 62.9677L139.072 63.264L157.961 95.3877L176.337 127.808L157.961 160.228L139.072 192.351L101.808 192.648L64.5437 192.351L45.655 160.228L27.2794 127.808L45.655 95.3877L64.5437 63.264Z" fill="#131313" stroke="#40414C"/>
                    <path d="M186.077 135.17L208.66 134.991L231.242 135.17L242.689 154.638L253.825 174.284L242.689 193.931L231.242 213.399L208.66 213.578L186.077 213.399L174.63 193.931L163.495 174.284L174.63 154.638L186.077 135.17Z" fill="#131313" stroke="#40414C"/>
                    <circle cx="274" cy="206" r="3.5" stroke="#40414C"/>
                    <circle cx="7" cy="97" r="3.5" stroke="#40414C"/>
                    <path d="M199 168.825L194 173.825L199 178.825" stroke="#7265FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M219 168.825L224 173.825L219 178.825" stroke="#7265FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M211.5 168L206.5 179.65" stroke="#7265FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M91.1255 135.375V124" stroke="#E2B7F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M91.5317 146.75C94.4485 146.75 96.813 144.386 96.813 141.469C96.813 138.552 94.4485 136.188 91.5317 136.188C88.615 136.188 86.2505 138.552 86.2505 141.469C86.2505 144.386 88.615 146.75 91.5317 146.75Z" stroke="#E2B7F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M91.1255 124C93.8179 124 96.0005 121.817 96.0005 119.125C96.0005 116.433 93.8179 114.25 91.1255 114.25C88.4331 114.25 86.2505 116.433 86.2505 119.125C86.2505 121.817 88.4331 124 91.1255 124Z" stroke="#E2B7F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M113.875 124C116.567 124 118.75 121.817 118.75 119.125C118.75 116.433 116.567 114.25 113.875 114.25C111.182 114.25 109 116.433 109 119.125C109 121.817 111.182 124 113.875 124Z" stroke="#E2B7F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M91.3359 135.375C92.0672 132.531 94.6672 130.418 97.7384 130.435L103.312 130.451C107.57 130.467 111.193 127.737 112.526 123.935" stroke="#E2B7F6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
        </div>
    )
}

export default Item1;