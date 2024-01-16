"use client";
import MessageLog from "@/components/MessageLog";
import React, { useRef, useState, useEffect } from "react";

export default function ChatRoom({ params }) {
  const dummySpace = useRef();
  const chatRooms = JSON.parse(localStorage.getItem("chatRooms"));
  const prevMessages = chatRooms?.find(
    (chatRoom) => chatRoom?.roomId == params?.roomId
  );
  const uid = 2;

  const [messages, setMessages] = useState(prevMessages?.messages || []);
  const [newMessage, setNewMessage] = useState("");
  console.log({ params });

  useEffect(() => {
    chatRooms?.forEach((chatRoom) => {
      if (chatRoom?.roomId == params?.roomId) {
        chatRoom.messages = messages;
      }
    });
    localStorage.setItem("chatRooms", JSON.stringify(chatRooms));
  }, [messages]);

  const botResponses = [
    "Interesting...",
    "Tell me more!",
    "I see...",
    "That's fascinating!",
    "Hmm, I'm not sure.",
    "I am good",
    "how are you",
    "what time is it?",
  ];

  // Function to send a random bot response after 5 seconds
  const sendRandomBotResponse = () => {
    setTimeout(() => {
      const randomResponse =
        botResponses[Math.floor(Math.random() * botResponses.length)];
      const newMess = {
        text: randomResponse,
        createdAt: new Date(),
        uid: 1,
        displayName: "bot",
      };
      setMessages((prev) => [...prev, newMess]);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMess = {
      text: newMessage,
      createdAt: new Date(),
      uid: 2, // params?.roomId,
      displayName: "parham",
    };
    setMessages((prev) => [...prev, newMess]);
    setNewMessage(""); // Clear the input after submitting
    sendRandomBotResponse();

    dummySpace.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main
      className="bg-gray-400 p-5 rounded-xl flex flex-col"
      id={`${params?.roomId}`}
    >
      <h1 className="font-bold text-2xl  mt-4 mb-5">
        ChatRoom {params?.roomId}
      </h1>
      <div>
        <ul className="flex flex-col">
          {messages?.map((message) => (
            <MessageLog message={message} userId={uid} />
          ))}
        </ul>
      </div>

      <section ref={dummySpace}></section>
      <form className="mt-5" onSubmit={handleSubmit}>
        <input
          className="mr-5 p-2 rounded-md "
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
        />

        <button
          className="bg-gray-200 hover:bg-green-500 p-2 rounded-full "
          type="submit"
          disabled={!newMessage}
        >
          Send
        </button>
      </form>
    </main>
  );
}
