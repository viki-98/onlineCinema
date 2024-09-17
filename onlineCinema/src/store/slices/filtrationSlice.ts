import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
    fetchFilmsGenres, fetchSeriesGenres,
    GenresResponse
} from "../../services/filtrationService"
import { IGenre } from "../../types/types.ts"


interface IFiltrationState {
    cinemaGenres: IGenre[]
    seriesGenres: IGenre[]
    selectedMovieGenre: IGenre | null
    selectedSeriesGenre: IGenre | null
    sortBy: string
    isLoading: boolean
    isError: string | null
}

const initialState: IFiltrationState = {
    cinemaGenres: [],
    seriesGenres: [],
    selectedMovieGenre: null,
    selectedSeriesGenre: null,
    sortBy: "popularity.desc",
    isLoading: false,
    isError: null
}

const filtrationSlice = createSlice({
    name: "filtration",
    initialState,
    reducers: {
        setSelectedMovieGenre: (state, action: PayloadAction<IGenre | null>) => {
            state.selectedSeriesGenre = null
            state.selectedMovieGenre = action.payload
        },
        setSelectedSeriesGenre: (state, action: PayloadAction<IGenre | null>) => {
            state.selectedMovieGenre = null
            state.selectedSeriesGenre = action.payload
        }

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilmsGenres.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(
                fetchFilmsGenres.fulfilled,
                (state, action: PayloadAction<GenresResponse>) => {
                    state.cinemaGenres = action.payload.genres
                    state.isLoading = false
                }
            )
            .addCase(
                fetchFilmsGenres.rejected,
                (state, action) => {
                    // Здесь action.payload может быть undefined, поэтому проверяем на наличие
                    state.isError = action.payload || "An error occurred"
                    state.isLoading = false
                }
            )
            .addCase(fetchSeriesGenres.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
            .addCase(
                fetchSeriesGenres.fulfilled,
                (state, action: PayloadAction<GenresResponse>) => {
                    state.seriesGenres = action.payload.genres
                    state.isLoading = false
                }
            )
            .addCase(
                fetchSeriesGenres.rejected,
                (state, action) => {
                    state.isError = action.payload || "An error occurred"
                    state.isLoading = false
                }
            )

    }
})

export const { setSelectedMovieGenre, setSelectedSeriesGenre } = filtrationSlice.actions
export default filtrationSlice
