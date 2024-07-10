import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [link, setlink] = useState('');
    const [shortlink, setshortlink] = useState('');
    const [error, seterr] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8001/api/newshort', { link });
            setshortlink(response.data.shortlink);
            seterr('');
        } catch (error) {
            seterr('Failed to create short link');
        }
    };

    return (
        <div className="App">   
            <h1>link Shortener</h1>
            <form onSubmit={submit}>
                <input 
                    type="text" 
                    placeholder="Enter link" 
                    value={link} 
                    onChange={(e) => setlink(e.target.value)} 
                />
                <button type="submit">Shorten</button>
            </form>
            {shortlink && (
                <div>
                    <p>Short link: <a href={shortlink} target="_blank" rel="noopener noreferrer">{shortlink}</a></p>
                </div>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default App;
