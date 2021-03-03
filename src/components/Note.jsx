import {useState} from 'react'
import './Note.css'

function Note(props) {
    const [open, setOpen] = useState(true)
    var textChanged = () =>
    {

    };
    var deleteNoteClicked = () =>
    {
        setOpen(false);
        var newNoteData = props.noteData.filter( data => data.key!=props.key);
        props.setNoteData(newNoteData);
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
