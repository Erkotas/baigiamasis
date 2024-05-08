import { useEffect, useState } from "react"
import { API_URL } from "../../config"

    const GameForm = ({ onGameSubmit, editGameData }) => {
        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')
        const [genre, setGenre] = useState('')
      
        const [games, setGames] = useState([])
      
        useEffect(() => {
          const getUsers = async () => {
            const res = await fetch(API_URL + '/games')
            const usersData = await res.json()
      
            setGames(usersData)
      
            if (editGameData) {
              setTitle(editGameData.title)
              setDescription(editGameData.description)
              setGenre(editGameData.userId)
            }
          }
      
          getUsers()
        }, [editGameData])
      
        const titleHandler = event => setTitle(event.target.value)
        const descriptionHandler = event => setDescription(event.target.value)
        const genreHandler = event => setGenre(event.target.value)
      
        const submitHandler = async (event) => {
          event.preventDefault()
          
          const games = {
            title,
            description,
            genre,
          }
      
          onGameSubmit(games)
        }
      
        return (
          <form onSubmit={submitHandler}>
            <div className="form-control">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={title} onChange={titleHandler} />
            </div>
      
            <div className="form-control">
                <label htmlFor="description">Description</label>
                <textarea name="description" id="description" value={description} onChange={descriptionHandler}></textarea>
            </div>
      
            <div className="form-control">
                <label htmlFor="genre">Genre</label>
                <input type="text" name="genre" id="genre" value={genre} onChange={genreHandler} />
            </div>
      
            <button type="submit" disabled={genre === 'empty' ? true : false}>Create Game</button>
          </form>
        )
      }

export default GameForm