import { io } from 'socket.io-client';
import constants from '../constants';
import httpClient, { domain } from './index';
import { dispatch } from '../app/store';
import { sendMessageError, sendMessageSuccess } from '../app/actions/creators';

const socket = io(`ws://${domain}`, { transports: ['websocket'] });

export const sendMessage = (msg) => {
  socket.emit(constants.SOCKET.EVENTS.NEW_MESSAGE, {
    ...msg,
    author: '619cd0b1746b2f9be393a66f',
  });
};

socket.on(constants.SOCKET.EVENTS.NEW_MESSAGE, (msg) => {
  dispatch(sendMessageSuccess(msg));
});

socket.on(constants.SOCKET.EVENTS.NEW_MESSAGE_ERROR, (error) => {
  console.log(error);
  dispatch(sendMessageError(error));
});

export const getMessages = async () => {
  const list = await httpClient.get('/messages');

  return list.data;
};
