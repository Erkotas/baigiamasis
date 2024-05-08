import '../GamesList/GamesList.css'
import { Link } from "react-router-dom"

const GamesList = ({ data }) => {
    const gameElements = data.map(game => (
      <li className='games-list' key={game.id}>
        <Link className='game-item' to={`/games/${game.id}`}> {game.title} </Link>
      </li>
    ))
  
    return (
        <div className='list-wrapper'>
            <ul className='games-list'>
                {gameElements}
            </ul>
        </div>
    )
  }
  
  export default GamesList