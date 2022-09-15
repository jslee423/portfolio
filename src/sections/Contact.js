import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_gi5r5jf', 'template_1b196cr', form.current, 'j9JfcfAAsgwDFQwDH')
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
            }, (error) => {
                console.log(error.text);
            });
        
        setUserName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='Contact'>
            <h1 className='header mb-4'>Contact</h1>
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input
                    type="text"
                    name="user_name"
                    value={userName}
                    onChange={(event) => setUserName(event.target.value)}
                />
                <label>Email</label>
                <input
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label>Message</label>
                <textarea
                    name="message"
                    rows='5'
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                />
                <input type="submit" value="Send Message" />
            </form>
        </div>
    );
};

export default Contact;