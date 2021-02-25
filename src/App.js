import React from 'react'
import './App.css'
import NoteList from './components/Note/index.js'

class App extends React.Component {
    constructor (props) {
        super(props);
        this.id=1;
        this.defaultText=" 번째 메모";
        this.state={
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
        console.log(this.id)
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



    render() {
        const {information}=this.state;

        return (
            <div className="notes-app">
                <div className="buttons">
                    <div className="create-button" onClick={this.noteCreate}>메모 추가</div>
                    <div className="checked-remove-button" onClick={this.checkedNoteRemove}>일괄 삭제</div>
                </div>
                <NoteList data={information} noteRemove={this.noteRemove}/>
            </div>
        );
    }
}

export default App;
