import {useState} from 'react'
import Note from './components/Note'

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
