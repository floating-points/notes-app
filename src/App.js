import React, {Component} from 'react';
import Note from './components/Note';

class App extends Component{
  state={
    note : []
  }

  addNote=()=>{
    this.setState(
      ({note})=>({
      note : [note, {<Note />, id=this.id++}]
    })
  );
}

render(){
  return (
    <button onClick={this.addNote}>add note</button>
    {note}
  );
}


}

export default App;
