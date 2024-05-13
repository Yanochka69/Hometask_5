import style from '../css/Comment.module.css'
import anon from '../images/anonymous-messenger.svg'

function Comment(props) {
    return(
        <div className={style.comment}>
            <div className={style.img}>
                <img src={anon} alt="Аноним" />
            </div>
            <div className={style.text}>
                <h3>Анонимный пользователь</h3>
                <p> {props.text} </p>
            </div>
        </div>
    )
}
export default Comment