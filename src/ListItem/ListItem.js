import React from "react";
import "./ListItem.css";

class ListItem extends React.Component {
  render() {
    const { onClick, active, title, contents } = this.props;
    return (
      <div
        className={active ? "list-item-active" : "list-active"}
        onClick={onClick} //onClick이벤트 발생시 App에 선언한 함수가 동작한다.
      >
        <div className="title">{title ? title : "title"}</div>
        <div className="content">{contents ? contents : "contents"}</div>
      </div>
    );
  }
}

export default ListItem;
