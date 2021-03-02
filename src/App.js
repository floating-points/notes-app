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

class NoteListButtons extends React.Component{
    render(){
        const {noteCreate, checkedNoteRemove}=this.props;
        return(
            <div className="note-list-buttons">
                <div className="create-button" onClick={noteCreate}>메모 추가</div>
                <div className="checked-remove-button" onClick={checkedNoteRemove}>일괄 삭제</div>
            </div>
        )
    }
}

class NoteButtons extends React.Component{
    render(){
        const {textEditing, focusedNoteRemove, focusedTextEditStart, focusedTextEditEnd}=this.props;
        if(textEditing){ //수정 중
            return(
                <div className="note-buttons">
                    <div className="note-edit-button" onClick={focusedTextEditEnd}>메모 저장</div>
                    <div className="note-remove-button" onClick={focusedNoteRemove}>메모 삭제</div>
                </div>
            )
        }
        else{
            return(
                <div className="note-buttons">
                    <div className="note-edit-button" onClick={focusedTextEditStart}>메모 수정</div>
                    <div className="note-remove-button" onClick={focusedNoteRemove}>메모 삭제</div>
                </div>
            )
        }
    }
}

class App extends React.Component {
    constructor (props) {
        super(props);
        this.id=JSON.parse(window.sessionStorage.getItem("id")) || 1;
        this.defaultText=JSON.parse(window.sessionStorage.getItem("defaultText")) || " 번째 메모";
        this.state={
            focusedText:JSON.parse(window.sessionStorage.getItem("focusedText")) || "",
            textEditing:JSON.parse(window.sessionStorage.getItem("textEditing")) || false, //메모를 수정 중인가?
            focusedId:JSON.parse(window.sessionStorage.getItem("focusedId")) || null, //현재 보고 있는 노트의 id
            information:JSON.parse(window.sessionStorage.getItem("information")) ||
            [
                {
                    id:0, //첫 메모는 id 0
                    text:this.id+this.defaultText,
                    checked:false
                }
            ]
        }
    }

    componentDidMount () {
        window.sessionStorage.setItem("id", JSON.stringify(this.id));
        window.sessionStorage.setItem("defaultText", JSON.stringify(this.defaultText));
        window.sessionStorage.setItem("focusedText", JSON.stringify(this.state.focusedText));
        window.sessionStorage.setItem("textEditing", JSON.stringify(this.state.textEditing));
        window.sessionStorage.setItem("focusedId", JSON.stringify(this.state.focusedId));
        window.sessionStorage.setItem("information", JSON.stringify(this.state.information));
    }

    componentDidUpdate () { //새로고침 시에는 id와 information만 저장되어 있으면 된다. 수정중인지 여부 등은 필요없음
        window.sessionStorage.setItem("id", JSON.stringify(this.id)); //다음 업데이트를 위해서 id는 저장한다
        window.sessionStorage.setItem("information", JSON.stringify(this.state.information));
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

    focusedNoteRemove=()=>{
        this.setState(
            (prevState)=>{
                return {information: prevState.information.filter(note => note.id !== prevState.focusedId)};
            }
        )
    }

    focusedNoteToText=(id)=>{ //누른 노트의 텍스트 끌어오기
        this.setState(
            (prevState)=>{
                if(prevState.textEditing){ //편집중에 노트 이동
                    var moveConfirm=window.confirm('노트를 편집 중입니다. 편집 중인 내용을 저장하고 다른 노트로 이동하시겠습니까?');
                    if(moveConfirm){ //다른 노트로 이동
                        return {
                            information:prevState.information.map(note=>note.id===prevState.focusedId?({...note, text:prevState.focusedText}):note),
                            //기존에 보고 있던 노트 저장
                            focusedText: prevState.information.find(note=>note.id===id).text,
                            focusedId:id,
                            textEditing:false
                        }
                    }
                    else{
                        //만약 원래 노트에 남아 있을 경우
                    }
                }

                else {
                    return {
                        focusedText: prevState.information.find(note => note.id === id).text,
                        focusedId: id
                    };
                }
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
                <NoteListButtons
                    noteCreate={this.noteCreate}
                    checkedNoteRemove={this.checkedNoteRemove}
                />
                <div className="note-contents">
                    <NoteList
                        data={information}
                        noteRemove={this.noteRemove}
                        focusedNoteToText={this.focusedNoteToText}
                    />
                    <div className="note-edit-area">
                        <NoteButtons
                            textEditing={textEditing}
                            focusedNoteRemove={this.focusedNoteRemove}
                            focusedTextEditStart={this.focusedTextEditStart}
                            focusedTextEditEnd={this.focusedTextEditEnd}
                        />
                        <NoteTextArea
                            textEditing={textEditing}
                            focusedText={focusedText}
                            focusedTextChange={this.focusedTextChange}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
