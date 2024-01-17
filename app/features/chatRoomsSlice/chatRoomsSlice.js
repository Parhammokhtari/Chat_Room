"use client";
import { createSlice } from "@reduxjs/toolkit";
const initialState = [
  { chatRoomName: "chatRoom1", roomId: 1, messages: [] },
  { chatRoomName: "chatRoom2", roomId: 2, messages: [] },
  { chatRoomName: "chatRoom3", roomId: 3, messages: [] },
  { chatRoomName: "chatRoom4", roomId: 4, messages: [] },
  { chatRoomName: "chatRoom5", roomId: 5, messages: [] },
  { chatRoomName: "chatRoom6", roomId: 6, messages: [] },
  { chatRoomName: "chatRoom7", roomId: 7, messages: [] },
  { chatRoomName: "chatRoom8", roomId: 8, messages: [] },
];

const chatRoomsSlice = createSlice({
  name: "chatRooms",
  initialState,
  reducers: {
    updateMessages: (state = initialState, { payload }) => {
      console.log({ payload });
      state?.forEach((chatRoom) => {
        if (chatRoom?.roomId == payload?.roomId) {
          chatRoom.messages = payload?.messages;
        }
      });
    },
  },
});
export const { updateMessages } = chatRoomsSlice.actions;
export default chatRoomsSlice.reducer;
