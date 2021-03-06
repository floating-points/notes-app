import React from "react";
import "./Note.css";
import { useState } from "react";
const Note = ({id, removeNote, storeNote}) => {
  const noteRef = React.createRef();
  const [edit, setEdit] = useState(true);
  const onRemove = (e) =>{
    removeNote(id);

  };

  const inputText = () =>{
    setEdit(!edit);
  }
  const onStore = (text) =>{
    storeNote(id,noteRef.current.value);
    setEdit(!edit);
  }

  return (
    <div>
    <textarea ref={noteRef} disabled={edit}></textarea>
    <button onClick={onRemove}>삭제</button>
    {edit ?
    (
        <button onClick={inputText}>수정</button>
    )
    :
    (
        <button onClick={onStore}>저장</button>
    )
}
    </div>
  );
};

export default Note;
