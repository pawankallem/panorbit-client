import React, { useEffect } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUsers } from "../../redux/userSlice";
import axios from "axios";

export const LandingPage = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const fetchAccount = async () => {
    try {
      if (users.length > 0) return;
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
    console.log("mounting");
    fetchAccount();
    console.log("unmounting");
  }, []);

  const userAccount = (user) => {
    return (
      <div className="user" onClick={() => navigate(`/home/${user.id}`)}>
        <img src={user.profilepicture} alt={user.name} className="user-image" />
        <div className="user-name">{user.name}</div>
      </div>
    );
  };

  return (
    <div className="landing-page-container">
      <div className="accounts-container">
        <header className="accounts-header">
          <h2>Select an account</h2>
        </header>
        <div className="accounts-list-container">
          <ul className="cards-list">
            {users.map((user, index) => {
              return (
                <li key={user.id} className="card">
                  {userAccount(user)}
                  {index !== users.length - 1 && <hr />}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
