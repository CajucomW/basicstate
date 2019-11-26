import React, {Component} from 'react';
import './Section.css';

class Section extends Component {
    render() {
    console.log("----rendering page----");
        return (
            <div className="Section">
                <h1 className="Section-title">
                    {this.props.title}
                </h1>
            </div>
        );
    }
}
    

export default Section;
