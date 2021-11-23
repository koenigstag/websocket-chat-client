import React, { useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessagesRequest } from '../app/actions/creators';
import Chat from '../components/Chat';

export default function ChatPage() {
  const dispatch = useDispatch();
  const { list, isLoading, error } = useSelector((state) => state.messageSlice);

  console.log(error);

  useLayoutEffect(() => {
    // effect
    dispatch(getMessagesRequest());
  }, []);

  return (
    <div>
      <Chat />
      <div>{isLoading && 'Loading...'}</div>
      <div>{error && error.message}</div>
      <h4>Messages:</h4>
      <ul>
        {list.slice(0, 9).map((msg) => {
          return <li key={msg._id}>{msg.text}</li>;
        })}
      </ul>
    </div>
  );
}
