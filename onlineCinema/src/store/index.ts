import { configureStore } from "@reduxjs/toolkit"
import filtrationReducer from "./slices/filtrationSlice.ts"
import popularMovieReducer from "./slices/popularMovieSlice.ts"
import moviesByQueryParams from "./slices/moviesByQueryParams.ts"

export const store = configureStore({
    reducer: {
        filtration: filtrationReducer.reducer,
        popularMovies: popularMovieReducer.reducer,
        moviesByQueryParams: moviesByQueryParams.reducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
