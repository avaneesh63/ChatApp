import React from 'react';
import './Message.css';

interface MessageProps {
  content: string;
  isUser: boolean;
}

const Message: React.FC<MessageProps> = ({ content, isUser }) => {
  return (
    <div className={`message ${isUser ? 'user' : 'other'}`}>
      <p>{content}</p>
    </div>
  );
};

export default Message;
