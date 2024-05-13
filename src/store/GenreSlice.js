import { createSlice } from "@reduxjs/toolkit";

const genreSlice = createSlice({
    name: 'genres',
    initialState: {
        genresArray: [ {name: 'биография', checked: false},
            {name: 'боевик', checked: false},
            {name: 'детектив', checked: false},
            {name: 'драма', checked: false},
            {name: 'комедийная драма', checked: false},
            {name: 'комедия', checked: false},
            {name: 'криминал', checked: false},
            {name: 'мелодрама', checked: false},
            {name: 'научная фантастика', checked: false},
            {name: 'преступление', checked: false},
            {name: 'приключения', checked: false},
            {name: 'роуд-муви', checked: false},
            {name: 'семейный', checked: false},
            {name: 'триллер', checked: false},
            {name: 'фантастика', checked: false}
        ]
    },
    reducers: {
        changeChecked: (state, action) => {
            const name = action.payload
            state.genresArray = state.genresArray.map(genre =>
                (genre.name === name? { ...genre, checked: !genre.checked }: genre))
            }
    }
})

export const { changeChecked } = genreSlice.actions

export default genreSlice.reducer