import React, { useState } from "react";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import TempleMap from "./TempleMap.js";

const Contact = () => {
  const [from, setFrom] = useState("");
  const [phone, setPhone] = useState("");
  const [subscribe, setSubscribe] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    console.log("In sendemail");
    init("user_LsBhBKlaFcAN0ii9CnyUv");
    var templateParams = {
      to_name: "Hindu Temple of New Hampshire",
      from_name: from,
      from_phone: phone,
      from_email: email,
      message_html: message,
      subscribe: subscribe,
    };

    emailjs
      .send("service_i8j7drm", "template_hv4n5hl", templateParams)
      .then((result) => console.log(result))
      .catch((error) => console.log(error));

    setFrom("");
    setPhone("");
    setMessage("");
    setEmail("");
    setSubscribe(false);
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
              <i className="fas fa-user fa-2x"></i> Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <label for="phone" data-error="wrong" data-success="right">
              <i className="fas fa-phone fa-2x"></i> Phone
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
              <i className="far fa-envelope fa-2x"></i> Email
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
              <i class="far fa-sticky-note fa-2x"></i> Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <label>
              <input
                type="checkbox"
                checked={subscribe}
                onChange={(e) => setSubscribe(e.target.value)}
              />
              <span>Subscribe</span>
            </label>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col s12">
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col l6 m6 s12">
          <h5 className="text center">Temple Location</h5>
          <TempleMap />
        </div>
        <div className="col l6 m6 s12">
          <h5 className="text center">Contact Form</h5>
          {inputForm}
        </div>
      </div>
    </div>
  );
};

export default Contact;
