import React, { useState, useEffect } from 'react';
import Header from '../components/Header.js';
import { auth } from '../service/firebase.js';
import { db } from '../service/firebase.js';

const Chat = () => {

    const [user, setUser] = useState(auth().currentUser);
    const [chats, setChats] = useState([]);
    const [content, setContent] = useState('');
    const [readError, setReadError] = useState(null);
    const [writeError, setWriteError] = useState(null);

    useEffect(() => {
        setReadError(readError);
        try {
            db.ref("chats").on("value", snapshot => {
                let chats = [];
                snapshot.forEach((snap) => {
                    chats.push(snap.val());
                })
                setChats(chats);
            })
        } catch (error) {
            setReadError(error.message);
        }
    }, []);

    const handleChange = (e) => {
        setContent(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setWriteError(writeError);

        try {
            db.ref("chats").push({
                content: content,
                timestamp: Date.now(),
                uid: user.uid,
            })

            setContent(content);

        } catch (writeError) {
            setWriteError(writeError.message);
        }

    }

    return (
        <div>
            <Header />
            <h3 className="section_header">Logged in as: <strong>{user.email}</strong></h3>
            <div className="chats">
                {chats.map((chat) => {
                    return (
                        <div className="message">
                            <p className="chat_message" key={chat.timestamp}>{chat.content}</p>
                            <p className="user_email" key={chat.timestamp}>{user.email}</p>
                            <p className="chat_timestamp" key={chat.timestamp}>{chat.timestamp}</p>
                        </div>
                        
                    ) 
                })
                }
            </div>
            <div className="input_container">
                <h3 className="section_header">Send a message:</h3>
                <form className="chat_form" onSubmit={handleSubmit} action="">
                    <input className="chat_input" type="text" onChange={handleChange} value={content} />
                    { writeError ? <p>{ writeError }</p> : null }
                    <button className="btn_submit" type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Chat;
