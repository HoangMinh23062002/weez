import React from "react";

export default function contactbannerright(){
    return(
        <div className="col contact__banner-right">
        <form className="contact__form">
            <div className="mb-3">
                <label className="form-label" htmlFor="name">
                    Contact name *
                </label>
                <input className="form-control" type="text" id="contactname" required />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="email">
                    E-mail *
                </label>
                <input className="form-control" type="email" id="email" required />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="number">
                    Phone number *
                </label>
                <input className="form-control" type="number" id="number" required />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="message">
                    Short description of your idea *
                </label>
                <textarea className="form-control" id="message" required />
            </div>
            <div className="contact__text">
                <p >We don't share your info. <b>Promise</b></p>
            </div>
            <ReCAPTCHA
                sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            />
        </form>

    </div>
    );
}