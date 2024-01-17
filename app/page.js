"use client";

import ChatBox from "@/components/ChatBox";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateMessages } from "./features/chatRoomsSlice/chatRoomsSlice";

export default function Index() {
  const dispatch = useDispatch();
  if (localStorage.getItem("chatRooms")) {
    const savedData = localStorage.getItem("chatRooms");
    const chatRoomsFromStorage = JSON.parse(savedData);
    chatRoomsFromStorage?.forEach((chatRoom) => {
      dispatch(
        updateMessages({
          roomId: chatRoom?.roomId,
          messages: chatRoom?.messages,
        })
      );
    });
  }

  const chatRoomsSelector = useSelector((state) => state?.chatRooms);

  useEffect(() => {
    if (!localStorage.getItem("chatRooms")) {
      // const dataToSave = [
      //   { chatRoomName: "chatRoom1", roomId: 1, messages: [] },
      //   { chatRoomName: "chatRoom2", roomId: 2, messages: [] },
      //   { chatRoomName: "chatRoom3", roomId: 3, messages: [] },
      //   { chatRoomName: "chatRoom4", roomId: 4, messages: [] },
      //   { chatRoomName: "chatRoom5", roomId: 5, messages: [] },
      //   { chatRoomName: "chatRoom6", roomId: 6, messages: [] },
      // ];
      localStorage.setItem("chatRooms", JSON.stringify(chatRoomsSelector));
    }

    // const savedData = localStorage.getItem("chatRooms1112");
    // const parsedData = JSON.parse(savedData);

    // setChatRooms(parsedData);
  }, []);
  return (
    <>
      <h1 className="font-bold text-3xl p-5 rounded-tr-lg rounded-tl-lg bg-gray-400  ">
        chatRooms
      </h1>
      <div className="flex flex-col  rounded-br-lg  rounded-bl-lg  bg-gray-300 justify-center py-4">
        {chatRoomsSelector?.map((chatRoom) => (
          <ChatBox
            key={chatRoom?.roomId}
            chatRoomName={chatRoom?.chatRoomName}
            roomId={chatRoom?.roomId}
            messages={chatRoom?.messages}
          />
        ))}
      </div>
    </>
  );
}
