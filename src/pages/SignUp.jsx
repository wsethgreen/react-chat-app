import React from 'react'
import Header from '../components/Header.js';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInWithGoogle, signup } from '../helpers/auth';

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [value, setValue] = useState(null);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        try {
            signup(email, password);
        } catch (error) {
            setError(error.message);
        }
    }

    const googleSignIn = async() => {
        try {
            await signInWithGoogle();
        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <h1>Sign Up to <Link to="/">The Chat App</Link></h1>
                <p>Fill out the form to use the app.</p>
                <input 
                type="email" 
                placeholder="Email" 
                name="email" 
                value={email} 
                onChange={handleEmailChange} 
                />
                <input 
                type="password" 
                placeholder="Password" 
                name="password" 
                value={password} 
                onChange={handlePasswordChange}
                />
                <div>
                    {error ? <p>error</p> : null}
                    <button type="submit" >Sign Up</button>
                </div>
                <button onClick={googleSignIn} type="button" >Sign in with Google</button>
                <hr />
                <p>If you already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    );
}

export default SignUp;
