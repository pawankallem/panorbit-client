import { useEffect, useState } from "react";
import "./style.css";
import { TabHeader } from "../../utills/TabHeader";
import { ComingSoom } from "../../utills/ComingSoon";
import { setUsers } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
export const HomePage = () => {
  const tabNames = ["Profile", "Posts", "Gallery", "ToDo"];
  const [selectedTab, setSelectedTab] = useState("Profile");
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  const fetchAccount = async () => {
    try {
      console.log("users< ", users.length);
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

  const tab = (name, index, isLastIndex) => {
    return (
      <div className="tab" key={index} onClick={() => setSelectedTab(name)}>
        <div className="name-and-line">
          <div className="name">{name}</div>
          {!isLastIndex && <hr />}
        </div>
        {selectedTab === name && <div className="selected-tab-icon">{">"}</div>}
      </div>
    );
  };

  return (
    <div className="home-page-container">
      <div className="tabs-container">
        <div className="tabs">
          {tabNames.map((tabName, index) =>
            tab(tabName, index, index === tabNames.length - 1)
          )}
        </div>
      </div>
      <div className="details-container">
        <div className="details-header">
          <TabHeader tabName={selectedTab} />
        </div>
        <div className="user-details">
          {selectedTab !== "Profile" ? <ComingSoom /> : <></>}
        </div>
      </div>
      <div className="chat-container"></div>
    </div>
  );
};
