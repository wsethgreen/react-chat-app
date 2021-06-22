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
                    chats.push(snap.val);
                })
                setChats(chats);
            })
        } catch (error) {
            setReadError(readError.message);
        }
    }, [chats]);

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
            <div className="chats">
                {chats.map((chat) => {
                    return <p key={chat.timestamp}>{chat.content}</p>;
                })}
            </div>
            <div>
                Message from ##
                <form onSubmit={handleSubmit} action="">
                    <input type="text" onChange={handleChange} value={content} />
                    { writeError ? <p>{ writeError }</p> : null }
                    <button type="submit">Send</button>
                </form>
            </div>
            <div>
                {/* Login as: <strong>{user.email}</strong> */}
            </div>
        </div>
    )
}

export default Chat
