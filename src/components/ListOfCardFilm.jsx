import style from '../css/ListOfCardFilm.module.css'
import CardFilm from "./CardFilm.jsx";

function ListOfCardFilm ({arrayMovies}) {
    return (
        <div>
            {arrayMovies.length === 0 ? <div className={style.notFound}>По вашему запросу ничего не найдено.</div> : 
            arrayMovies.map(item => (
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
                    />
            ))}
        </div>
    )
}

export default ListOfCardFilm