import {useState} from 'react'
import './Note.css'

function Note() {
    const [open, setOpen] = useState(true)
    return open && (
        <div>
            <textarea style={{display: "block"}}>
                노트를 입력
            </textarea>
            <button onClick={()=>setOpen(false)}>
                노트 삭제
            </button>
        </div>
    )
}

export default Note;
