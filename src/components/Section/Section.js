import React, {Component} from 'react';
import './Section.css';

class Section extends Component {
    render() {
    console.log("----rendering page----");
        return (
            <div className="Section">
                <p className="Section-title">
                    {
                        this.props.title ? (
                            <p>
                                {this.props.title}
                                <br />
                                <br />
                                while this part was written in Section.js
                            </p>
                            ):(
                                <p>
                                    used ternary operator, or "IF" statement
                                    to show this when there isn't a <strong>
                                    title</strong> prop in the component.
                                </p>
                            )
                        }
                    
                </p>
                
                <p className="Section-title">
                    This part was accessible through the Section.js...
                    {this.props.children}
                </p>
                
                <p className="Section-title">
                    Note that all CSS styling were from Section.css
                </p>
            </div>
        );
    }
}
    

export default Section;
