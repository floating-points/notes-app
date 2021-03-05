import React, { Component } from 'react';
import NoteList from './components/NoteList';
import './App.css'

class App extends Component {
  state = {
    id: 0,
    notes: []
  }

  componentDidMount() {
    const storageId = Number(localStorage.getItem('id')) || 0;
    const storageNotes = JSON.parse(localStorage.getItem('notes')) || [];
    this.setState(
      (state) => ({
        id: storageId,
        notes: storageNotes
      })
    );
  }

  addNote = () => {
    const nowId = this.state.id;
    this.setState(
      (state) => ({
        id: state.id + 1
      })
    );
    this.setState(
      (state) => ({
        notes: [...state.notes, { id: nowId, edit: true, body: '' }]
      }),
      () => {
        const { id, notes } = this.state;
        localStorage.setItem('id', id);
        localStorage.setItem('notes', JSON.stringify(notes));
      }
    );
  }

  removeNote = (id) => {
    this.setState(
      (state) => ({
        notes: state.notes.filter(note => note.id !== id)
      }),
      () => {
        const { notes } = this.state;
        localStorage.setItem('notes', JSON.stringify(notes));
      }
    );
  }

  updateNote = (newId, newEdit, newBody) => {
    this.setState(
      (state) => ({
        notes: state.notes.map(
          info => info.id === newId
            ? { id: newId, edit: newEdit, body: newBody }
            : { ...info }
        )
      }),
      () => {
        const { id, notes } = this.state;
        localStorage.setItem('id', id);
        localStorage.setItem('notes', JSON.stringify(notes));
      }
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
          onRemove={this.removeNote}
          onChange={this.updateNote} />
      </div>
    );
  }
}

export default App;
