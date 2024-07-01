import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatScreen from './components/ChatScreen';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ChatScreen />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
