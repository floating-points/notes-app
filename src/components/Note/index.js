import React from 'react'
import App from "../../App";

class Note extends React.Component{
    static defaultProps={
        info:"내용을 입력하세요"
    }
    render(){
        return (
            <div>
                <textarea>{this.props.info}</textarea>
            </div>
        )

    }
}

class NoteList extends React.Component{
    static defaultProps={
        data:[]
    }

    render(){
        const {data}=this.props;
        const list=data.map(
            info=>(<Note info={info} />)
        )

        return <div>{list}</div>
    }
}

export default NoteList;