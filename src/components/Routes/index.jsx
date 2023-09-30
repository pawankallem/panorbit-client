import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LandingPage } from "../pages/LandingPage";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={<LandingPage />} />
        <Route path="/home/:id" Component={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};
