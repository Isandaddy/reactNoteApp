import React from "react";
import "./List.css";
import ListItem from "../ListItem/ListItem";

class List extends React.Component {
  render() {
    //부모컴포넌트 App으로부터 전달 받은 데이터
    const { notes, activeId } = this.props;
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
            />
          );
        })}
      </div>
    );
  }
}

export default List;
