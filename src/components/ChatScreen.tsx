import React, { useState } from 'react';
import './ChatScreen.css';
import Message from './Message';

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState<{ content: string, isUser: boolean }[]>([
    { content: "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money", isUser: false },
    { content: "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money", isUser: true },
    { content: "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money", isUser: false },
    { content: "Connect with fellow travelers, share the ride and save money Connect with fellow travelers, share the ride and save money", isUser: true },
  ]);

  const [newMessage, setNewMessage] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

  const handleSendMessage = () => {
    if (newMessage.trim() || attachedFiles.length > 0) {
      const messageToSend = { content: newMessage, isUser: true };
      setMessages([...messages, messageToSend]);
      setNewMessage('');
      // Handle attached files, e.g., upload to server
      console.log("Attached Files:", attachedFiles);
      setAttachedFiles([]);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const filesArray = Array.from(files);
      setAttachedFiles([...attachedFiles, ...filesArray]);
    }
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="chat-screen">
      <div className="header">
        <button className="back-button">&larr;</button>
        <div className="trip-info">
          <p>Trip 1</p>
          <p>From <strong>IGI Airport, T3</strong> To <strong>Sector 28</strong></p>
          <p>12 JAN, 20XX</p>
        </div>
        <div className="menu-container">
          <button className="options-button" onClick={toggleMenu}>&#8942;</button>
          {showMenu && (
            <div className="dropdown-menu">
              <button className="dropdown-item">Members</button>
              <button className="dropdown-item">Share Number</button>
              <button className="dropdown-item">Report</button>
            </div>
          )}
        </div>
      </div>
      <div className="messages">
        {messages.map((message, index) => (
          <Message key={index} content={message.content} isUser={message.isUser} />
        ))}
      </div>
      <div className="input-section">
        <label htmlFor="file-upload" className="attachment-button">&#128206;</label>
        <input id="file-upload" type="file" style={{ display: 'none' }} onChange={handleFileUpload} multiple />
        <input
          type="text"
          placeholder="Reply to @Avaneesh Kumar"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="send-button" onClick={handleSendMessage}>&#9658;</button>
      </div>
      {attachedFiles.length > 0 && (
        <div className="attached-files-preview">
          <p>Attached Files:</p>
          <ul>
            {attachedFiles.map((file, index) => (
              <li key={index}>{file.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ChatScreen;
