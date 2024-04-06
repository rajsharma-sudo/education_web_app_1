import React from 'react';
import './Contact.css';
import Message_icon from '../../assets/msg-icon.png';
import Mail_icon from '../../assets/mail-icon.png';
import Phone_icon from '../../assets/phone-icon.png';
import Location_icon from '../../assets/location-icon.png';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={Message_icon} alt="" /></h3>
        <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide execeptional service to our university community.</p>
        <ul>
            <li><img src={Mail_icon} alt="" /> Contact@MyIronGym.dev</li>
            <li><img src={Phone_icon} alt="" />+91 9691320000</li>
            <li><img src={Location_icon} alt="" />77 Massachusetts Ave, Cambridge <br />MA 02139, United States</li>
            
        </ul>
      </div>
      <div className="contact-col">

      </div>
    </div>
  )
}

export default Contact
