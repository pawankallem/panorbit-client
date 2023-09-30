import React from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const LandingPage = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.user.users);

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
