import React from "react";
import "./Note.css";
const Note = (props) => {
  //console.log(props.id);
  return (
    <div>
    <textarea>내용을 입력해주세요</textarea>;
    <button onClick={props.onRemove}>삭제</button>
    </div>
  );
};

export default Note;
