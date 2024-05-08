import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HeaderPage from './pages/HeaderPage/HeaderPage';
import HomePage from './pages/HomePage/HomePage';
import GamesPage from './pages/GamesPage/GamesPage';

function App() {
  return (
  <>
    <HeaderPage />

    <Routes>
        <Route path='/home' element={<HomePage />} />
        <Route path='/games' element={<GamesPage />} />
        {/* <Route path='/posts' element={<PostsPage />} />
        <Route path='/albums' element={<AlbumsPage />} />
        <Route path='/categories' element={<CategoriesPage />} />
        
        <Route path='/api-project/posts/:id' element={<PostPage/>} />
        <Route path='/api-project/users/:id' element={<UserPage />} />
        <Route path='/albums/:id' element={<AlbumPage />} />

        <Route path='/create-post' element={<CreatePost />} />
        <Route path='/create-user' element={<CreateUserPage />} />
        <Route path='/create-album' element={<CreateAlbumPage />} /> 

        <Route path='/api-project/edit-post/:id' element={<EditPostPage />} />
        <Route path='/api-project/edit-user/:id' element={<EditUserPage />} /> */}
    </Routes>
  
  </>
  );
}

export default App;
