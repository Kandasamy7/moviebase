import { useSearchParams } from "react-router-dom"
import { Cart } from "../components/Cart"
import useFetch from "../../HOOKS/useFetch"
import { useEffect } from "react"

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get("q")
  const {data: movies} = useFetch(apiPath, queryTerm)
  useEffect(()=>{
    document.title = `Search results for ${queryTerm}`
  })
  return (
  <main className="container">
    <h5>Search</h5>
       <h5 className='text-danger py-2 border-bottom'>{movies.length==0? `No results found for ${queryTerm}`: `Result for ${queryTerm}`}</h5>
    
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2'>
              {movies.map((movie)=>{
                return <Cart key={movie.id} movie={movie}/>
              })}
              
            </div>
  </main>
  )
}


