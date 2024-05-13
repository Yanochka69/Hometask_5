import style from '../css/SameMovie.module.css'
import { Link } from 'react-router-dom'

function sameMovie(props) {
    return (
        <div className={style.card}>
            <img className={style.img} src={props.img} alt="Постер" />
            <Link className={style.link} to={`/movies/${props.id}`}>{props.name}</Link>
        </div>
    )
}

export default sameMovie