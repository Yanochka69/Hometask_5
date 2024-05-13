import style from '../css/ChoosingAGenre.module.css'

function ChoosingAGenre ({genresArray, handleChecked}) {
    return (
        <div className={style.choise}>
            <p className={style.word}>Ищете что-то конкретное?</p>
            {genresArray.map((genre, index) => 
            <label key={index}>
                <input type="checkbox" checked={genre.checked} onChange={() => handleChecked(genre.name)}/> {genre.name} <br />
            </label>
            )}
        </div>
    )
}
export default ChoosingAGenre