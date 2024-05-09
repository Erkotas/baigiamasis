import '../GameForm/GameForm.css'
import { useEffect, useState } from "react"
import { API_URL } from "../../config"

    const GameForm = ({ onGameSubmit, editGameData }) => {
        const [title, setTitle] = useState('')
        const [description, setDescription] = useState('')
        const [genre, setGenre] = useState('')
        const [developer, setDeveloper] = useState ('')
        const [games, setGames] = useState([])
      
        useEffect(() => {
          const getUsers = async () => {
            const res = await fetch(API_URL + '/games')
            const usersData = await res.json()
      
            setGames(usersData)
      
            if (editGameData) {
              setTitle(editGameData.title)
              setDescription(editGameData.description)
              setGenre(editGameData.genre)
              setDeveloper(editGameData.developer)
            }
          }
             getUsers()
            
        }, [editGameData])
      
        const titleHandler = event => setTitle(event.target.value)
        const descriptionHandler = event => setDescription(event.target.value)
        const genreHandler = event => setGenre(event.target.value)
        const developerHandler = event => setDeveloper(event.target.value)
        

        const submitHandler = async (event) => {
            event.preventDefault()
            
            const games = {
                title,
                description,
                genre,
                developer,
            }
        
            onGameSubmit(games)
        }
      
        return (
        <form className="games-form" onSubmit={submitHandler}>
            <div className="col-auto">
                <label className="col-sm-2 col-form-label" htmlFor="title">Title: </label>
                <div className='col-sm-10'>
                    <input type="text" name="title" id="title" value={title} onChange={titleHandler} />
                </div>
            </div>
      
            <div className="col-auto">
                <label className='col-sm-2 col-form-label' htmlFor="description">Description:</label>
                <div className='col-sm-10'>
                    <textarea name="description" id="description" value={description} onChange={descriptionHandler}></textarea>
                </div>
            </div>
      
            <div className="col-auto">
                <label className='col-sm-2 col-form-label' htmlFor="genre">Genre: </label>
                <div className='col-sm-10'>
                    <input type="text" name="genre" id="genre" value={genre} onChange={genreHandler} />
                </div>
            </div>

            <div className="col-auto">
                <label className='col-sm-2 col-form-label' htmlFor="developer">Developer: </label>
                <div className='col-sm-10'>
                    <input type="text" name="developer" id="developer" value={developer} onChange={developerHandler} />
                </div>
            </div>
      
            <button className='btn btn-outline-light' type="submit" disabled={title === '' ? true : false}>Add Game</button>
        </form>
        )
      }

export default GameForm