import React, { Component } from 'react';
import {Link} from 'react-router-dom';


import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ],
        courseSelected: 0
    }

    selectCourse = () => {
        console.log ("select Course");
        this.setState({courseSelected: this.props.id});
    }

    render () {
        let courseList = null;
        
        if (this.state.courseSelected > 0) {
            const course = this.state.courses[this.state.courseSelected];
            // Need to pass course info 
            courseList = <Link to= "/course/${this.state.courseSelected}" />
        } else                   
            courseList =    <section className="Courses">
                                {
                                    this.state.courses.map( course => {
                                        return <article 
                                                    className="Course" 
                                                    key={course.id}>
                                                    {course.title}
                                                    <footer>
                                                        <p>Course Id: {course.id}</p>
                                                    </footer>
                                                    </article>;
                                    } )
                                }
                            </section>;

        return ( <div> <h1>Amazing Udemy Courses</h1>
                        {courseList} 
                </div>  );
    }
}

export default Courses;