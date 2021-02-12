import Note from "./components/Note.jsx";
import { useState } from "react";

function App() {
  const [noteList, setNote] = useState([]);
  const [id, setId] = useState(1);
  const onRemove = (id) => {
    setNote(noteList.filter((note) => note.id !== id));
  };
  const addNote = () => {
    setNote(() =>
      noteList.concat({ note: <Note onRemove={onRemove} />, id: { id } })
    );
    setId(() => id + 1);
  };

  return (
    <div>
      <button onClick={addNote}>Add Note</button>
      {noteList.map((note) => note.note)}
    </div>
  );
}

export default App;
