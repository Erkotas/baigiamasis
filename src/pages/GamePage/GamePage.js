import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { API_URL } from "../../config"


const GamePage = () => {
    const { id } = useParams()
    const [game, setGame] = useState(null)
    const [userIsDeleted, setUserIsDeleted] = useState(false)
    
    useEffect(() => {
        const getData = async () => {
        const userRes = await fetch(`${API_URL}/games/${id}`)
        const userData = await userRes.json()
    
        setGame(userData)
    
        }
    
        getData()
    }, [id])
    
    if (!game) {
        return <p>Loading...</p>
    }
    
    const { title, description, genre } = game
    
    const deleteUserHandler = () => {
        fetch(`${API_URL}/games/${id}`, {
        method: 'DELETE',
        })
    
        setUserIsDeleted(true)
    }
    
    if (userIsDeleted) {
        return (
        <div>
            <h2>Game was removed</h2>
            <Link to="/games">Go back to games page</Link>
        </div>
        )
    }
    
    return (
        <div>
        <div className="game-controls">
            <button onClick={deleteUserHandler}>Remove Game</button>
            <Link to={`/api-project/edit-game/${id}`}>Edit Game</Link>
        </div>
    
        <h2> {title}</h2>
        <p className="description">Description: {description} </p>
        <p className="genre">Genre: {genre}</p>

    
        </div>
    )
    }
    

export default GamePage