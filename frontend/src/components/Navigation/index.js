import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProfileButton from './ProfileButton';
import './Navigation.css';
import { logout } from '../../store/session.js';
import DropdownMenu from './DropdownMenu';
import SearchBar from './SearchBar';

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

    <div className="login-links"><button onClick={handleLogout}>Log out</button>
    {/* <ProfileButton user={sessionUser} /></>) */}
    </div>)
    
    else
    sessionLinks = (
        <div className="login-links">
            <NavLink className="link1" to={"/login"}>Log In</NavLink>
            <NavLink className="link2" to={"/signup"}>Sign Up</NavLink>
        </div>
    )

    return(
        <div className="thebar">
            <div className="left-side">
            <DropdownMenu />
            <NavLink exact to="/">Home</NavLink>
            </div>
            <SearchBar />
            {sessionLinks}
        </div>
    )
}

export default Navigation;