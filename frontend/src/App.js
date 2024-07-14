import React, { useState } from 'react';//importing react hooks
import axios from 'axios';//importing axios
import './App.css';//sttlesheet

function App() {
    //declaring variables using usestate hook of react
    const [link, setlink] = useState('');
    const [shortlink, setshortlink] = useState('');
    const [error, seterr] = useState('');

    //on submiting the form
    const submit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8001/url/api/newshort', { link });//posting the input link to api/newshort using axios
            setshortlink(response.data.shortlink);//creating and setting the shortlink
            seterr('');//no error
        } catch (error) {
            seterr('Failed to create short link');//error handling
        }
    };

    //rturning the frontend page
    return (
        <div className="App">   
            <h1>link Shortener</h1>

            <form onSubmit={submit}>{/*form link input and submit*/}
                <input 
                    type="text" 
                    placeholder="Enter link" 
                    value={link} 
                    onChange={(e) => setlink(e.target.value)} 
                />
                <button type="submit">Shorten</button>
            </form>
            {/*if shortlink exists , display the link*/}
            {shortlink && (
                <div>
                    <p>Short link: <a href={shortlink} target="_blank" rel="noopener noreferrer">{shortlink}</a></p>
                </div>
            )}
            {/*if error exists, display the error*/}
            {error && <p className="error">{error}</p>}
        </div>
    );
}

export default App;
