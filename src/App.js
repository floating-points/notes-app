import React, { Component } from 'react';
import NoteList from './components/NoteList';
import './App.css'

class App extends Component {
  id = 0
  state = {
    notes: []
  }

  addNote = () => {
    const nowId = this.id++;
    this.setState(
      (state) => ({
        notes: [...state.notes, { id: nowId }]
      })
    )
  }

  removeNote = (id) => {
    this.setState(
      (state) => ({
        notes: state.notes.filter(note => note.id !== id)
      })
    )
  }

  render() {
    const { notes } = this.state;

    return (
      <div>
        <button className="NewNote"
          onClick={this.addNote}>
          노트 추가
        </button>

        <NoteList
          data={notes}
          onRemove={this.removeNote} />
      </div>
    );
  }
}

export default App;
