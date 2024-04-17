import { useSelector } from "react-redux";
import { useSearchMoviesQuery } from "../store";
import MovieDetails from "./MovieDetails";
import ListItem from "./ListItem";

const SearchResult = () => {
    
    const searchText = useSelector((state) => {
        return state.searchText.value;
    });
    const queryResult = useSearchMoviesQuery(searchText)

    let content
    
    try{
        let movies = queryResult.data.results
        console.log(movies)
        content = movies.map((movie) => {
            return <ListItem key={movie.id} movie={movie} />
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

export default SearchResult