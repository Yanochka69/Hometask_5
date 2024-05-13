import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

import LayoutBase from './components/LayoutBase.jsx'
import MainPage from './components/MainPage.jsx'
import MoviePage from './components/MoviePage.jsx'
import ListOfMoviesPage from './components/ListOfMoviesPage.jsx'
import SearchPage from './components/SearchPage.jsx'
import NotFoundPage from './components/NotFoundPage.jsx'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<MainPage />}></Route>
      <Route path='/movies' element={<LayoutBase />}>
        <Route index element={<ListOfMoviesPage />} />
        <Route path='/movies/:movieId' element={<MoviePage />} />
      </Route>

      <Route path='/search' element={<LayoutBase />}>
        <Route index element={<SearchPage />}/>
      </Route>

      <Route path='*' element={<NotFoundPage />}></Route>
    </Routes>
    </>

  )
}

export default App
