import { useSelector } from "react-redux";
import WatchlistItem from "./WatchlistItem"
import MovieDetails from "./MovieDetails";

const Watchlist = () => {
    
    const movies = useSelector((state) => {
        return state.watchlist.value;
    });

    let content
    
    try{
        console.log(movies)
        content = movies.map((movie) => {
            return <WatchlistItem key={movie.id} movie={movie}></WatchlistItem>
        })

    } catch(e) {
        console.log(e)
        content = <p>No content</p>
    }

    
    return (
        <>
        <table className='center'>
            <tbody>
                {content}
            </tbody>
        </table>
        <MovieDetails />
        </>
    )
}

export default Watchlist