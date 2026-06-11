import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  // This will use the variable we set in Vercel settings
  const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  useEffect(() => {
    // Replace '/api/your-endpoint' with an actual route from your backend
    fetch(`${API_URL}/api/your-endpoint`)
      .then((res) => res.json())
      .then((data) => setMessage(JSON.stringify(data)))
      .catch((err) => {
        console.error('Error fetching data:', err);
        setMessage('Failed to connect to backend.');
      });
  }, [API_URL]);

  return (
    <div>
      <h1>VogueAvenue</h1>
      <p>Backend Response: {message}</p>
    </div>
  );
}

export default App;