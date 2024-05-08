import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config"


const GamePage = () => {
    const { id } = useParams()
    const [game, setGame] = useState(null)
    const [gameIsDeleted, setUserIsDeleted] = useState(false)

    
    useEffect(() => {
        const getData = async () => {
        const res = await fetch(`${API_URL}/games/${id}`)
        const data = await res.json()
        
        setGame(data)
       
        }
    
        getData()
    }, [id])
    
    if (!game) {
        return <p>Loading...</p>
    }
    
    const { title, description, genre, developer} = game
   
   

    const deleteUserHandler = () => {
        fetch(`${API_URL}/games/${id}`, {
        method: 'DELETE',
        })
    
        setUserIsDeleted(true)
    }
    
    if (gameIsDeleted) {
        return (
        <div>
            <h2>Game was removed</h2>
            <Link to="/games">Go back to games page</Link>
        </div>
        )
    }
    
    return (
        <div>
            <h2> {title}</h2>
            <p className="description">Description: {description} </p>
            <p className="genre">Genre: {genre}</p>
            <p className="developer">Developer: {developer}</p>

            <div className="game-controls">
                <button onClick={deleteUserHandler}>Remove Game</button>
                <Link to={`/edit-game/${id}`}>Edit Game</Link>
            </div>
        
        
        </div>
    )
    }
    

export default GamePage