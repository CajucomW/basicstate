import React, {Component} from 'react';
import './App.css';
import Section from './components/Section/Section.js';

class App extends Component {
    render() {
    console.log("----rendering page----");
        return (
            <div className="App">
                
                <h1 className="App-title">
                    React Components
                </h1>
                
                <div className="App-library">
                
                    <Section title="Title Goes Here using props.title" />
                    
                    <Section title="Children">
                        <p>
                            while this part was accessible through
                            this.props.children, which comes from App.js
                        </p>
                    </Section>
                </div>
             </div>
        );
    }
}
    

export default App;
