import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HeaderPage from './pages/HeaderPage/HeaderPage';
import HomePage from './pages/HomePage/HomePage';
import GamesPage from './pages/GamesPage/GamesPage';
import GamePage from './pages/GamePage/GamePage';
import CreateGamePage from './pages/CreateGamePage/CreateGamePage';
import EditGamePage from './pages/EditGamePage/EditGamePage';

function App() {
  return (
  <>
    <HeaderPage />

    <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/games' element={<GamesPage />} />
        <Route path='/games/:id' element={<GamePage />} />
        <Route path='/add-game' element={<CreateGamePage />} />
        <Route path='/edit-game/:id' element={<EditGamePage />} />
    </Routes>
  
  </>
  );
}

export default App;
