import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchPopularMovies } from "../../services/popularMoviesService.ts"

interface IPopularMovieState {
    popularMovies: []
    page: number
    isLoading: boolean
    isError: string | null
}

const initialState: IPopularMovieState = {
    popularMovies: [],
    page: 1,
    isLoading: false,
    isError: null
}

const popularMovieSlice = createSlice({
    name: "popularMovies",
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
                    state.popularMovies = action.payload.results
                    state.page = action.payload.page
                    state.isLoading = false
                }
            )
            .addCase(
                fetchPopularMovies.rejected,
                (state, action: PayloadAction<string | null>) => {
                    state.isError = action.payload || "An error occurred"
                    state.isLoading = false
                }
            )
    }
})


export default popularMovieSlice
