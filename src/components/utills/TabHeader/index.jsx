import { useParams } from "react-router-dom";
import "./style.css";
import { useMemo } from "react";
import { useSelector } from "react-redux";

export const TabHeader = ({ tabName }) => {
  const { id } = useParams();
  const users = useSelector((state) => state.user.users);
  const user = useMemo(() => {
    const temp = users.find((elem) => elem.id === +id);
    return temp;
  }, [users]);

  return (
    <div className="tab-header-container">
      <div className="header">
        <div className="tab-name">{tabName} </div>
        <div>
          <div className="profile-container">
            <img
              className="image"
              src={user && user.profilepicture}
              alt={user && user.name}
            />
            <div className="name">{user && user.name}</div>
          </div>
          <div className="popup-container"></div>
        </div>
      </div>
    </div>
  );
};
