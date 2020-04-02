import React from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";

class List extends React.Component {
  render() {
    //부모컴포넌트 App으로부터 전달 받은 데이터
    const {
      notes,
      activeId,
      //전달받은 이벤트 핸들러
      onListItemClick
    } = this.props;
    return (
      <div className="list">
        {notes.map(item => {
          const { id, title, contents } = item;
          return (
            <ListItem
              key={id}
              id={id}
              active={id === activeId}
              title={title}
              contents={contents}
              //이벤트 핸들러 전달
              onClick={() => onListItemClick(id)}
            />
          );
        })}
      </div>
    );
  }
}

export default List;
