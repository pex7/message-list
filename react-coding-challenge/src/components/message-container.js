import React, { useEffect, useState } from 'react'
import MessageColumn from './message-column'
import './styles.css'

export default function MessageContainer(props) {
  const { messages, handleClearMessage } = props
  const [prioritizedMessages, setPrioritizedMessages] = useState({})

  useEffect(() => {
    const getPrioritizedMessages = (messages) => {
      return messages.reduce((messagesObj, message) => {
        const messagePriorities = messagesObj[message.priority]
        if (messagePriorities) {
          messagePriorities.unshift(message)
        } else {
          messagesObj[message.priority] = [message]
        }

        return messagesObj
      }, {})
    }

    setPrioritizedMessages(getPrioritizedMessages(messages))
  }, [messages])

  return (
    <div className="message-container">
      {Array.from([1, 2, 3], key =>
        <MessageColumn
          key={key}
          messages={prioritizedMessages[key]}
          priority={key}
          handleClearMessage={handleClearMessage}
        />
      )}
    </div>
  );
}