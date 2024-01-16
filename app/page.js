"use client";

import { useState, useEffect } from "react";
import ChatBox from "../components/ChatBox";
//import { Provider } from "react-redux";
export default function Home() {
  const [chatRooms, setChatRooms] = useState([]);

  useEffect(() => {
    console.log("hiii");

    // Check if the data is already in localStorage before initializing it
    if (!localStorage.getItem("chatRooms")) {
      const dataToSave = [
        { chatRoomName: "chatRoom1", roomId: 1, messages: [] },
        { chatRoomName: "chatRoom2", roomId: 2, messages: [] },
        { chatRoomName: "chatRoom3", roomId: 3, messages: [] },
        { chatRoomName: "chatRoom4", roomId: 4, messages: [] },
        { chatRoomName: "chatRoom5", roomId: 5, messages: [] },
        { chatRoomName: "chatRoom6", roomId: 6, messages: [] },
      ];

      localStorage.setItem("chatRooms", JSON.stringify(dataToSave));
    }

    const savedData = localStorage.getItem("chatRooms");
    const parsedData = JSON.parse(savedData);

    setChatRooms(parsedData);
  }, []);
  return (
    <>
      <h1 className="font-bold text-3xl p-5 rounded-tr-lg rounded-tl-lg bg-gray-400  ">
        chatRooms
      </h1>
      <div className="flex flex-col  rounded-br-lg  rounded-bl-lg max-h-[800px] overflow-y-auto bg-gray-300 justify-center py-4">
        {console.log(chatRooms)}
        {chatRooms?.map((chatRoom) => (
          <ChatBox
            key={chatRoom?.roomId}
            chatRoomName={chatRoom?.chatRoomName}
            roomId={chatRoom?.roomId}
          />
        ))}
      </div>
    </>
  );
}
