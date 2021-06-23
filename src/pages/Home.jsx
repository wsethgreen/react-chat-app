import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

const Home = () => {
    return (
        <div>
            <Header />
            <div className="welcome_container">
                <h1 className="welcome_header">Welcome to the chat app!</h1>
                <div className="account_link_container">
                    <Link className="account_link" to="login">Login to Existing Account</Link>
                    <Link className="account_link" to="signup">Create new Account</Link>
                </div>
            </div>

        </div>
    )
}

export default Home
