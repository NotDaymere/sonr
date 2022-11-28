import styleG from "./Items.module.scss";

//Elements
import ControlButtons from "./ControlButtons";

//Media


const dataBloks = [
    'purple',
    'purple',
    'pink',
    'purple',
    'pink',
    'pink',
]

function Item2() {
    return (
        <div className={`${styleG.Item} ${styleG.Item_2}`}>
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
            <div className={`${styleG.window} ${styleG.window_2} ${styleG.window_2_2}`}>
                <div className={styleG.file}><span>8</span>Files processed</div>
                <div className={styleG.blocks}>
                    {dataBloks.map(i => (
                        <div className={`${styleG.block} ${styleG['block_' + i]}`} />
                    ))}
                    
                </div>
                <svg className={styleG.bg} width="98" height="134" viewBox="0 0 98 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M97 0L81.4034 9.72353M81.4034 106.785L126.311 133L129 81.396L125.398 83.3176M81.4034 106.785L41.2017 83.3176M81.4034 106.785V59.85M81.4034 106.785L125.398 83.3176M81.4034 59.85L41.2017 83.3176M81.4034 59.85L39.1849 36.0441M81.4034 59.85L125.398 83.3176M81.4034 59.85V9.72353M81.4034 59.85L123.891 34.048L81.4034 9.72353M41.2017 83.3176L1 59.85L39.1849 36.0441M41.2017 83.3176L39.1849 36.0441M39.1849 36.0441L81.4034 9.72353" stroke="white" stroke-opacity="0.25"/>
                    <circle cx="39.5" cy="36.5" r="2.5" fill="#606060"/>
                    <circle cx="41.5" cy="82.5" r="2.5" fill="#606060"/>
                    <circle cx="81.5" cy="9.5" r="2.5" fill="#606060"/>
                    <circle cx="81.5" cy="106.5" r="2.5" fill="#606060"/>
                </svg>
                <svg className={`${styleG.svg} ${styleG.svg_2}`} width="281" height="204" viewBox="0 0 281 204" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M141.544 37.2645L178.808 36.9682L216.072 37.2645L234.961 69.3882L253.337 101.808L234.961 134.228L216.072 166.352L178.808 166.648L141.544 166.352L122.655 134.228L104.279 101.808L122.655 69.3882L141.544 37.2645Z" fill="#131313" stroke="#40414C"/>
                    <path d="M197.5 92.5688L207 102.069L197.5 111.569" stroke="#7265FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M159.5 92.5688L150 102.069L159.5 111.569" stroke="#7265FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M173.75 91.0005L183.25 113.136" stroke="#7265FF" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M253 102.294H273.177V75.6182" stroke="#40414C"/>
                    <circle r="3.5" transform="matrix(-1 0 0 1 273.081 72)" stroke="#40414C"/>
                    <path d="M1 75L26 102H104" stroke="#40414C"/>
                </svg>
            </div>
        </div>
    )
}

export default Item2;