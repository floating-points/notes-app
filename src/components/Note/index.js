import React from 'react'
import './Note.css'

class Note extends React.Component{
    render(){
        const {info, noteRemove}=this.props;
        return (
            <div className="note-item">
                <textarea className="note-text">{info}</textarea>
                <div className="remove-button" onClick={noteRemove}>삭제</div>
            </div>
        )

    }
}

class NoteList extends React.Component{
    static defaultProps={
        data:[]
    }

    render(){
        const {data}=this.props;
        const list=data.map(
            info=>(<Note info="내용을 입력하세요" />)
        )

        return <div>{list}</div>
    }
}

export default NoteList;