import { useState } from 'react';
import axios from 'axios';

export default function Chatbot() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    const res = await axios.post('http://localhost:3000/api/chat', { message: input });
    setMessages([...messages, { text: input, user: 'me' }, { text: res.data.reply, user: 'bot' }]);
    setInput('');
  };

  return (
    <div className="chatbot">
      <div className="chat-window">
        {messages.map((m, i) => <p key={i}><strong>{m.user}:</strong> {m.text}</p>)}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}