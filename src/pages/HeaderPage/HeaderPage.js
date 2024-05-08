import { NavLink } from "react-router-dom"
import '../HeaderPage/HeaderPage.css'
const PageHeader = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <NavLink to="/home">Home Page</NavLink>
                </li>
                
                <li>
                    <NavLink to="/games">Games List</NavLink>
                </li>

                <li>
                    <NavLink to="/add-game">Add Game</NavLink>
                </li>

            </ul>
        </nav>
    </header>
  )
}

export default PageHeader