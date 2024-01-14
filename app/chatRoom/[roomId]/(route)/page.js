"use client";
import React, { useRef, useState, useEffect } from "react";

export default function ChatRoom({ params }) {
  const dummySpace = useRef();
  //   get user details
  //  const { uid = 2, displayName, photoURL } = props.user;
  const uid = 2;
  // initial states
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // automatically check db for new messages
  useEffect(() => {
    // db.collection("messages")
    //   .orderBy("createdAt")
    //   .limit(100)
    //   .onSnapshot((querySnapShot) => {
    //     // get all documents from collection with id
    //     const data = querySnapShot.docs.map((doc) => ({
    //       ...doc.data(),
    //       id: doc.id,
    //     }));

    //   update state

    console.log(messages);

    //  });
  }, [messages]);

  // when form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();

    // db.collection("messages").add({
    //   text: newMessage,
    //   createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    //   uid,
    //   displayName,
    //   photoURL,
    // });
    const newMess = {
      text: e,
      createdAt: new Date(),
      uid: 2, // params?.roomId,
      displayName: "parhem",
    };
    setMessages((prev) => [...prev, newMess]);
    //  setNewMessage(e);

    // scroll down the chat
    // dummySpace.current.scrollIntoView({ behavor: "smooth" });
  };

  return (
    <main id="chat_room">
      <ul>
        {messages.map((message) => (
          <li
            key={message?.id}
            className={message.uid === uid ? "sent" : "received"}
          >
            <section></section>

            <section>
              {/* display message text */}
              <p>{message.text}</p>

              {/* display user name */}
              {message.displayName ? <span>{message.displayName}</span> : null}
              <br />
              {/* display message date and time */}
              {message?.createdAt ? (
                <span>{new Date(message.createdAt)}</span>
              ) : null}
            </section>
          </li>
        ))}
      </ul>

      {/* extra space to scroll the page when a new message is sent */}
      <section ref={dummySpace}></section>

      {/* input form */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
        />

        <button type="submit" disabled={!newMessage}>
          Send
        </button>
      </form>
    </main>
  );
}
