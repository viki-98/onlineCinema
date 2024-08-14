import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { RootState } from "../store"

interface IGenre {
  id: number
  name: string
}

export interface GenresResponse {
  genres: IGenre[]
}

export const fetchFilmsGenres = createAsyncThunk<
  GenresResponse,
  void,
  { state: RootState }
>("filtration/fetchFilmsGenres", async (_, { rejectWithValue }) => {
  try {
    const options = {
      method: "GET",
      url: "https://api.themoviedb.org/3/genre/movie/list",
      params: { language: "en" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNDMxZDY2NzBkZmE2MGE0YWY4ZjE5MzZjZmQzOTVmYSIsIm5iZiI6MTcyMzYyNTQxNy4zNzQ0NDgsInN1YiI6IjY2YmM2NTk1YzdlNDc1YWI5NmMzNTE2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z8-f8KsicnCmfOcATyQ-thlKz9RKaxq6d8gIXTLrQxk",
      },
    }

    const response = await axios.request<GenresResponse>(options)
    return response.data
  } catch (error) {
    return rejectWithValue(error.response?.data || error.message)
  }
})
