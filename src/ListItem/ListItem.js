import React from "react";
import "./ListItem.css";

class ListItem extends React.Component {
  render() {
    return (
      <div className="list-item">
        <div className="title">title</div>
        <div className="content">content</div>
      </div>
    );
  }
}

export default ListItem;
