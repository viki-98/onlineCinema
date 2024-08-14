import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import {
  fetchFilmsGenres,
  GenresResponse,
} from "../../services/filtrationService"

interface IGenre {
  id: number
  name: string
}

interface IFiltrationState {
  cinemaGenres: IGenre[]
  seriesGenres: IGenre[]
  isLoading: boolean
  isError: string | null
}

const initialState: IFiltrationState = {
  cinemaGenres: [],
  seriesGenres: [],
  isLoading: false,
  isError: null,
}

const filtrationSlice = createSlice({
  name: "filtration",
  initialState,
  reducers: {},
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
        (state, action: PayloadAction<string | null>) => {
          state.isError = action.payload || "An error occurred"
          state.isLoading = false
        }
      )
  },
})

export default filtrationSlice.reducer
