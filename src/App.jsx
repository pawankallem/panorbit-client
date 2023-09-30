import "./App.css";
import { Routers } from "./components/Routes";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setUsers } from "./components/redux/userSlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();

  const fetchAccount = async () => {
    try {
      const response = await axios.get("https://panorbit.in/api/users.json");
      if (response.status === 200 && response.data) {
        dispatch(setUsers(response.data.users));
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  useEffect(() => {
    fetchAccount();
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  );
}

export default App;
