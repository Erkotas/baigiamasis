import '../GamePage/GamePage.css'
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
   
   

    const deleteGameHandler = () => {
        fetch(`${API_URL}/games/${id}`, {
        method: 'DELETE',
        })
    
        setUserIsDeleted(true)
    }
    
    if (gameIsDeleted) {
        return (
        <div className='content-wrapper'>
            <h2>Game was removed</h2>
            <Link className='btn btn-outline-light back' to="/games">Go back to games page</Link>
        </div>
        )
    }
    
    return (
        <div className="game-page">
            <h2> {title}</h2>
            <p className="description">Description: {description} </p>
            <p className="genre">Genre: {genre}</p>
            <p className="developer">Developer: {developer}</p>

            <div className="buttons-wrapper">
                <button type='button' className='btn btn-outline-light' onClick={deleteGameHandler}>Remove Game</button>
                <Link className='btn btn-outline-light' to={`/edit-game/${id}`}>Edit Game</Link>
            </div>
        
        
        </div>
    )
    }
    

export default GamePage