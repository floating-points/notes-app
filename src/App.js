import React, { Component } from 'react';
import Note from './components/Note';

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
        <button
          onClick={this.addNote}>
          노트 추가
        </button>

        {note}
      </div>
    );
  }
}

export default App;
