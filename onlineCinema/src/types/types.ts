export interface IGenre {
    id: number
    name: string
}

export interface IPopularMoviesResponse {
    page: number
    results: IFilm[]
    total_pages: number
    total_results: number
}

export interface IFilm {
    adult: boolean; // По умолчанию true
    backdrop_path: string;
    genre_ids: number[]; // Массив целых чисел
    id: number; // По умолчанию 0
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number; // По умолчанию 0
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean; // По умолчанию true
    vote_average: number; // По умолчанию 0
    vote_count: number; // По умолчанию 0

}

export interface IMoviesByQueryParamsResponse {
    page: number
    results: IFilm[]
    total_pages: number
    total_results: number
}