import React, { Component } from 'react';
import Note from './Note'

class NoteList extends Component {
  static defaultProps = {
    data: [],
    onRemove: () => console.log('onRemove not defined')
  }

  render() {
    const { data, onRemove } = this.props;
    const list = data.map(
      info => (
        <Note
          key={info.id}
          info={info}
          onRemove={onRemove}
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
