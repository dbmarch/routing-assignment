import React from 'react';
import './Navigation.css';
import {NavLink} from 'react-router-dom';

const Navigation =  () => {
    // return (
    //     <nav>
    //         <ul>
    //             <li><a href="/courses">Courses </a> </li>
    //             <li><a href="/users">Users</a> </li>
    //         </ul>
    //     </nav>
    // )

    return (
        <nav>
            <ul style={{listStyle: 'none', margin: 'auto', padding: '0'}}>
               <li style = {{margin: '10px', display: 'inline-block'}} > 
                  <NavLink to="/courses">Courses</NavLink>
               </li>
               <li style = {{margin: '10px', display: 'inline-block'}} > 
                  <NavLink to="/users">Users</NavLink>
               </li>

            </ul>
        </nav>
    )
}
export default Navigation;
