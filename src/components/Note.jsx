import {useState} from 'react'
import './Note.css'

function Note(props) {
    const [open, setOpen] = useState(true)
    const [edit, setEdit] = useState(false)
    const [text, setText] = useState(props.text)
    var textChanged = (ev) =>
    {
        setText(ev.target.value)
    };

    var deleteNoteClicked = () =>
    {
        setOpen(false);
        var newNoteData = props.noteData.filter( data => data.key!==props.keytext);
        console.log(newNoteData);
        props.setNoteData(newNoteData);
        localStorage.setItem('notes', JSON.stringify(newNoteData));
    };
    var editNoteClicked = () =>
    {
        setEdit(true)
    }
    var editFinishClicked = () =>
    {
        setEdit(false)
        console.log(text);
        var newNoteData = props.noteData;
        props.noteData.find(data => data.key ===props.keytext ).text = text;
        props.setNoteData(newNoteData);
        localStorage.setItem('notes', JSON.stringify(newNoteData));
    }
    return open && (
        <div>
            {edit ?
            (
                <textarea style={{display: "block"}} defaultValue = {text} onChange = {textChanged}>
                </textarea>
            ):
            (
                <div onChange = {textChanged}>
                    {text}
                </div>
            )}
            {edit ?
            (
                <button onClick={editFinishClicked}>
                        수정 완료
                </button>
            ):
            (
                <button onClick={editNoteClicked}>
                    노트 수정
                </button>
            )}
            <button onClick={deleteNoteClicked}>
                노트 삭제
            </button>
        </div>
    )
}

export default Note;
