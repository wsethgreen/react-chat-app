import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <h1>Welcome to the chat app!</h1>
            <Link to="login">Login to Existing Account</Link>
            <Link to="signup">Create new Account</Link>
        </div>
    )
}

export default Home
