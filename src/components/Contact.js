import React, { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";

const Contact = () => {
  const [from, setFrom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    init("user_LsBhBKlaFcAN0ii9CnyUv");
    var templateParams = {
      to_name: "Hindu Temple of New Hampshire",
      from_name: from,
      from_email: email,
      message_html: message,
    };

    emailjs
      .send("service_i8j7drm", "template_hv4n5hl", templateParams)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));

    setFrom("");
    setMessage("");
    setEmail("");
  }

  const inputForm = (
    <div className="row">
      <form className="col s12" onSubmit={sendEmail}>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              name="user_name"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
            <label for="name" data-error="wrong" data-success="right">
              Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="email"
              name="user_email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="email" data-error="wrong" data-success="right">
              Email
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <textarea
              className="materialize-textarea"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label for="message" data-error="wrong" data-success="right">
              Message
            </label>
          </div>
        </div>
        <div className="row">
          <div classname="col s12">
            <input className="btn-large" type="submit" value="Send" />
          </div>
        </div>
      </form>
    </div>
  );

  return <div className="container">{inputForm}</div>;
};

export default Contact;
