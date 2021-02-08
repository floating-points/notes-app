import {useState} from 'react'
import Note from './components/Note/Note.jsx'

function App() {
  const [textAreas, setTextAreas] = useState([])
  return (
    <div className="App">
      <button onClick={() => {
        setTextAreas([...textAreas, <Note/>]);
      }}>
        추가
      </button>
      {textAreas}
    </div>
  );
}

export default App;
