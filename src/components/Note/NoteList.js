import React from 'react'
import './NoteList.css'

class NoteButton extends React.Component{

    handleRemove=()=>{
        const {noteInfo, noteRemove}=this.props;
        noteRemove(noteInfo.id);
    }

    handleCheck=()=>{
        const {noteInfo}=this.props;
        noteInfo.checked=noteInfo.checked===false;
        //console.log(noteInfo.checked);
    }

    handleFocus=()=>{
        const {noteInfo, focusedNoteToText}=this.props;
        focusedNoteToText(noteInfo.id);
    }

    render(){
        const {noteInfo}=this.props;
        return (
            <div className="note-item">
                <input type="checkbox" onChange={this.handleCheck}/>
                <div className="note-focus-button" onClick={this.handleFocus}>{noteInfo.text}</div>
                <div className="remove-button" onClick={this.handleRemove}>삭제</div>
            </div>
        )

    }
}

class NoteList extends React.Component{

    render(){
        const {data, noteRemove, focusedNoteToText}=this.props;
        const list=data.map(
            info=>(<NoteButton
                noteInfo={info}
                noteRemove={noteRemove}
                focusedNoteToText={focusedNoteToText}
                key={info.id}
                />)
        )

        return <div>{list}</div>
    }
}

export default NoteList;