import { NavLink } from "react-router-dom"

const PageHeader = () => {
  return (
    <header>
        <nav>
            <ul>
                <ul>
                    <li>
                        <NavLink to="/home">Home Page</NavLink>
                    </li>
                    <li>
                    <NavLink to="/games">Games List</NavLink>

                    <ul>
                        <li>
                            <NavLink to="/create-post">Create Post</NavLink>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavLink to="/users">Users</NavLink>
                </li>
                    <ul>
                        <li>
                            <NavLink to="/create-user">Create User</NavLink>
                        </li>
                    </ul>
                <li>
                    <NavLink to="/albums">Albums</NavLink>
                </li>
                    <ul>
                        <li>
                            <NavLink to="/create-album">Create Album</NavLink>
                        </li>
                    </ul>
                
                <li>
                    <NavLink to="/categories">Categories</NavLink>
                </li>

                </ul>
            </ul>
        </nav>
    </header>
  )
}

export default PageHeader