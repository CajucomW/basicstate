import React, {Component} from 'react';
import './App.css';
import Section from './components/Section/Section.js';

class App extends Component {
    render() {
    console.log("----rendering page----");
        return (
            <div className="App">
                <h1 className="App-title">
                    State & Components
                </h1>
                
                <div className="App-library">
                    <Section title="Title Goes Here" />
                </div>
            </div>
        );
    }
}
    

export default App;
