import React, { Component } from 'react';
import './Note.css'

class Note extends Component {
  static defaultProps = {
    info: {},
    onRemove: () => console.log('onRemove not defined'),
    onChange: () => console.log('onChange not defined'),
  }

  state = {
    body: this.props.info.body
  }

  handleUpdate = (newEdit, text) => {
    const { info, onChange } = this.props;
    this.setState(
      (state) => ({
        body: text
      })
    );
    onChange(info.id, newEdit, text);
  }

  handleRemove = () => {
    const { info, onRemove } = this.props;
    onRemove(info.id);
  }

  handleCancel = () => {
    const { info, onChange } = this.props;
    onChange(info.id, false, this.state.body);
  }

  handleUpdateTextarea = (text) => {
    const { info, onChange } = this.props;
    onChange(info.id, true, text);
  }

  render() {
    const { info } = this.props;
    const idSelector = '#note' + info.id;

    if (info.edit) {
      return (
        <div>
          <textarea
            className="Note"
            id={'note' + info.id}
            value={info.body}
            onChange={e => this.handleUpdateTextarea(e.currentTarget.value)}
          ></textarea>

          <button
            className="update"
            onClick={e => this.handleUpdate(!info.edit, document.querySelector(idSelector).value)}
          >
            완료
          </button>
          <button
            className="cancel"
            onClick={this.handleCancel}
          >
            취소
          </button>
        </div>
      )
    }

    return (
      <div>
        <textarea
          className="Note"
          id={'note' + info.id}
          value={info.body}
        ></textarea>

        <button
          className="update"
          onClick={e => this.handleUpdate(!info.edit, document.querySelector(idSelector).value)}
        >
          수정
        </button>
        <button
          className="delete"
          onClick={this.handleRemove}
        >
          삭제
        </button>
      </div>
    )
  }
}

export default Note;
