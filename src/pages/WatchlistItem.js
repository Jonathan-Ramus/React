import { useDispatch } from "react-redux"
import { removeMovie, setDisplayMovie } from "../store"

function WatchlistItem({movie}){
    
    const dispatch = useDispatch()

    const viewDetails = (e) => {
      e.preventDefault()
      dispatch(setDisplayMovie(movie))
    }

    const removeFromWatchlist = (e) => {
        e.preventDefault()
        dispatch(removeMovie(movie))
    }
    
    return ( 
    <tr>
      <th>{movie.title}</th>
      <th>{movie.release_date}</th>
      <th><button className='btn' onClick={viewDetails}>Details</button></th>
      <th><button className='btn' onClick={removeFromWatchlist}>Remove from Watchlist</button></th>
    </tr>
    )
}

export default WatchlistItem