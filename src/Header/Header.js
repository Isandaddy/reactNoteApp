import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    const { onAddNote } = this.props;
    return (
      <div className="header">
        <div className="title">
          <span>react remind</span>
        </div>
        <div className="buttons">
          <button onClick={onAddNote}>add</button>
          <button>delete</button>
        </div>
      </div>
    );
  }
}

export default Header;
