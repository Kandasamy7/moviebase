import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { MovieDetails, MovieList, PageNotFound, Search } from '../pages'

const AllROute = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MovieList title="You'r guide to great Movies" apiPath="movie/now_playing"/>}/>
        <Route path='/movies/popular' element={<MovieList title="Popular Movies" apiPath="movie/popular" />}/>
        <Route path='/movies/top' element={<MovieList title="Top Rated Movies" apiPath="movie/top_rated" />}/>
        <Route path='/movies/upcoming' element={<MovieList title="Upcoming Movies" apiPath="movie/upcoming" />}/>
        <Route path='/movie/:id' element={<MovieDetails />} />
        <Route path='/search' element={<Search apiPath="search/movie" />} />
        <Route path='*' element={<PageNotFound />} title="Page Not Found" />
      </Routes>
    </div>
  )
}

export default AllROute