import style from '../css/MainPage.module.css'
import { Link } from 'react-router-dom'

function MainPage () {
    return (
        <div className={style.block}>
            <Link to='/movies' className={style.link}>Фильмы</Link>
            <Link to='/search' className={style.link}>Поиск</Link>
        </div>
    )
}

export default MainPage