import style from '../css/NotFoundPage.module.css'
import mem from '../images/мем.jpg'
import { Link } from 'react-router-dom'

function NotFoundPage () {
    return(
        <div className={style.notFound}>
            Вы решили посетить несуществующую страницу, поздравляю, вам картинка: <br />
            <img src={mem} alt="мем" /> <br />
            Вернитесь обратно: <br />
            <Link to='/movies' className={style.link}>Фильмы</Link>
            <Link to='/search' className={style.link}>Поиск</Link> 
        </div>
    )
}

export default NotFoundPage