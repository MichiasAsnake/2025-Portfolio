import React, { useRef, useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitting(false);
          setShowSuccess(true);
          // Reset form
          form.current.reset();
          // Hide success message after 4 seconds
          setTimeout(() => {
            setShowSuccess(false);
          }, 4000);
        },
        (error) => {
          console.log("FAILED...", error);
          setIsSubmitting(false);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-card">
        <form
          className="contact-form"
          ref={form}
          onSubmit={sendEmail}
          autoComplete="off"
        >
          {showSuccess && (
            <div className="success-message">
              <div className="success-icon">✓</div>
              <div className="success-text">Message sent successfully!</div>
            </div>
          )}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            disabled={isSubmitting}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            disabled={isSubmitting}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className={`send-button ${isSubmitting ? "sending" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
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
