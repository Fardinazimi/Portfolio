import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Initialize EmailJS
emailjs.init({
  publicKey: "ByzKZgbCe7vJaoaCb",
});

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();
  const sendEmail = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast.info("Sending your message...", { autoClose: false });

    try {
      // Send the contact form email
      await emailjs.sendForm(
        "service_e6jdxsp",
        "template_fy5zf8f",
        form.current,
        {
          publicKey: "ByzKZgbCe7vJaoaCb",
        }
      );

      // Send auto-reply email
      const templateParams = {
        email: email,
        name: name
      };

      await emailjs.send(
        "service_e6jdxsp",
        "template_xg7na4x",
        templateParams
      );

      toast.dismiss();
      toast.success("Message sent successfully!");
      setEmail("");
      setName("");
      setMessage("");
    } catch (error) {
      console.error("Error:", error);
      toast.dismiss();
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <ToastContainer position="top-right" theme="dark" />
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan"></div>
        </div>
      )}
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" rounded-lg bg-lightBrown p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isLoading}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
