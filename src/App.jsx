import "./App.css";
// import { Routers } from "./components/Routes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LandingPage } from "./components/pages/LandingPage";
import { HomePage } from "./components/pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
