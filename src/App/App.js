import React from "react";
import "./App.css";
import Header from "../Header/Header";
import List from "../List/List";
import Note from "../Note/Note";
import { generateId } from "../utils";

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

  //편집이벤트 핸들러
  handleEditNote = (type, e) => {
    console.log(type);
    console.log(e);
    //새 notes어레이 생성
    //...전개연산자 좌항에 명시적으로 할당되지 않은 나머지 배열값 할당
    const notes = [...this.state.notes];

    //notes에서 현재 activeId와 일치하는 노트객체 찾기
    const note = notes.find(item => item.id === this.state.activeId);

    //객체의 속성에 값할당 note.title note.contents
    note[type] = e.target.value;

    //notes에 새 배열을 할당하여 state변경
    this.setState({
      notes
    });
  };

  handleAddNote = () => {
    //랜덤ID생성
    const id = generateId();
    this.setState({
      notes: [
        ...this.state.notes,
        {
          id,
          title: "title",
          contents: "contents"
        }
      ],
      activeId: id
    });
  };

  render() {
    const { notes, activeId } = this.state;
    // 현재 활성화 된 객채를 찾아서 activeNote 변수에 할당한다.
    const activeNote = notes.filter(item => item.id === activeId)[0];
    return (
      <div className="app">
        <Header onAddNote={this.handleAddNote} />
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
          {notes.length !== 0 && (
            <Note note={activeNote} onEditNote={this.handleEditNote} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
