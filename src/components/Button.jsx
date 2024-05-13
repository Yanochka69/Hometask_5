import style from '../css/Button.module.css'

function Button (props) {
    return(
        <button className={`${props.back === 'button' ? style.button : style.button2} ${props.rotate ? style.rotate : ''}`} onClick={props.onClick}><img className={style.img} src={props.img} alt="Кнопочка" /></button>
    )
}

export default Button

