"use client";

import { updateMessages } from "@/app/features/chatRoomsSlice/chatRoomsSlice";
import MessageLog from "@/components/MessageLog";
import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function ChatRoom({ params }) {
  const dummySpace = useRef();
  const chatRooms = JSON.parse(localStorage.getItem("chatRooms"));
  const chatRoomsfromStore = useSelector((state) => state?.chatRooms);
  const prevMessages = chatRooms?.find(
    (chatRoom) => chatRoom?.roomId == params?.roomId
  );

  const uid = 2;

  const dispatch = useDispatch();
  const [messages, setMessages] = useState(prevMessages?.messages || []);
  const [newMessage, setNewMessage] = useState("");
  useEffect(() => {
    // updateMessages({roomId,messages})
    chatRooms?.forEach((chatRoom) => {
      if (chatRoom?.roomId == params?.roomId) {
        chatRoom.messages = messages;
      }
    });
    dispatch(updateMessages({ roomId: params?.roomId, messages }));
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
    setNewMessage("");
    sendRandomBotResponse();

    dummySpace.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <h1 className="font-bold bg-gray-300 text-2xl p-3 rounded-tl-xl rounded-tr-xl max-w-lg mt-4 5">
        ChatRoom {params?.roomId}
      </h1>
      <main
        className="bg-gray-400 p-5  max-w-lg flex flex-col max-height-chat-box overflow-y-scroll"
        id={`${params?.roomId}`}
      >
        <div>
          <ul className="flex flex-col">
            {messages?.map((message) => (
              <MessageLog key={message.id} message={message} userId={uid} />
            ))}
          </ul>
        </div>

        <section ref={dummySpace}></section>
      </main>
      <form
        className=" bg-gray-600 p-3 rounded-br-xl flex justify-between rounded-bl-xl max-w-lg "
        onSubmit={handleSubmit}
      >
        <input
          className="mr-5 p-2 rounded-lg min-w-96"
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message here..."
        />

        <button
          className="bg-gray-200  hover:bg-green-500 p-2 rounded-full "
          type="submit"
          disabled={!newMessage}
        >
          Send
        </button>
      </form>
    </>
  );
}
