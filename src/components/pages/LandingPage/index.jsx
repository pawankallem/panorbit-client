import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

export const LandingPage = () => {
  const [accounts, setAccounts] = useState([]);

  const fetchAccount = async () => {
    try {
      const response = await axios.get("https://panorbit.in/api/users.json");
      console.log("res: ", response);
      if (response.status === 200 && response.data)
        setAccounts(response.data.users);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  const userAccount = (account, isLastIndex) => {
    return (
      <div className="user">
        <img
          src={account.profilepicture}
          alt={account.name}
          className="user-image"
        />
        <div className="user-name">{account.name}</div>
      </div>
    );
  };

  useEffect(() => {
    fetchAccount();
  }, []);

  return (
    <div className="landing-page-container">
      <div className="accounts-container">
        <header className="accounts-header">
          <h2>Select an account</h2>
        </header>
        <div className="accounts-list-container">
          <ul className="unordered-list">
            {accounts.map((account, index) => {
              return (
                <li key={account.id} className="list">
                  {userAccount(account)}
                  {index !== accounts.length - 1 && <hr />}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
