import { useDispatch } from "react-redux"; 
import ListOfCardFilm from "./ListOfCardFilm.jsx";
import Button from "./Button.jsx";
import ChoosingAGenre from "./ChoosingAGenre.jsx";
import {sortHighToLow, sortLowToHigh} from '../store/CardsMoviesSlice.js'
import { changeChecked } from "../store/GenreSlice.js";

import { useSelector } from "react-redux";

function ListOfMoviesPage() {
    const moviesArray = useSelector(state => state.movies.moviesArray)
    const genresArray = useSelector(state => state.genres.genresArray)

    const dispatch = useDispatch()

    const handleSortHighToLow = () => 
        dispatch(sortHighToLow())
    
    const handleSortLowToHigh = () =>
        dispatch(sortLowToHigh())

    const handleChangeChecked = (genreName) => {
        dispatch(changeChecked(genreName));
      }

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
        return filteredArray
    }

    return (
        <>
            <div>        
                <Button back='button' rotate='rotate' img='/src/images/filter.svg' onClick={handleSortHighToLow}/>
                <Button back='button' img='/src/images/filter.svg' onClick={handleSortLowToHigh}/>
                <ChoosingAGenre genresArray={genresArray} handleChecked={handleChangeChecked}/>
            </div>
            <ListOfCardFilm arrayMovies={filterMovies()}/>
        </>
    )
}

export default ListOfMoviesPage
