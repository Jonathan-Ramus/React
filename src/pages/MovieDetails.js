import { useSelector } from "react-redux";

function MovieDetails(){

    const movie = useSelector((state) => {
        return state.displayMovie.value;
    });
    
    const posterBasePath = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
    return (   
    <div>
        <img src= {posterBasePath + movie.poster_path} alt=""/>
        <div>
            <h5><span>{movie.title}</span></h5>
            <p>{movie.overview}</p>          
        </div>
    </div>
    )
}

export default MovieDetails