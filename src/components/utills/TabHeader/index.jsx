import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { UserAccount } from "../UserAccounts";

export const TabHeader = ({ tabName }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useSelector((state) => state.user.users);
  const user = useMemo(() => {
    const temp = users.find((elem) => elem.id === +id);
    return temp;
  }, [users, id]);
  const [showPopup, setShowPopup] = useState(false);

  const handleNavigate = () => {
    setShowPopup(false);
    navigate("/");
  };

  return (
    <div className="tab-header-container">
      <div className="header">
        <div className="tab-name">{tabName} </div>
        <div className="pop-up-container">
          <div
            className="profile-container"
            onClick={() => setShowPopup(!showPopup)}
          >
            <img
              className="image"
              src={user?.profilepicture}
              alt={user?.name}
            />
            <div className="name">{user?.name}</div>
          </div>
          {showPopup && (
            <div
              className="popup-container"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="logged-in-user-details">
                <img
                  className="image"
                  src={user?.profilepicture}
                  alt={user?.name}
                />
                <div className="name">{user?.name}</div>
                <div className="username">{user?.username}</div>
              </div>
              <div className="users-list">
                <ul className="cards-list">
                  {users.map((user, index) => {
                    return (
                      <li
                        key={user.id}
                        className="card"
                        onClick={() => setShowPopup(false)}
                      >
                        <hr />
                        <UserAccount user={user} />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="sign-out">
                <button className="button" onClick={handleNavigate}>
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
