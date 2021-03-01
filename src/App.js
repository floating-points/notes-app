import React from 'react'
import './App.css'
import NoteList from './components/Note/index.js'

class NoteTextArea extends React.Component{

    render () {
        const {textEditing, focusedText, focusedTextChange}=this.props;
        if(textEditing===true) {
            return (
                <textarea className="note-text-area" value={focusedText} onChange={focusedTextChange}/>
            );
        }
        else{
            return(
                <div className="note-text-area">{focusedText}</div>
            )
        }
    }
}

class NoteButtons extends React.Component{
    render(){
        const {textEditing, focusedTextEditStart, focusedTextEditEnd}=this.props;
        if(textEditing){ //수정 중
            return(
                <div className="note-buttons">
                    <div className="note-edit-button" onClick={focusedTextEditEnd}>메모 저장</div>
                    <div className="note-remove-button">메모 삭제</div>
                </div>
            )
        }
        else{
            return(
                <div className="note-buttons">
                    <div className="note-edit-button" onClick={focusedTextEditStart}>메모 수정</div>
                    <div className="note-remove-button">메모 삭제</div>
                </div>
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
            focusedText:'',
            textEditing:false, //메모를 수정 중인가?
            focusedId:null, //현재 보고 있는 노트의 id
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
        this.setState(
            (prevState)=> {
                return {information: prevState.information.filter(note => note.id !== id)};
            }
        )
    }

    checkedNoteRemove=()=>{ //체크된 노트 일괄 삭제
        this.setState(
            (prevState)=>{
                return {information:prevState.information.filter(note=>note.checked===false)};
            }
        )
    }

    focusedNoteToText=(id)=>{ //누른 노트의 텍스트 끌어오기
        this.setState(
            (prevState)=>{
                //console.log(prevState.information.find(note=>note.id===id).text);
                return {
                    focusedText:prevState.information.find(note=>note.id===id).text,
                    focusedId:id
                };
            }
        )

    }

    focusedTextChange=(e)=>{
        this.setState(()=>{
                return {focusedText:e.target.value};
            }
        )
        //console.log(this.state.focusedText);
    }

    focusedTextEditStart=()=>{ //수정 시작
        this.setState(
            (prevState)=>{
                return {
                    textEditing:true,
                    focusedText:prevState.focusedText
                };
            }
        )

    }

    focusedTextEditEnd=()=>{
        this.setState(
            (prevState)=>{
                return{
                    textEditing:false,
                    information:prevState.information.map(note=>note.id===prevState.focusedId?({...note, text:prevState.focusedText}):note)
                }
            }
        )
    }




    render() {
        const {focusedText, textEditing, information}=this.state;

        return (
            <div className="notes-app">
                <div className="note-list-buttons">
                    <div className="create-button" onClick={this.noteCreate}>메모 추가</div>
                    <div className="checked-remove-button" onClick={this.checkedNoteRemove}>일괄 삭제</div>
                </div>
                <div className="note-contents">
                    <NoteList data={information} noteRemove={this.noteRemove} focusedNoteToText={this.focusedNoteToText}/>
                    <div className="note-edit-area">
                        <NoteButtons textEditing={textEditing} focusedTextEditStart={this.focusedTextEditStart} focusedTextEditEnd={this.focusedTextEditEnd}/>
                        <NoteTextArea textEditing={textEditing} focusedText={focusedText} focusedTextChange={this.focusedTextChange}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
