import { useNavigate } from "react-router-dom";
import "./style.css";

export const UserAccount = ({ user }) => {
  const navigate = useNavigate();
  return (
    <div className="user" onClick={() => navigate(`/home/${user.id}`)}>
      <img
        src={user.profilepicture}
        alt={user.name}
        className="user-image"
        width={30}
        height={30}
      />
      <div className="user-name">{user.name}</div>
    </div>
  );
};
