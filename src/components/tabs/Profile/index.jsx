import { useSelector } from "react-redux";
import "./style.css";
export const Profile = () => {
  const user = useSelector((state) => state.users);
  return (
    <div className="profile-details-container">
      <div className="left"></div>
      <div className="right"></div>
    </div>
  );
};
