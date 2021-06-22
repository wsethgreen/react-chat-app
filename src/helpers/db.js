import {db} from '../service/firebase.js';

export function readChats() {
    let chatArray = [];
    db.ref("chats").on("value", snapshot => {
        snapshot.forEach((snap) => {
            chatArray.push(snap.val);
        })
        return chatArray;
    })
}

export function writeChats(message) {
    return db.ref("chats").push({
        content: message.content,
        timestamp: message.timestamp,
        uid: message.uid,
    })
}