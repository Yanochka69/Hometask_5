import style from '../css/MoviePage.module.css';
import star from '../images/star.svg';
import send from '../images/send.svg';

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { addComment } from '../store/CardsMoviesSlice.js';

import SameMovie from './SameMovie.jsx';
import Button from './Button.jsx'
import Comment from './Comment.jsx';

function MoviePage () {
    const {movieId} = useParams()
    const dispatch = useDispatch()
    const arrayMovies = useSelector(state => state.movies.moviesArray)
    const movie = arrayMovies[movieId]

    // Похожие фильмы
    const [similarMovies, setSimilarMovies] = useState([])
    useEffect(() => {
        let correct = []
        for (let i = 0; i < arrayMovies.length; i++) {
            let count = 0
            for (let j = 0; j < arrayMovies[i].genre.length; j++) {
                if (movie.id !== arrayMovies[i].id && movie.genre.includes(arrayMovies[i].genre[j])) {
                    count += 1
                }
            }
            if (count >= 2) {
                correct.push({id: arrayMovies[i].id, name: arrayMovies[i].name, img: arrayMovies[i].img})
            }
        }
        setSimilarMovies(correct)
    }, [movie])

    // Коментарий
    const [text, setText] = useState()
    const handleAddComment = ([movieId, com]) => {
        dispatch(addComment([movieId, com]))
        setText('')
    }

    return(
        <div className={style.film}>
            <img className={style.poster} src={movie.img} alt="Постер" />
            <div className={style.info}>
                <h1 className={style.name}>{movie.name} {movie.rating} <img className={style.star} src={star} alt="Звездочка рейтинга" /></h1> 
                <table className={style.table}>
                    <tbody>
                        <tr>
                            <td>Год:</td>
                            <td>{movie.year}</td>
                        </tr>
                        <tr>
                            <td>Страна:</td>
                            <td>{movie.country.join(', ')}</td>
                        </tr>
                        <tr>
                            <td>Слоган:</td>
                            <td>{movie.slogan}</td>
                        </tr>
                        <tr>
                            <td>Жанр:</td>
                            <td>{movie.genre.join(', ')}</td>
                        </tr>
                        <tr>
                            <td>Режиссёр:</td>
                            <td>{movie.producer}</td>
                        </tr>
                        <tr>
                            <td>В главных ролях:</td>
                            <td>{movie.actors.join(', ')}</td>
                        </tr>
                        <tr>
                            <td>Время:</td>
                            <td>{movie.time}</td>
                        </tr>
                    </tbody>
                </table>
                <p className={style.p}>{movie.description}</p>
                
                <p className={style.sameAndComment}>Похожее по жанрам:</p>
                <div className={style.blockWithSameMovies}>
                    {similarMovies.length === 0 ? <div>Похожих по жанрам фильмов не найдено</div> : 
                        similarMovies.map((film, index) => (<SameMovie key={index} id={film.id} img={film.img} name={film.name}/>))}
                </div>
                
                <p className={style.sameAndComment}>Оставьте свой комментарий:</p>
                <div className={style.comment}>
                    <textarea placeholder='Фильм просто супер!!!' value={text} onChange={(e) => setText(e.target.value)}></textarea>
                    <Button back='button' img={send} onClick={() => handleAddComment([movieId, text])}></Button>
                </div>
                {movie.comments.length === 0 ? <div>Ваш комментарий будет первым</div> : movie && movie.comments.map((com, index) => (<Comment key={index} text={com}/>))}
            </div>
        </div>
    )
}

export default MoviePage