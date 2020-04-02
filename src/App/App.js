import React from "react";
import "./App.css";
import Header from "../Header/Header";
import List from "../List/List";
import Note from "../Note/Note";

class App extends React.Component {
  state = {
    //note정보를 담을 배열준비
    notes: [],
    //리스트에서 유저가 선택하여 활성화된 노트의 id가 들어간다.
    activeId: null
  };
  //이벤트 핸들러 메소드
  handleListItemClick = id => {
    this.setState({ activeId: id });
  };

  render() {
    const { notes, activeId } = this.state;
    // 현재 활성화 된 객채를 찾아서 activeNote 변수에 할당한다.
    const activeNote = notes.filter(item => item.id === activeId)[0];
    return (
      <div className="app">
        <Header />
        <div className="container">
          {/** 부모 컴포넌트에서 notes activeId, props를 건낸다
          이제 <List />는 notes와 activeId라는 props에 접근하여 데이터를 참조할 수 있습니다.
          */}
          <List
            notes={notes}
            activeId={activeId}
            //이벤트 핸들러 전달
            onListItemClick={this.handleListItemClick}
          />
          {/** activeNote가 존재할때 <Note/>를 랜더링
            <Note/>속성에 activeNote전달
          */}
          {notes.length !== 0 && <Note note={activeNote} />}
        </div>
      </div>
    );
  }
}

export default App;
