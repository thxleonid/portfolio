import React, { useState } from "react";
import './ContactForm.scss'
import board from '../img/level5/board.png'

const FORM_ENDPOINT = "https://herotofu.com/start"; // TODO - update to the correct endpoint

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    <div className='formBlock'>
        <img src={board} alt='Made by valadzionak_volha from Freepik' />
        <div className='form-content'>
            <h1>Contact</h1>
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
            >
                <div className='flex'>
                    <input type="text" placeholder="Your name" name="name" required />
                    <input type="email" placeholder="Email" name="email" required />
                </div>
                <textarea placeholder="Your message" name="message" required />
                <button type="submit"> Send a message </button>
            </form>
        </div>
    </div>
  );
};

export default ContactForm;