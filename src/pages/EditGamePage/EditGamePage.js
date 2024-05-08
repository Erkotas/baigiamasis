import { useEffect, useState } from "react"
import { useAsyncError, useNavigate, useParams } from "react-router-dom"
import { API_URL } from "../../config"
import GameForm from "../../components/GameForm/GameForm"

const EditGamePage = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [game, setGame] = useState(null)

    useEffect(() => {
      const getGame = async () => {
        const res = await fetch(`${API_URL}/games/${id}`)
        const data = await res.json()

        setGame(data)
   
      }
  
      getGame()
    }, [id])
  
    const editGameHandler = async (gameData) => {
        const res = await fetch(`${API_URL}/games/${id}` , {
            method: 'PUT',
            body: JSON.stringify(gameData),
            headers: {
            'Content-type': 'application/json; charset=UTF-8',
            },
        })
        

        const updatedGame = await res.json()
        navigate('/games/' + updatedGame.id)
    }
  
    return (
      <div>
        {game && <GameForm editGameData={game} onGameSubmit={editGameHandler}/>}
      </div>
    )
  }

export default EditGamePage