import { createAsyncThunk } from "@reduxjs/toolkit"
import { IMoviesByQueryParamsResponse } from "../types/types.ts"
import axios from "axios"

interface IParams {
    page: number
    with_genres: string
    sort_by: string
}

export const fetchMoviesByQueryParams = createAsyncThunk<
    IMoviesByQueryParamsResponse,
    IParams,
    { rejectValue: string }
>("moviesByQueryParams/fetchMoviesByQueryParams", async (params, { rejectWithValue }) => {
    try {
        const options = {
            method: "GET",
            url: "https://api.themoviedb.org/3/discover/movie",
            params: { language: "en-US", page: params.page, sort_by: params.sort_by, with_genres: params.with_genres },
            headers: {
                accept: "application/json",
                Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDMxZDY2NzBkZmE2MGE0YWY4ZjE5MzZjZmQzOTVmYSIsIm5iZiI6MTcyMzYyNTQxNy4zNzQ0NDgsInN1YiI6IjY2YmM2NTk1YzdlNDc1YWI5NmMzNTE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z8-f8KsicnCmfOcATyQ-thlKz9RKaxq6d8gIXTLrQxk"
            }
        }

        const response = await axios.request(options)
        if (response.status !== 200) {
            throw new Error("Unexpected response status")
        }
        console.log(response.data)
        return response.data
    } catch (error) {
        return rejectWithValue("An error occurred while fetching popular films")
    }
})
