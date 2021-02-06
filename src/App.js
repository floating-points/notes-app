import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                </ul>
            </div>
        );
    }
}

export default App;
