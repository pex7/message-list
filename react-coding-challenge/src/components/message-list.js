import React from 'react'
import Api from '../api'
import MessageContainer from './message-container'
import './styles.css'

class MessageList extends React.PureComponent {
  constructor(...args) {
    super(...args)
    this.state = {
      messages: [],
    }
  }

  api = new Api({
    messageCallback: (message) => {
      this.messageCallback(message)
    },
  })

  componentDidMount() {
    this.api.start()
  }

  messageCallback(message) {
    const { messages } = this.state
    this.setState({
      messages: [
        ...messages.slice(),
        message,
      ],
    })
  }

  handleStartStopClick = () => {
    const isApiStarted = this.api.isStarted()
    if (isApiStarted) {
      this.api.stop()
    } else {
      this.api.start()
    }
    this.forceUpdate()
  }

  handleClearClick = () => {
    this.setState({ messages: [] })
  }

  handleClearMessage = (messageToRemove) => {
    this.setState({
      messages: this.state.messages.filter(message =>
        message.id !== messageToRemove.id)
    })
  }

  render() {
    const isApiStarted = this.api.isStarted()
    return (
      <div>
        <div className="button-container">
          <button
            onClick={this.handleStartStopClick}
          >
            {isApiStarted ? 'Stop Messages' : 'Start Messages'}
          </button>
          <button onClick={this.handleClearClick}>Clear</button>
        </div>
        <MessageContainer
          messages={this.state.messages}
          handleClearMessage={this.handleClearMessage}
        />
      </div>
    )
  }
}

export default MessageList
