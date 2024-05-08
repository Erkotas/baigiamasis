import React from 'react'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../config'
import GameForm from '../../components/GameForm/GameForm'

const CreateGamePage = () => {
    const navigate = useNavigate()
    
    const newGameHandler = async (newPost) => {
        const res = await fetch(API_URL + '/games', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
    
        const createdGame = await res.json()
    
        navigate('/games/' + createdGame.id)
    }
    
    return (
        <div>
        <GameForm onGameSubmit={newGameHandler} />
        </div>
    )
}

export default CreateGamePage