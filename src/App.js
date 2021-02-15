import React from 'react'
import './App.css';
import NoteList from './components/Note/index.js'

class App extends React.Component {
    id=1;
    defaultInfo="내용을 입력하세요";
    state={
        information:[
            {
                id:0,
                info:this.defaultInfo
            }
        ]
    }

    noteCreate=()=>{
        const {information}=this.state;
        this.setState((prevState)=>{
            return {information:prevState.information.concat({id:this.id++, info:this.defaultInfo})};
            }
        )
        console.log(this.id)
    }

    noteRemove=(id)=>{
        const {information}=this.state;
        this.setState((prevState)=> {
                return {information: prevState.information.filter(note => note.id !== id)};
            }
        )
    }



    render() {
        const {information}=this.state;

        return (
            <div>
                <button onClick={this.noteCreate}>노트 추가</button>
                <NoteList data={information}/>
            </div>
        );
    }
}

export default App;
