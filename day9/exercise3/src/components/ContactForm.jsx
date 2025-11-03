import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [messages, setMessages] = useState([]); 
  const handleChange = (e) => {
    const { name, value } = e.target;

    
    if (name === "message" && value.length > 500) return;

    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Invalid email format";
    if (!form.phone.trim()) newErrors.phone = "Phone is required";
    if (!form.subject.trim()) newErrors.subject = "Subject is required";
    if (!form.message.trim()) newErrors.message = "Message cannot be empty";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const foundErrors = validate();

    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      setSuccess(false);
    } else {
      setErrors({});
      setSuccess(true);

      
      setMessages((prev) => [...prev, form]);

      
      setForm({
        fullName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    }
  };

  const handleReset = () => {
    setForm({
      fullName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
    setErrors({});
    setSuccess(false);
  };

  return (
    <div className="contact-form-container">
      <h2> Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <label>Full Name:</label>
        <input
          type="text"
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <p className="error">{errors.fullName}</p>}

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}

        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <label>Subject:</label>
        <input
          type="text"
          name="subject"
          value={form.subject}
          onChange={handleChange}
        />
        {errors.subject && <p className="error">{errors.subject}</p>}

        <label>Message:</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows="5"
        ></textarea>
        <div className="char-counter">
          {form.message.length} / 500 characters
        </div>
        {errors.message && <p className="error">{errors.message}</p>}

        <div className="button-group">
          <button type="submit">Send Message</button>
          <button type="button" className="reset-btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>

      {success && (
        <p className="success">
          Message sent successfully! We’ll get back to you .
        </p>
      )}

  
      {messages.length > 0 && (
        <div className="messages-list">
          <h3>Submitted Messages:</h3>
          {messages.map((msg, index) => (
            <div key={index} className="message-item">
              <p><strong>{msg.fullName}</strong> ({msg.email})</p>
              <p>{msg.phone}</p>
              <p><em>{msg.subject}</em></p>
              <p>{msg.message}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ContactForm;
