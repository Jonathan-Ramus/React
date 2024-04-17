import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { moviesApi } from './api/moviesApi'
import { searchReducer, setSearchText } from './searchSlice'
import { movieReducer, setDisplayMovie } from './movieSlice'
import { watchlistReducer, addMovie, removeMovie } from './watchListSlice'


export const store = configureStore({
  reducer: {
    [moviesApi.reducerPath]: moviesApi.reducer,
    searchText: searchReducer,
    displayMovie: movieReducer,
    watchlist: watchlistReducer
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
    .concat(moviesApi.middleware)
  }
});

setupListeners(store.dispatch)


export { useSearchMoviesQuery } from './api/moviesApi'
export {setSearchText}
export {setDisplayMovie}
export {addMovie, removeMovie}

