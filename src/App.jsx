import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Routers } from "./components/Routes";

function App() {
  return (
    <>
      <Provider store={store}>
        <Routers />
      </Provider>
    </>
  );
}

export default App;
