import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { LandingPage } from "../pages/LandingPage";
import { useDispatch } from "react-redux";
import { setUsers } from "../redux/userSlice";
import { useEffect } from "react";
import axios from "axios";

export const Routers = () => {
  const dispatch = useDispatch();

  const fetchAccount = async () => {
    try {
      console.log("before");
      const response = await axios.get("https://panorbit.in/api/users.json");
      console.log("after ", response);
      if (response.status === 200 && response.data) {
        dispatch(setUsers(response.data.users));
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchAccount();
  }, [dispatch]);

  return (
    <Routes>
      <Route exact path="/" element={<LandingPage />} />
      <Route exact path="/home/:id" element={<HomePage />} />
    </Routes>
  );
};
