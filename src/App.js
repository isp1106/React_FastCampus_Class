import { Provider } from "react-redux";
import CounterContainer from "./container/CounterContainer";
import store from "./modules"

function App() {
  return (
    <Provider store={store}>
      <CounterContainer />
    </Provider>
  );
}

export default App;
