import React from "react";

export default function ContactForm() {
  return (
    <div className="contact">
      <h2>Get in touch 📧</h2>
      <section className="contact" id="connect">
        <form
          name="contact"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" />
          </div>
          <div style={{ color: "#f2af3b" }} size={12} sm={12} className="px-1">
            <label htmlFor="full-name">Full Name</label>
            <input type="text" name="full_name" id="full-name" />
          </div>
          <div style={{ color: "#f2af3b" }} size={12} sm={12} className="px-1">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div style={{ color: "#f2af3b" }} size={12} sm={12} className="px-1">
            <label htmlFor="message">Message</label>
            <textarea rows="6" name="message" id="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
