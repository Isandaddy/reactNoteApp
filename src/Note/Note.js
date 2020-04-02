import React from "react";
import "./Note.css";

class Note extends React.Component {
  render() {
    return (
      <div className="note">
        <input className="title" />
        <textarea className="note-content" />
      </div>
    );
  }
}

export default Note;
