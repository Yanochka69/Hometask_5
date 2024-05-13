import style from '../css/Sidebar.module.css'
import { useSelector } from 'react-redux'
import BlockInSidebar from './BlockInSidebar'

function Sidebar () {
    const favMoviesArray = useSelector((state) => state.movies.favouriteMoviesArray)
    const favWatchLaterArray = useSelector((state) => state.movies.watchLaterMoviesArray)
    return (
        <div className={style.sidebar}>
            <div className={style.word}>Избранное</div>
            {favMoviesArray.map((movie, index) => (
                <BlockInSidebar key={index} ind={movie[0]} name={movie[1]}/>))}
            <div className={style.word}>Смотреть позже</div>
            {favWatchLaterArray.map((movie, index) => (
                <BlockInSidebar key={index} ind={movie[0]} name={movie[1]}/>))}
        </div>
    )
}

export default Sidebar