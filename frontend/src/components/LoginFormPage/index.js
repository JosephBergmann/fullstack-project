import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const IndexFormPage = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    if(sessionUser) return <Redirect to="/"  />

    const handleClick = (e) => {
        e.preventDefault();
        setErrors([]);
        
        return dispatch(sessionActions.login({email, password})).catch(async (res) => {
            let data;
            try {
                data = await res.clone().json();
            } catch {
                data = await res.clone().text();
            }

            if(data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statustext]);
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map(error => <li key={error}>{error}</li>)}
            </ul>
            <label>
                Email
                <input type="text"
                    value={email} onChange={(e) => setEmail(e.target.value)} required />
            </label>
            <label>
                Password
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </label>
            <button type="submit">Log In</button>
        </form>
    )
}
export default IndexFormPage;