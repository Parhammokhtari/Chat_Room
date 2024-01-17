"use client";
import { configureStore } from "@reduxjs/toolkit";
// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk"; // Optional, for handling async actions
// import persistedReducer from "./persist";

import chatRooms from "./chatRoomsSlice/chatRoomsSlice";
const store = configureStore({
  reducer: {
    chatRooms: chatRooms,
  },
});

export default store;

//const store = createStore(persistedReducer, applyMiddleware(thunk));
