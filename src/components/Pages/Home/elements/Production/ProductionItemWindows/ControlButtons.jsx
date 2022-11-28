import style from "./Items.module.scss";

const dataButtons = [
    '#EFCBF5',
    '#C1C7FF',
    '#C9E5FF'
]

function ControlButtons() {
    return (
        <div className={style.ControlButtons}>
            {dataButtons.map(item => (
                <div className={style.ControlButtons_item} style={{backgroundColor: item}} />
            ))}
        </div>
    )
}

export default ControlButtons;