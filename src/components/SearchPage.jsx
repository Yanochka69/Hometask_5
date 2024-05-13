import style from '../css/SearchPage.module.css'
import search from '../images/search.svg'
import ChoosingAGenre from './ChoosingAGenre.jsx'
import Button from './Button.jsx'
import { useState } from 'react'
import { changeChecked } from "../store/GenreSlice.js";

import { useDispatch, useSelector } from "react-redux";
import CardFilm from './CardFilm'

function SearchPage () {
    const [text, setText] = useState('')
    const [correct, setCorrect] = useState([])

    const dispatch = useDispatch()
    const genresArray = useSelector(state => state.genres.genresArray)
    const moviesArray = useSelector(state => state.movies.moviesArray)
    const handleChangeChecked = (genreName) => {
        dispatch(changeChecked(genreName))
        filterMovies()
    }

    // Поиск
    const handleSearch = (txt) => {
        const searchArray = []
        for (let i = 0; i < moviesArray.length; i++) {
            if (moviesArray[i].name.toLowerCase().trim().includes(txt.toLowerCase().trim())) {
                searchArray.push(moviesArray[i])
            }
        }
        setCorrect(searchArray)
        setText('')
    }
    
    // Чекбоксы
    const filterMovies = () => {
        const checkedCategory = []
        for (let i = 0; i < genresArray.length; i++) {
            if (genresArray[i].checked) {
                checkedCategory.push(genresArray[i].name)
            }
        }
        const filteredArray = []
        moviesArray.forEach(movie => {
            let resultChecked = checkedCategory.every((category) => movie.genre.includes(category))
            if (resultChecked) filteredArray.push(movie)
           })
        setCorrect(filteredArray)
    }

    return (
        <div className={style.content}>
            <div>
                <div className={style.magnifier}>
                    <input type="text" placeholder='Интерстеллар' value={text} onChange={(e) => setText(e.target.value)} />
                    <Button img={search} back='button' onClick={() => {handleSearch(text)}}/>
                </div>
                <ChoosingAGenre genresArray={genresArray} handleChecked={handleChangeChecked}/>
            </div>
            <div>
                {correct.length === 0 ? <div className={style.notFound}>Вы не ввели запрос или <br />по вашему запросу ничего не найдено.</div> : 
                    correct.map(item => 
                    <CardFilm key={item.id}
                        id={item.id}
                        img={item.img} 
                        name={item.name}
                        year={item.year}
                        genre={item.genre}
                        producer={item.producer}
                        actors={item.actors}
                        description={item.description}
                        rating={item.rating}
                        isFavourite={item.isFavourite}
                        isWatchLater={item.isWatchLater}
                        />)}
            </div>
        </div>
    )

}

export default SearchPage