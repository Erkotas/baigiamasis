import { NavLink } from "react-router-dom"
import '../HeaderPage/HeaderPage.css'
const PageHeader = () => {
    return (
        <header>
            <nav>
                <ul className="header">
                    <li>
                        <NavLink className="header" to="/home">Home Page</NavLink>
                    </li>

                    <li>
                        <NavLink className="header" to="/games">Games List</NavLink>
                    </li>

                    <li>
                        <NavLink className="header" to="/add-game">Add Game</NavLink>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default PageHeader