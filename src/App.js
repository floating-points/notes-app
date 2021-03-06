import Note from "./components/Note.jsx";
import { useEffect, useState } from "react";

function App() {
  const [noteList, setNote] = useState([]);
  const [id, setId] = useState(1);
  const [noteData, setNoteData] = useState([]);
  const [inputId, setInputId] = useState(0);
  const [inputText, setInputText] = useState(0);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("noteData"));
    if(data)
    {
      //localStorage.setItem("noteData", JSON.stringify(data));
    }
  },[]);

  useEffect(() => {
    localStorage.setItem("noteData", JSON.stringify(noteData));
  });

  const addNote = () => {
    setNote(() => [...noteList, id]);
    setId(() => id + 1);
  };

  const removeNote = (id) =>{
    setNote((noteList) => noteList.filter((note) => note !== id));
  };
  const storeNote = (id, text) =>{
    setNoteData(() => ([...noteData, {id : id, text : text}]));
  };
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
