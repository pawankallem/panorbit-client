import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Routers } from "./components/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routers />
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
