import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import socket from './socketClient';
import { verifyUser } from '../../store/LocalStorage/actions';
import Header from '../../components/Header/Header';
// import { sendMessage } from './Requests';
import './styleChat.scss';

export default function ChatClient() {
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  // const [att, setAtt] = useState(0);
  const [emailUser, setEmail] = useState('');
  
  const updateScroll = () => {
    const chatBox = document.getElementsByClassName('messageBox')[0];
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  socket.on('messages', async ({ user, time, message, Loja }) => {
    // console.log(userBack, time, msg, Loja);
    setMessages([...messages, { user, time, message, Loja }]);
    updateScroll();
  });

  const history = useHistory();
  const getAllMessages = async (email) => {
    const allMessages = await fetch(`http://localhost:4001/chat/userMessages/${email}`);
    const allMsg = await allMessages.json();
    setMessages(allMsg);
  };

  useEffect(() => {
    const { email } = verifyUser(history);
    setEmail(email);
    getAllMessages(email);
    setTimeout(() => {
      updateScroll();
    }, 400)
  }, [history]);

  const newMessage = async () => {
    // console.log(emailUser, inputValue);
    socket.emit('message', ({
      user: emailUser,
      message: inputValue,
      Loja: 'Loja',
    }));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    newMessage();
    setInputValue('');
  };

  const handleChangeMessage = (value) => {
    setInputValue(value);
  };

  return (
    <div className="boxContainer">
      <Header title="Chat Client" user="client" />
      <h1>Chat Client</h1>
      <div className="messageBox">
        <ul>
          {messages && messages.map((msg, index) => (
            <li className={(msg.user === 'Loja') ? 'adminMessage' : 'clientMessage'} key={ index }>
              <span data-testid="nickname">
                {msg.user}
              </span> (
              <span data-testid="message-time">
                {msg.time}
              </span>):
              <p data-testid="text-message">
                {msg.message}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <form className="chatForm">
        <input
          type="text"
          data-testid="message-input"
          value={ inputValue }
          onChange={ ({ target }) => handleChangeMessage(target.value) }
        />
        <button
          type="submit"
          data-testid="send-message"
          onClick={ (e) => handleSendMessage(e) }
        >
          Send
        </button>
      </form>
    </div>
  );
}
