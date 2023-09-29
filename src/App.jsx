import "./App.css";
import { HomePage } from "./components/pages/HomePage";
import { LandingPage } from "./components/pages/LandingPage";
import { Provider } from "react-redux";
import { store } from "./store";
import { Routers } from "./components/Routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routers />
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
