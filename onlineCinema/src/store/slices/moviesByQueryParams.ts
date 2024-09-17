import { createSlice } from "@reduxjs/toolkit"
import { IFilm } from "../../types/types.ts"
import { fetchPopularMovies } from "../../services/popularMoviesService.ts"


interface IMoviesByQueryParamsState {
    moviesByQueryParams: IFilm[]
    page: number
    total_pages: number
    total_results: number
    isLoading: boolean
    isError: string | null
}

const initialState: IMoviesByQueryParamsState = {
    moviesByQueryParams: [],
    page: 0,
    total_pages: 0,
    total_results: 0,
    isLoading: false,
    isError: null
}

const moviesByQueryParamsSlice = createSlice({
    name: "moviesByQueryParams",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPopularMovies.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(
                fetchPopularMovies.fulfilled,
                (state, action) => {
                    state.moviesByQueryParams = action.payload.results
                    state.page = action.payload.page
                    state.total_pages = action.payload.total_pages
                    state.total_results = action.payload.total_results
                    state.isLoading = false
                }
            )
            .addCase(
                fetchPopularMovies.rejected,
                (state, action) => {
                    state.isError = action.payload || "An error occurred"
                    state.isLoading = false
                }
            )
    }

})


export default moviesByQueryParamsSlice
