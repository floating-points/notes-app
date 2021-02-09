import React, { Component } from 'react';
import Note from './components/Note';
import './App.css'

class App extends Component {
  state = {
    note: []
  }

  addNote = () => {
    this.setState(
      (state) => ({
        note: [...state.note, <Note />]
      })
    )
  }

  render() {
    const { note } = this.state;

    return (
      <div>
        <button className="NewNote"
          onClick={this.addNote}>
          노트 추가
        </button>

        {note}
      </div>
    );
  }
}

export default App;
