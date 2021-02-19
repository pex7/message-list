import React from 'react'
import Message from './message'
import './styles.css'

const PRIORITY_TYPE = {
  1: 'Error',
  2: 'Warning',
  3: 'Info',
}

export default function MessageColumn(props) {
  const { handleClearMessage, messages = [], priority } = props

  return (
    <div className="message-column">
      <h4>{PRIORITY_TYPE[priority]} Type {priority}</h4>
      <p>Count {messages.length}</p>
      <ul>
        {messages.map(message =>
          <Message
            key={message.id}
            message={message}
            priority={PRIORITY_TYPE[priority]}
            handleClearMessage={handleClearMessage}
          />
        )}
      </ul>
    </div>
  )
}