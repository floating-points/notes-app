import {useState} from 'react'
import './Note.css'

function Note() {
    const [open, setOpen] = useState(true)
    return open && (
        <div>
            <textarea style={{display: "block"}}>
            아무거나 입력
            </textarea>
            <button onClick={()=>setOpen(false)}>
                삭제
            </button>
        </div>
    )
}

export default Note;
