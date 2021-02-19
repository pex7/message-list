import React from 'react';
import './styles.css';

export default function Message(props) {
  const { handleClearMessage, message, priority } = props;

  return (
    <li className={`message message-${priority.toLowerCase()}`}>
      <p>{message.message}</p>
      <button onClick={() => handleClearMessage(message)}>Clear</button>
    </li>
  );
}