import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';
import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    };


    render () {
        let courseList =    
            <section className="Courses">
                {
                    this.state.courses.map( course => {
                        return <article 
                                    className="Course" 
                                    key={course.id}>
                                        <Link to = {{
                                            pathname: `${this.props.match.url}/${course.id}`,
                                            search: '?title='+ course.title }}>
                                        {course.title}
                                        </Link>
                                    <footer>
                                        <p>Course Id: {course.id}</p>
                                    </footer>
                                    </article>;
                    } )
                }
            </section> 

        return ( <div> <h1>Amazing Udemy Courses</h1>
                        {courseList} 
                        <Route path={this.props.match.url + '/:id'} component = {Course}/>;
                </div>  );
    }
}

export default Courses;