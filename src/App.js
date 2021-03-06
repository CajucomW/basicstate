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
                
                    <Section title="Title (hard-coded from App.js) is only visible
                    when using 'this.props.title' in Section.js" />
                    
                    <Section>
                        <p>
                            ... while this content, which is written in App.js, is 
                            only visible when using <strong>this.props.children
                            </strong> in Section.js
                        </p>
                    </Section>
                    
                    <Section />
                    
                    <h2>
                        All the contents above are only available in App.js
                        when using child component of 'Section' in Component
                        directory.
                    </h2>
                    <p>
                        "Parents give children PROPS"
                    </p>
                    
                </div>
             </div>
        );
    }
}
    
export default App;
