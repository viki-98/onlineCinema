import Header from "../../components/Header/Header.tsx"
import Filtration from "../../components/filtration/Filtration.tsx"
import { fetchFilmsGenres, fetchSeriesGenres } from "../../services/filtrationService.ts"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts"
import { useEffect } from "react"
import { fetchPopularMovies } from "../../services/popularMoviesService.ts"

const HomePage = () => {
    const dispatch = useAppDispatch()
    const { popularMovies } = useAppSelector((state) => state.popularMovies)

    useEffect(() => {
        dispatch(fetchFilmsGenres())
        dispatch(fetchSeriesGenres())
        dispatch(fetchPopularMovies())
    }, [])

    const clickHandler = () => {
    }
    return (
        <>
            <Header />
            <Filtration />
            <div>
                {popularMovies.map((element) => {
                    return (
                        <div>
                            <img src={`https://image.tmdb.org/t/p/w300${element.poster_path}`} />
                            <p>{element.title}</p>
                        </div>
                    )
                })}
            </div>

        </>
    )
}

export default HomePage
