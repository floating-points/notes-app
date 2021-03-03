import {useState} from 'react'
import './Note.css'

function Note(props) {
    const [open, setOpen] = useState(true)
    var textChanged = (ev) =>
    {
        var newNoteData = props.noteData;
        props.noteData.find(data => data.key ===props.keytext ).text = ev.target.value;
        props.setNoteData(newNoteData);
        localStorage.setItem('notes', JSON.stringify(newNoteData));
    };
    var deleteNoteClicked = () =>
    {
        setOpen(false);
        var newNoteData = props.noteData.filter( data => data.key!==props.keytext);
        console.log(newNoteData);
        props.setNoteData(newNoteData);
        localStorage.setItem('notes', JSON.stringify(newNoteData));
    };
    return open && (
        <div>
            <textarea style={{display: "block"}} defaultValue = {props.text} onChange = {textChanged}>
            </textarea>
            <button onClick={deleteNoteClicked}>
                노트 삭제
            </button>
        </div>
    )
}

export default Note;
