import Note from "./components/Note.jsx";
import { useState } from "react";

function App() {
  const [noteList, setNote] = useState([]);
  const [id, setId] = useState(1);
  const [noteData, setNoteData] = useState([]);


  const addNote = () => {
    setNote(() => [...noteList, id]);
    setId(() => id + 1);
  };

  const removeNote = (id) =>{
    setNote((noteList) => noteList.filter((note) => note !== id));
  }


  const storeNote = (id, text) =>{
    setNoteData(() => ([...noteData, {id : id, text : text}]));
    localStorage.setItem("noteData", JSON.stringify(noteData));
  }

  return (
    <div>
      <button onClick={addNote}>Add Note</button>
      {noteList.map((id)  =>(
      <Note key={id} id={id} removeNote={removeNote} storeNote={storeNote}/>
      ))}
    </div>
  );
}

export default App;
