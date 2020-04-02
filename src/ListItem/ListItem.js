import React from "react";
import "./ListItem.css";

class ListItem extends React.Component {
  render() {
    const { id, active, title, contents } = this.props;
    return (
      <div className={active ? "list-item-active" : "list-active"}>
        <div className="title">{title ? title : "title"}</div>
        <div className="content">{contents ? contents : "contents"}</div>
      </div>
    );
  }
}

export default ListItem;
