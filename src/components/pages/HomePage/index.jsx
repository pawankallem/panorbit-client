import "./style.css";
export const HomePage = () => {
  const tabNames = ["Profile", "Posts", "Gallery", "ToDo"];

  const tab = (name, index, isLastIndex) => {
    return (
      <div className="tab" key={index}>
        <div className="name-and-line">
          <div className="name">{name}</div>
          {!isLastIndex && <hr />}
        </div>
        <div className="selected-tab-icon">{">"}</div>
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
      <div className="details-container"></div>
      <div className="chat-container"></div>
    </div>
  );
};
