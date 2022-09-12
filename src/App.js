import { Provider } from "react-redux";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import store from "./modules";
import PostsPage from './pages/posts'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Link to="/">Posts</Link>
        <Link to="/temp">Temp</Link>
        <Routes>
          <Route path="/" element={<PostsPage />}/>
          <Route path="/*" element={<p>Not Found</p>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
