import React, { useState } from 'react';
import './contact.css'; 

function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        console.log('פרטי קשר:', { name, email, message });
        alert('תודה על פנייתך, ניצור עמך קשר בהקדם!');
        
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <>
            <h2>צור קשר</h2>
            <form id="contactForm" onSubmit={handleSubmit}>
                <label htmlFor="name">שם:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                />

                <label htmlFor="email">דוא"ל:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    required 
                />

                <label htmlFor="message">הודעה:</label>
                <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={message} 
                    onChange={(e) => setMessage(e.target.value)} 
                    required 
                />

                <button type="submit">שלח</button>
            </form>
        </>
    );
}

export default Form;
