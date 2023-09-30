import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Routers } from "./components/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Provider store={store}>
        </Provider> */}
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
