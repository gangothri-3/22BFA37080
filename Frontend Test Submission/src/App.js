import React, { useState } from 'react';
import './App.css';

function App() {
  const [url, setUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const shorten = async () => {
    try {
      const response = await fetch('http://localhost:5000/shorten', {  
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (data.shortUrl) {
        setShortUrl(data.shortUrl);
        setError('');
      } else {
        setError('Something went wrong');
        setShortUrl('');
      }
    } catch (err) {
      setError('Something went wrong');
      setShortUrl('');
    }
  };

  return (
    <div className="App">
      <h2>URL Shortener</h2>
      <input
        type="text"
        value={url}
        placeholder="Enter URL"
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={shorten}>Shorten</button>

      {shortUrl && (
        <div>
          <p>Shortened URL: <a href={shortUrl}>{shortUrl}</a></p>
        </div>
      )}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default App;
