import React from 'react';
import './Contact.css';
import Message_icon from '../../assets/msg-icon.png';
import Mail_icon from '../../assets/mail-icon.png';
import Phone_icon from '../../assets/phone-icon.png';
import Location_icon from '../../assets/location-icon.png';
import White_arrow from '../../assets/white-arrow.png';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c065dc3f-f4c7-4ab4-b547-c22924709080");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      event.target.reset();
    }
  };




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
        <form onSubmit={onSubmit}>
          <label>Your name</label>
          <input type="text" name='name' placeholder='Enter your name' required />
          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' />
          <label>Write Your Message Here</label>
          <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>

          <button type='submit' className='btn dark-btn'>Submit Now <img src={White_arrow} alt="" /></button>

        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
