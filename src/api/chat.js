import { io } from "socket.io-client";
import constants from "../constants";
import { domain } from "./index";

const socket = io(`ws://${domain}`);

export const sendMessage = (msg) => {
  socket.emit(constants.SOCKET.EVENTS.NEW_MESSAGE, msg);
};

socket.on(constants.SOCKET.EVENTS.NEW_MESSAGE, (msg) => {
  console.log(msg);
});
