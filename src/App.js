import {useState, useEffect} from 'react'
import Note from './components/Note.jsx'

function App() {
    const [noteData, setNoteData] = useState([])
    useEffect( () => {
        var noteDataJson = localStorage.getItem("notes")
        if(noteDataJson!==null) setNoteData(JSON.parse(noteDataJson))
    },[])

    var generateKeys = () =>
    {
        var arr = new Uint8Array(5)
        window.crypto.getRandomValues(arr)
        return Array.from(arr, (dec) => {return dec.toString(16).padStart(2,"0")}).join('')
    }
    
    var addNoteClicked= () => {
        var newNoteData = [ ...noteData, {text : "노트 입력", key: generateKeys()}]
        setNoteData(newNoteData)
        localStorage.setItem('notes', JSON.stringify(newNoteData))
    }
    
    return (
    <div className="App">
        <button onClick={addNoteClicked}>
            노트 추가
            </button>
            {noteData.map( (data, index) => (
            <Note text={data.text} keytext = {data.key} key={data.key} noteData = {noteData} setNoteData = {setNoteData}></Note>
            ))}
    </div>
  )
}

export default App