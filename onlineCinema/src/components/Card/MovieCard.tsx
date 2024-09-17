// import React from "react"
import "./MovieCard.scss"
import Card from "react-bootstrap/Card"
import { IFilm, IGenre } from "../../types/types.ts"

interface Iprops {
    movies: IFilm
    genres: IGenre[]
}

const MovieCard = (props: Iprops) => {

    const { movies, genres } = props


    return (

        <Card>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w300${movies.poster_path}`} />
            <Card.Body>
                <Card.Title>{movies.title}</Card.Title>
                <Card.Text>
                    <span className="styles_release_data">
                        {movies.release_date}
                    </span>
                    <span className="styles_genre">
                        {movies.genre_ids.map((element) => {
                            return genres.map((genre) => {
                                if (genre.id === element) {
                                    return <span key={genre.id}>{genre.name}</span>
                                }
                            })
                        })}
                    </span>
                </Card.Text>
            </Card.Body>
        </Card>


    )

}

export default MovieCard