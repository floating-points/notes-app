import logo from "./logo.svg";
import "./App.css";
import Note from "./components/Note/index";
import { useState } from "react";

function App() {
  const [note, setNote] = useState([]);

  const addNote = () => {
    setNote(note.concat(<Note />));
  };
  return (
    <div className="App">
      <button onClick={addNote}>note</button>
      {note}
    </div>
  );
}

export default App;
