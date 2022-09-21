import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Wave from '../components/Wave';
import emailIcon from '../assets/images/email.png';
import phoneIcon from '../assets/images/smartphone.png';
import './Contact.css'

const Contact = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const form = useRef();
    let errMsg = '';

    const sendEmail = (e) => {
        const showToastMessage = () => {
            toast.success('Message Sent!');
        };

        const showFailedToastMessage = () => {
            toast.error(errMsg);
        };

        e.preventDefault();

        if (userName === '' ) {
            errMsg = 'Please enter your name!'
            showFailedToastMessage();
            return;
        } else if (email === '') {
            errMsg = 'Please enter your email!'
            showFailedToastMessage();
            return;
        } else if (message === '') {
            errMsg = 'Please enter a message!'
            showFailedToastMessage();
            return;
        }
    
        emailjs.sendForm('service_gi5r5jf', 'template_1b196cr', form.current, 'j9JfcfAAsgwDFQwDH')
            .then((result) => {
                console.log(result.text);
                console.log('message sent');
                showToastMessage();
            }, (error) => {
                console.log(error.text);
            });
        
        setUserName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='Contact' id='Contact'>
            <h1 className='header mb-4'>lets connect!</h1>
            <div className='contactInfo'>
                <div className='contactSec emailSec'>
                    <a href="mailto:jslee423@gmail.com" className="contact-text">
                        <img src={emailIcon} alt='email icon' className='emailIcon' />
                        <p>jslee423@gmail.com</p>
                    </a>
                </div>
                <div className='contactSec phoneSec'>
                    <a href="tel:+1 (610) 618-0535" className="contact-text">
                        <img src={phoneIcon} alt='phone icon' className='emailIcon' />
                        <p>+1 6106180535</p>
                    </a>
                </div>
            </div>
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
                <input type="submit" value="Send Message"/>
            </form>
            <Wave color/>
        </div>
    );
};

export default Contact;