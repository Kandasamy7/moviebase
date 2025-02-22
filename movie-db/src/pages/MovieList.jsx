import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Cart } from '../components/Cart'
import useFetch from '../../HOOKS/useFetch'

export const MovieList = ({title, apiPath}) => {
const {data:movies} = useFetch(apiPath)

useEffect(()=>{
  document.title = title
})
const navigator = useNavigate()
  return (
    <div>
      <main className='container'>
        {title == "You'r guide to great Movies" ? (
          <div className='bg-body-tertiary p-5 border mb-5'>
            <h3 className='text-primary'> Welcome to Movie Base</h3>
            <p className='lead'>Ever felt the thrill of an epic space battle? Or the chills from a legendary movie quote? May the Force be with you! Or maybe, I'm gonna make him an offer he can't refuse! Movies aren't just stories—they're experiences. Dive in, explore, and discover your next favorite film today!" </p>
            <button className='btn btn-primary ' onClick={()=>{navigator("movies/upcoming")}}>Explore Now!!</button>
          </div>
        ):""}
        <h5 className='text-danger py-2 border-bottom'>{title}</h5>

        <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2'>
          {movies.map((movie)=>{
            return <Cart key={movie.id} movie={movie}/>
          })}
          
        </div>
      </main>
    </div>
  )
}


