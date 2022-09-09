import {Link, Route, Routes, useLocation, useNavigate} from 'react-router-dom'
import Albums from './components/Albums';
import AlbumList from './components/Albums/AlbumList';
// import Posts from './components/Posts'
import PostDetail from './components/Posts/PostDetail';
import PostIndex from './components/Posts/PostIndex';
import Users from './components/Users'
import UserDetail from './components/Users/UserDetail'
import UserIndex from './components/Users/UserIndex'
import Photos from './components/Albums/AlbumList/Photos';
import PhotoList from './components/Albums/AlbumList/Photos/PhotoList';
import PhotoDetail from './components/Albums/AlbumList/Photos/PhotoDetail';
import {lazy, Suspense} from 'react'
const Posts = lazy(() => import("./components/Posts"))
function App() {
  const location = useLocation()
  return (
    <div>
      <h5>{location.pathname}</h5>
      <nav>
        <Link to="posts">Posts</Link> |
        <Link to="users">Users</Link> | 
        <Link to="albums">Albums</Link>
      </nav>
      <Routes>
      <Route path="posts" element={<Suspense fallback={<h1>Loading...</h1>}><Posts/></Suspense>}>
        <Route index element={<PostIndex/>}/>
        <Route path=":postId" element={<PostDetail/>}/>
      </Route>
        <Route path="users" element={<Users/>}>
          <Route index element={<UserIndex/>}/>
          <Route path=":userId" element={<UserDetail/>}/>
        </Route>
        <Route path="albums" element={<Albums />}>
          <Route index element={<AlbumList />}/>
          <Route path=":albumId" element={<Photos/>}>
            <Route index element={<PhotoList />}/>
            <Route path="photos/:photoId" element={<PhotoDetail/>}/>
          </Route>
        </Route>
        <Route path="*" element={<>not Found</>} />
      </Routes>
    </div>
  );
}

export default App;
