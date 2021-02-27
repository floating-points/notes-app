import React from 'react'
import './App.css'
import NoteList from './components/Note/index.js'

class NoteTextArea extends React.Component{

    render () {
        const {textEditing, focusText, focusedTextChange}=this.props;
        if(textEditing===true) {
            return (
                <textarea className="note-text-area" value={focusText} onChange={focusedTextChange}/>
            );
        }
        else{
            return(
                <div className="note-text-area">{focusText}</div>
            )
        }
    }
}

class App extends React.Component {
    constructor (props) {
        super(props);
        this.id=1;
        this.defaultText=" 번째 메모";
        this.state={
            focusText:'',
            textEditing:false, //메모를 수정 중인가?
            information:[
                {
                    id:0, //첫 메모는 id 0
                    text:this.id+this.defaultText,
                    checked:false
                }
            ]
        }
    }


    noteCreate=()=>{
        this.setState((prevState)=>{
            return {information:prevState.information.concat({id:this.id++, text:this.id+this.defaultText, checked:false})};
            }
        )
        //console.log(this.id)
    }

    noteRemove=(id)=>{
        /*const {information}=this.state;*/
        this.setState((prevState)=> {
                return {information: prevState.information.filter(note => note.id !== id)};
            }
        )
    }

    checkedNoteRemove=()=>{
        this.setState((prevState)=>{
                return {information:prevState.information.filter(note=>note.checked===false)};
            }
        )
    }

    focusedNoteToText=(id)=>{
        this.setState((prevState)=>{
                return {focusText:prevState.information.find(note=>note.id===id).text};
            }
        )
    }

    focusedTextChange=(e)=>{
        this.setState(()=>{
                return {focusText:e.target.focusText};
            }
        )
    }

    focusedTextEditStart=()=>{
        this.setState((prevState)=>{
                return {textEditing:prevState.textEditing===false};
            }
        )
        //console.log(this.state.textEditing)
    }




    render() {
        const {focusText, textEditing, information}=this.state;

        return (
            <div className="notes-app">
                <div className="list-buttons">
                    <div className="create-button" onClick={this.noteCreate}>메모 추가</div>
                    <div className="checked-remove-button" onClick={this.checkedNoteRemove}>일괄 삭제</div>
                </div>
                <div className="note-contents">
                    <NoteList data={information} noteRemove={this.noteRemove} focusedNoteToText={this.focusedNoteToText}/>
                    <div className="note-edit-area">
                        <div className="note-buttons">
                            <div className="note-edit-button" onClick={this.focusedTextEditStart}>메모 수정</div>
                            <div className="note-remove-button">메모 삭제</div>
                        </div>
                        <NoteTextArea textEditing={textEditing} focusText={focusText} focusedTextChange={this.focusedTextChange}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
