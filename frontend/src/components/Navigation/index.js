import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { logout } from '../../store/session.js';

const Navigation = () => {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => {
        return state.sessionsReducer.user});
    const handleLogout = (e) => {
        e.preventDefault();
        e.stopPropagation();

        dispatch(logout());
    }
    let sessionLinks;

    if(sessionUser) sessionLinks = (
    <><button onClick={handleLogout}>Log out</button>
    {/* <ProfileButton user={sessionUser} /></>) */}
    </>)
    
    else
    sessionLinks = (
        <>
            <NavLink to={"/login"}>Log In</NavLink>
            <NavLink to={"/signup"}> Sign Up</NavLink>
        </>
    )

    return(
        <ul>
            <li className="thebar">
                <NavLink exact to="/">Home</NavLink>
                {sessionLinks}
            </li>
        </ul>
    )
}

export default Navigation;