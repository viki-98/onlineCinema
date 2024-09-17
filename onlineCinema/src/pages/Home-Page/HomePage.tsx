import Header from "../../components/Header/Header.tsx"
import Filtration from "../../components/filtration/Filtration.tsx"
import { fetchFilmsGenres, fetchSeriesGenres } from "../../services/filtrationService.ts"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts"
import { useEffect } from "react"
import { fetchPopularMovies } from "../../services/popularMoviesService.ts"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import MovieCard from "../../components/Card/MovieCard.tsx"

const HomePage = () => {
    const dispatch = useAppDispatch()
    const { popularMovies } = useAppSelector((state) => state.popularMovies)
    const { cinemaGenres } = useAppSelector((state) => state.filtration)

    useEffect(() => {
        dispatch(fetchFilmsGenres())
        dispatch(fetchSeriesGenres())
        dispatch(fetchPopularMovies())
    }, [])


    return (
        <>
            <Header />
            <Filtration />
            <Container>
                <Row xs={1} md={4} className="g-4">
                    {popularMovies.map((element) => {
                        return (
                            <Col key={element.id}>
                                <MovieCard movies={element} genres={cinemaGenres} />

                            </Col>
                        )
                    })}
                </Row>
            </Container>


        </>
    )
}

export default HomePage
