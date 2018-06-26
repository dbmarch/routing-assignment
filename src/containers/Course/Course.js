import React, { Component } from 'react';

class Course extends Component {
    state = {
        title: null
    }

    componentDidUpdate() {
        this.parseQueryParams();
    }

    componentDidMount() {
        this.parseQueryParams();
    }

    parseQueryParams() {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            if (this.state.title !== param[1]) {
                this.setState({title: param[1]});
            }  
        }  
    }

    render () {
        //console.log (this.props);
        console.log (this.state);
        console.log (this.props);
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;