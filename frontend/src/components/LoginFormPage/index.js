import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import './index.css'

const IndexFormPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => {
        return state.session});
    const[email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    // let sessionUser = false;

    if(sessionUser) return <Redirect to="/"  />

    const handleSubmit = (e) => {
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
        }).then(history.push('/questions/'))
    }
    return (
        <div className="page">
            <div className="login-container">
                <form onSubmit={handleSubmit} id="malkhaz">
                    <div id="error-box">
                        <ul>
                            {errors.map(error => <li key={error}>{error}</li>)}
                        </ul>
                    </div>
                    <div id="input-container">
                    <label>
                        Email
                    </label>
                    <input type="text"
                            value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <label>
                        Password                       
                    </label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <button type="submit">Log In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default IndexFormPage;