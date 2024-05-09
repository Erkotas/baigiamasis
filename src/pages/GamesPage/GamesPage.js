import '../GamesPage/GamesPage.css'
import { useEffect, useState } from "react"
import { API_URL } from "../../config"
import GamesList from "../../components/GamesList/GamesList"

const GamesPage = () => {
    const [games, setGames] = useState([])

    useEffect(() => {
        const getGames = async () => {
            const res = await fetch(API_URL + '/games')
            const data = await res.json()

            setGames(data)
        }

        getGames()
    }, [])


    return (
        <div>
            <h1 className="games-list">Games List</h1>

            <GamesList data={games} />
        </div>
    )
}

export default GamesPage