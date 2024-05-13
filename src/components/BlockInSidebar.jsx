import style from '../css/BlockInSidebar.module.css'
import { Link } from 'react-router-dom'

function BlockInSidebar (props) {
    return(
        <div className={style.block}>
            <Link to={`/movies/${props.ind}`} className={style.link}>{props.name}</Link> <br />
        </div>
    )
}

export default BlockInSidebar