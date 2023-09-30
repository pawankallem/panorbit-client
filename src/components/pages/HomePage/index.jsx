import { useState } from "react";
import "./style.css";
import { TabHeader } from "../../utills/TabHeader";
import { Profile } from "../../tabs/Profile";
import { Posts } from "../../tabs/Posts";
import { Gallery } from "../../tabs/Gallery";
import { ToDo } from "../../tabs/ToDo";
export const HomePage = () => {
  const tabNames = ["Profile", "Posts", "Gallery", "ToDo"];
  const [selectedTab, setSelectedTab] = useState("Profile");

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
          {selectedTab === "Profile" && <Profile />}
          {selectedTab === "Posts" && <Posts />}
          {selectedTab === "Gallery" && <Gallery />}
          {selectedTab === "ToDo" && <ToDo />}
        </div>
      </div>
      <div className="chat-container"></div>
    </div>
  );
};
