import style from './ApplyHere.module.scss'

//Elements


function ApplyHere () {
    return (
        <div className={style.ApplyHere}>
            <div className={`${style.ApplyHere_container} wr`}>
                <div className={style.ApplyHere_title}>APPLY HERE</div>
                <div className={style.ApplyHere_box}>
                    <div className={style.ApplyHere_item}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplyHere;