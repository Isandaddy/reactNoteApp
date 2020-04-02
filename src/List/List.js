import React from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";

class List extends React.Component {
  render() {
    return (
      <div className="list">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    );
  }
}

export default List;
