// import Posts from "./components/Posts";
import Post from "./components/Post";
import { Provider } from "react-redux";
import store from "./store";
import PostInput from "./components/PostInput";
function App() {
  return (
    <Provider store={store}>
      {/* <Posts /> */}
      <PostInput />
      <Post />
    </Provider>
  );
}

export default App;
