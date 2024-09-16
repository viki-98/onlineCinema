import { createAsyncThunk } from "@reduxjs/toolkit"
import { RootState } from "../store"
import axios from "axios"
import { GenresResponse } from "./filtrationService.ts"

export const fetchPopularMovies = createAsyncThunk("popularMovies/fetchPopularMovies", async (_, { rejectWithValue }) => {
    try {
        const options = {
            method: "GET",
            url: "https://api.themoviedb.org/3/movie/popular",
            params: { language: "en-US", page: "1" },
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDMxZDY2NzBkZmE2MGE0YWY4ZjE5MzZjZmQzOTVmYSIsIm5iZiI6MTcyMzYyNTQxNy4zNzQ0NDgsInN1YiI6IjY2YmM2NTk1YzdlNDc1YWI5NmMzNTE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z8-f8KsicnCmfOcATyQ-thlKz9RKaxq6d8gIXTLrQxk"
            }
        }

        const response = await axios.request(options)
        console.log(response.data)
        return response.data
    } catch (error) {
        return rejectWithValue(error.response?.data || error.message)
    }
})
