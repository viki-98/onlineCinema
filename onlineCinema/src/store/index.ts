import { configureStore } from "@reduxjs/toolkit"
import filtrationReducer from "./slices/filtrationSlice.ts"
import popularMovieReducer from "./slices/popularMovieSlice.ts"

export const store = configureStore({
    reducer: {
        filtration: filtrationReducer.reducer,
        popularMovies: popularMovieReducer.reducer
    }
})

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
