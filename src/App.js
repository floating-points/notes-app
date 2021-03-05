import Note from "./components/Note.jsx";
import { useState } from "react";

function App() {
  const [noteList, setNote] = useState([]);
  const [id, setId] = useState(1);

  const addNote = () => {
    setNote(() => [...noteList, id]);
    setId(() => id + 1);
  };
  function removeNote(id){
    setNote((noteList) => noteList.filter((note) => note !== id));
  }
  return (
    <div>
      <button onClick={addNote}>Add Note</button>
      {noteList.map((id)  =>(
      <Note key={id} id={id} removeNote={removeNote} />
      ))}
    </div>
  );
}

export default App;
