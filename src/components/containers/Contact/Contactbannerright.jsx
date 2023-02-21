import React from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contactbannerright() {
  return (
    <div className=" contact__banner-right">
      <form className="contact__form">
        <label className="form-label">Contact name *</label>
        <input
          type="text"
          htmlFor="ctname"
          className="ctirstname"
          placeholder="Your name.."
        />

        <label className="form-label">Email *</label>
        <input
          type="email"
          htmlFor="email"
          className="email"
          placeholder="Your email.."
        />

        <label className="form-label">Phone number *</label>
        <input
          type="number"
          htmlFor="phonenumber"
          className="phonenumber"
          placeholder="Your phone.."
        />
        <label className="form-label">Short description of your idea *</label>
        <textarea
          htmlFor="desc"
          className="desc"
          placeholder="Write something.."
        ></textarea>
        <div className="contact__text">
          <p>
            We don't share your info. <b>Promise</b>
          </p>
        </div>
        <ReCAPTCHA sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" />
      </form>
    </div>
  );
}
