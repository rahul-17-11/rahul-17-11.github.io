import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
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

  const publicKey = "wJZi_KSi7jvEqNB2O"
  const serviceId = "service_rptjaes"
  const templateId = "template_6cta54m"

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          alert("Message Sent Succesfully")
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("Failed to send Message")
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-light-brown text-white px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-light-brown text-white px-2"
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
          className=" rounded-lg bg-light-brown text-white p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border cursor-pointer border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;