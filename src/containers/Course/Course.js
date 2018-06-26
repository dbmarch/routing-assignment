import React, { Component } from 'react';

class Course extends Component {
    state = {
        title: null
    }
    render () {
        //console.log (this.props);
        console.log (this.state);
        console.log (this.props.location.state);
        console.log (this.props);
        return (
            <div>
                <h1>{this.props.location.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;