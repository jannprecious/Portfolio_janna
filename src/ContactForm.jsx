import React, { useEffect, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [feedback, setFeedback] = useState("");
  const [feedbackColor, setFeedbackColor] = useState("");

  useEffect(() => {
    if (!feedback.includes("Thanks")) return;
    const timer = setTimeout(() => setFeedback(""), 4000);
    return () => clearTimeout(timer);
  }, [feedback]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setFeedbackColor("#c2410c");
      setFeedback("Please fill in all fields before sending.");
      return;
    }

    const emailPattern = /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/;
    if (!emailPattern.test(email)) {
      setFeedbackColor("#c2410c");
      setFeedback("Please enter a valid email address.");
      return;
    }

    setFeedbackColor("#1f7a8c");
    setFeedback("Sending your message...");

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setFeedbackColor("#2b6e47");
      setFeedback(`Thanks ${name}! I'll get back to you soon.`);
    }, 800);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your name"
        required
        value={formData.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email address"
        required
        value={formData.email}
        onChange={handleChange}
      />
      <textarea
        rows={3}
        name="message"
        placeholder="Tell me about your idea..."
        value={formData.message}
        onChange={handleChange}
      />
      <button
        type="submit"
        className="btn"
        style={{ alignSelf: "center", width: "fit-content" }}
      >
        Send message
      </button>
      <div id="form-feedback" style={{ color: feedbackColor }}>
        {feedback}
      </div>
    </form>
  );
}
