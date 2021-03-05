import React, { Component } from 'react';
import Note from './Note'

class NoteList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.log('onRemove not defined'),
    onChange: () => console.log('onChange not defined'),
  }

  render() {
    const { data, onRemove, onChange } = this.props;
    const list = data.map(
      info => (
        <Note
          key={info.id}
          info={info}
          onRemove={onRemove}
          onChange={onChange}
        />)
    );

    return (
      <div>
        {list}
      </div>
    )
  }
}

export default NoteList;
