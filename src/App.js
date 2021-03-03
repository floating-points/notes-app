import {useState} from 'react'
import Note from './components/Note.jsx'

function App() {
  const [textAreas, setTextAreas] = useState([])
  var addNote= () => {
    setTextAreas([ ...textAreas, "노트 입력"]);
  }
  return (
    <div className="App">
      <button onClick={addNote}>
        노트 추가
      </button>
      {textAreas.map( (text, index) => (
         <Note text={text}></Note>
      ))}
    </div>
  );
}

export default App;
