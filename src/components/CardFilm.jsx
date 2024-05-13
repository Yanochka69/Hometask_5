import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { addOrRemoveFavourite, addOrRemoveWatchLater } from '../store/CardsMoviesSlice.js';
import { useDispatch } from "react-redux";
// import { useState } from 'react'
// import { useEffect } from 'react'

import style from '../css/CardFilm.module.css'

import star from '../images/star.svg'
import heart from '../images/heart.svg'
import bookmark from '../images/bookmark.svg'

import Button from './Button.jsx'

function CardFilm (props) {
    const dispatch = useDispatch()

    const handleFavButton = ([index, name]) => {
        dispatch(addOrRemoveFavourite([index, name]));
      }

    const handleWatchLaterButton = ([index, name]) => {
        dispatch(addOrRemoveWatchLater([index, name]));
      } 

    return (
    <div className={style.card}>
        <img className={style.poster} src={props.img} alt="Постер к фильму" />
        <div className={style.info}>
            <NavLink to={`/movies/${props.id}`} className={style.link}><div className={style.title}>{props.name}</div></NavLink>
            <h3>О фильме</h3>
            <table>
                <tbody>
                    <tr>
                        <td>Год:</td>
                        <td>{props.year}</td>
                    </tr>
                    <tr>
                        <td>Жанр:</td>
                        <td>{props.genre.join(', ')}</td>
                    </tr>
                    <tr>
                        <td>Режиссёр:</td>
                        <td>{props.producer}</td>
                    </tr>
                    <tr>
                        <td>В главных ролях:</td>
                        <td>{props.actors.join(', ')}</td>
                    </tr>
                </tbody>
            </table>
            <p className={style.description}>{props.description}</p>
            <div className={style.instrumet}>
                <Button img={heart} back={props.isFavourite ? 'button2' : 'button'} onClick={() => handleFavButton([props.id, props.name])} />
                <Button img={bookmark} back={props.isWatchLater ? 'button2' : 'button'} onClick={() => handleWatchLaterButton([props.id, props.name])}/>
                <p className={style.rating}>{props.rating}</p>
                <img className={style.star} src={star} alt="Звездочка рейтинга" />
            </div>
        </div>
    </div>
    )
}

export default CardFilm

