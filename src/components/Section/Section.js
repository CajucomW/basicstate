import React, {Component} from 'react';
import './Section.css';

class Section extends Component {
    render() {
    console.log("----rendering page----");
        return (
            <div className="Section">
                <p className="Section-title">
                    {this.props.title} 
                    <br />
                    <br />
                    This part was accessible through the component file...
                    {this.props.children}
                </p>
            </div>
        );
    }
}
    

export default Section;
