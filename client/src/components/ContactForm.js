import React, { useState } from 'react';

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-gray-800 py-12 px-6 text-white">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center text-green-400">📬 Get in Touch</h2>
        <p className="text-gray-300 mb-6 text-center">
          Have questions about GreenGrid or want to collaborate? Let us know!
        </p>

        {submitted ? (
          <div className="bg-green-500 text-white p-4 rounded-lg text-center shadow-md">
            ✅ Thank you! We’ll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              required
              placeholder="Your Name"
              className="w-full p-3 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <input
              type="email"
              required
              placeholder="Your Email"
              className="w-full p-3 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <textarea
              required
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 rounded-md bg-gray-900 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-md transition shadow-md"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
