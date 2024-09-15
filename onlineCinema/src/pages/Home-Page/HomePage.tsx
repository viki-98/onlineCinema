import Header from "../../components/Header/Header.tsx"
import Filtration from "../../components/filtration/Filtration.tsx"
import { fetchFilmsGenres } from "../../services/filtrationService.ts"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks.ts"

const HomePage = () => {
    const dispatch = useAppDispatch()
    const { cinemaGenres } = useAppSelector((state) => state.filtration)

    const clickHandler = () => {
        dispatch(fetchFilmsGenres())
    }
    return (
        <>
            <Header />
            <Filtration />
            <button onClick={clickHandler}></button>
            {cinemaGenres.map((genre) => (
                <div key={genre.id}>{genre.name}</div>
            ))}
        </>
    )
}

export default HomePage
