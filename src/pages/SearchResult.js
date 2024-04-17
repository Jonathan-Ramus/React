import { useSelector } from "react-redux";
import { useSearchMoviesQuery } from "../store";
import MovieDetails from "./MovieDetails";
import ListItem from "./ListItem";

const SearchResult = () => {
    
    const searchText = useSelector((state) => {
        return state.searchText.value;
    });
    const {data, error, isFetching} = useSearchMoviesQuery(searchText)

    let content
    
    if (isFetching) {
        content = <div>Loading;</div>
      } else if (error) {
        content = <div>Error loading movies.</div>;
      } else {
        let movies = data.results
        console.log(movies)
        content = movies.map((movie) => {
            return <ListItem key={movie.id} movie={movie} />
        })
        content =
        <>
        <table className='center'>
            <tbody>
                {content}
            </tbody>
        </table>
        <MovieDetails />
        </>
    }

    
    return (
        <>
            {content}
        </>
    )
}

export default SearchResult