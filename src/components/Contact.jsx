import React from "react";

export default function ContactForm() {
  return (
    <div className="contact" id="connect">
      <h2>Get in touch 📧</h2>
      <section>
        <form
          name="contact"
          method="post"
          data-netlify="true"
          onSubmit="submit"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div hidden>
            <input name="bot-field" />
          </div>
          <div style={{ color: "#f2af3b" }} size={12} sm={12} className="px-1">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div style={{ color: "#f2af3b" }} size={12} sm={12} className="px-1">
            <label htmlFor="surname">Surname</label>
            <input type="text" name="surname" id="surname" />
          </div>
          <div style={{ color: "#f2af3b" }} size={12} sm={12} className="px-1">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div style={{ color: "#f2af3b" }} size={12} sm={12} className="px-1">
            <label htmlFor="message">Message</label>
            <textarea rows="9" name="message" id="message"></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
