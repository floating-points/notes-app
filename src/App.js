import logo from './logo.svg';
import './App.css';
import NoteList from './components/Note/index.js'
import React from 'react'

class App extends React.Component {
    state={
        information:[]
    }

    makeNote=(text)=>{
        const {information}=this.state;
        this.setState({
            information: information.concat({text})
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.makeNote}>노트 추가</button>
                <NoteList data={this.state.information}/>
            </div>
        );
    }
}

export default App;
