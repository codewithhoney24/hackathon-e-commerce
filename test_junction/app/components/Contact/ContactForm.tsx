"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form Submitted:", formData);
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div id="contact-form" className="bg-white py-16 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto shadow-lg rounded-xl mb-20">
      <div className="text-center mb-10">
        <h2 className="text-[#252B42] font-bold text-[32px]">Send Us a Message</h2>
        <p className="text-[#737373] mt-4">Have a specific inquiry? Fill out the form below.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-bold text-[#252B42] mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23A6F0] focus:border-transparent outline-none transition-all"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-bold text-[#252B42] mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23A6F0] focus:border-transparent outline-none transition-all"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-bold text-[#252B42] mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23A6F0] focus:border-transparent outline-none transition-all"
            placeholder="How can we help?"
            value={formData.subject}
            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-[#252B42] mb-2">
            Message
          </label>
          <textarea
            id="message"
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#23A6F0] focus:border-transparent outline-none transition-all resize-none"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-[#23A6F0] text-white font-bold py-4 rounded-md hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg active:scale-[0.98]"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
