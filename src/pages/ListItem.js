import { useDispatch } from "react-redux"
import { addMovie, setDisplayMovie } from "../store"

function ListItem({movie}){
    
    const dispatch = useDispatch()

    const viewDetails = (e) => {
      e.preventDefault()
      dispatch(setDisplayMovie(movie))
    }

    const addToWatchlist = (e) => {
        e.preventDefault()
        dispatch(addMovie(movie))
    }
    
    return ( 
    <tr>
      <th>{movie.title}</th>
      <th>{movie.release_date}</th>
      <th><button className='btn' onClick={viewDetails}>Details</button></th>
      <th><button className='btn' onClick={addToWatchlist}>Add to Watchlist</button></th>
    </tr>
    )
}

export default ListItem