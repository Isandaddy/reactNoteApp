import React from "react";
import "./Note.css";

class Note extends React.Component {
  render() {
    // 활성화된 id 값의 객체가 들어오고
    const { note } = this.props;
    //들어온 객체 배열요소
    const { title, contents } = note;
    return (
      <div className="note">
        <input className="title" value={title} />
        <textarea className="note-content" value={contents} />
      </div>
    );
  }
}

export default Note;
