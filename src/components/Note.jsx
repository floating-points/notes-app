import React, { Component } from 'react';
import './Note.css'

class Note extends Component {
  static defaultProps = {
    info: [],
    onRemove: () => console.log('onRemove not defined')
  }

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }
  render() {
    const style = {
      background: 'red',
      border: 'none',
      color: 'white',
      padding: '7px 20px 7px 20px',
    };

    return (
      <div>
        <textarea className="Note"></textarea>
        <button
          style={style}
          onClick={this.handleRemove}
        >
          삭제
        </button>
      </div>
    )
  }
}

export default Note;
