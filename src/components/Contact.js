import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_zkoutw1",
        "template_xxxxxx",
        form.current,
        "user_xxxxxxxxx"
      )
      .then(
        (result) => {
          alert("Message sent!");
        },
        (error) => {
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-card">
        <form
          className="contact-form"
          ref={form}
          onSubmit={sendEmail}
          autoComplete="off"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />
          <textarea name="message" placeholder="Your Message" required />
        </form>
        <div className="contact-message-area">
          <div className="contact-message-title">Send me a message!</div>
          <div className="contact-message-sub">
            (please{" "}
            <span role="img" aria-label="smile">
              😊
            </span>
            )
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
