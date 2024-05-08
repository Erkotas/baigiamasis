import { Link } from "react-router-dom"

const GamesList = ({ data }) => {
    const gameElements = data.map(game => (
      <li key={game.id}>
        <Link to={`/games/${game.id}`}>{game.id}. {game.title} </Link>
      </li>
    ))
  
    return (
      <ul>
        {gameElements}
      </ul>
    )
  }
  
  export default GamesList