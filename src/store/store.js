import { configureStore } from "@reduxjs/toolkit";
import cardsMoviesSlice from "./CardsMoviesSlice";
import genreSlice from "./GenreSlice.js";

export const store = configureStore ({
    reducer:{
        movies: cardsMoviesSlice,
        genres: genreSlice,
    }
})