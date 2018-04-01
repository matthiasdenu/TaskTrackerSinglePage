import React from 'react';
import {NavLink} from 'react-router-dom';
import {NavItem} from 'reactstrap';

export default function Nav(props) {
  return (
    <nav className='navbar navbar-dark bg-dark navbar-expand'>
      <ul className='navbar-nav mr-auto'>
        <NavItem>
          <NavLink to='/' exact={true} activeClassName='active' className='nav-link'>Tasks Feed</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/users' href='#' className='nav-link'>All Users</NavLink>
        </NavItem>
        <NavItem>
          <NavLink to='/new_task' href='#' className='nav-link'>New Task</NavLink>
        </NavItem>
      </ul>
      <span className='navbar-text'>
        user@host
      </span>
    </nav>
    );
  }
