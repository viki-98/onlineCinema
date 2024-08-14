import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchFilmsGenres } from "../../services/filtrationService"

interface IGenre {
    id: number;
    name: string;
}

interface IFiltrationState {
    cinemaGenres: IGenre[];
    seriesGenres: IGenre[];
    isLoading: boolean;
    isError: string | null;
}

const initialState: IFiltrationState = {
    cinemaGenres: [],
    seriesGenres: [],
    isLoading: false,
    isError: null
}

const filtrationSlice = createSlice({
    name: "filtration",
    initialState,
    reducers: {
        // Пример редьюсера, который нужно будет настроить
        increment: (state) => {
            // Пример изменения состояния
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilmsGenres.pending, (state) => {
                state.isLoading = true
                state.isError = null
            })
    }
})

export default filtrationSlice.reducer
