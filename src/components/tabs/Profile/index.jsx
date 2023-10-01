import "./style.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useMemo } from "react";

export const Profile = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.user.users);
  const user = useMemo(() => {
    const temp = users.find((elem) => elem.id === +id);
    return temp;
  }, [users, id]);

  const userProfile = (key, value) => {
    return (
      <div className="user-personal-details">
        <div className="contact-type">{key}</div>
        <div className="colon"> {" : "} </div>
        <div className="contact-name">{value}</div>
      </div>
    );
  };

  return (
    <div className="profile-details-container">
      <div className="left">
        <div className="personal-details">
          <div className="image-container">
            <img
              className="image"
              src={user?.profilepicture}
              alt={user?.name || "Profile"}
            />
          </div>
          <div className="name-container">{user?.name}</div>
        </div>
        <div className="contact-details">
          {userProfile("Username", user?.name)}
          {userProfile("e-mail", user?.email)}
          {userProfile("Phone", user?.phone)}
          {userProfile("Website", user?.website)}
        </div>
        <hr />
        <div className="heading-title">Company</div>
        <div className="company-details">
          {userProfile("Name", user?.company.name)}
          {userProfile("catchphrase", user?.company.catchPhrase)}
          {userProfile("bs", user?.company.bs)}
        </div>
      </div>
      <div className="right">
        <div className="address-container">
          <div className="adress heading-title">Address : </div>
          <div className="adress-details">
            {userProfile("street", user?.address.street)}
            {userProfile("Suite", user?.address.suite)}
            {userProfile("City", user?.address.city)}
            {userProfile("zipcode", user?.address.zipcode)}
          </div>
        </div>
        <div className="map-container"></div>
      </div>
    </div>
  );
};
