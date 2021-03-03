import {useState} from 'react'
import './Note.css'

function Note(props) {
    const [open, setOpen] = useState(true)
    return open && (
        <div>
            <textarea style={{display: "block"}}>
                {props.text}
            </textarea>
            <button onClick={()=>setOpen(false)}>
                노트 삭제
            </button>
        </div>
    )
}

export default Note;
