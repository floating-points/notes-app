import React, { Component } from 'react';
import './Note.css'

class Note extends Component {
  render() {
    return (
      <textarea className="Note">새 노트</textarea>
    )
  }
}

export default Note;
