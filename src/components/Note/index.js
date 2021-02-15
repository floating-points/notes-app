import React from 'react'
import './Note.css'

class Note extends React.Component{

    handleRemove=()=>{
        const {noteInfo, noteRemove}=this.props;
        noteRemove(noteInfo.id);
    }

    render(){
        const {noteInfo}=this.props;
        return (
            <div className="note-item">
                <textarea className="note-text" defaultValue={noteInfo.text}/>
                <div className="remove-button" onClick={this.handleRemove}>삭제</div>
            </div>
        )

    }
}

class NoteList extends React.Component{

    render(){
        const {data, noteRemove}=this.props;
        const list=data.map(
            info=>(<Note
                noteInfo={info}
                noteRemove={noteRemove}
                key={info.id}
                />)
        )

        return <div>{list}</div>
    }
}

export default NoteList;