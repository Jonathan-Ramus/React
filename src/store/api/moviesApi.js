import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const moviesApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://api.themoviedb.org/3/' }),
    endpoints: (builder) => ({
        searchMovies: builder.query({
            query: (searchText) => {
                return {
                    url: 'search/movie',
                    params: {
                      query: searchText,
                      api_key: '81c50c197b83129dd4fc387ca6c8c323'
                    },
                    method: 'GET'
                }
            }
        })
    })
})

export const {useSearchMoviesQuery} = moviesApi
export {moviesApi}