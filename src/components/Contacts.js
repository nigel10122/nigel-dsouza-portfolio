import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

const Contacts = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_10122";
  const templateID = "template_10122";
  const userID = "user_FvU8o71sfPlQZF2JaGvNl";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage("Form sent successfully! I'll contact you as soon as possible.");
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <div id="contacts" className="contacts" style={{ backgroundColor: '#f9f9f9', padding: '50px 0' }}>
      <div className="text-center">
        <h1 style={{ color: '#f9ab00', fontWeight: 'bold' }}>Contact Me</h1>
        <span className="success-message" style={{ color: 'green' }}>{successMessage}</span>
      </div>
      <div className="container mt-4">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Name"
                name="name"
                ref={register({
                  required: "Please enter your name",
                  maxLength: {
                    value: 20,
                    message: "Please enter a name with fewer than 20 characters"
                  }
                })}
              />
              <span className="error-message text-danger">{errors.name && errors.name.message}</span>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Phone Number"
                name="phone"
                ref={register({ required: "Please add your phone number" })}
              />
              <span className="error-message text-danger">{errors.phone && errors.phone.message}</span>

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                name="email"
                ref={register({
                  required: "Please provide your email",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              <span className="error-message text-danger">{errors.email && errors.email.message}</span>

              <input
                type="text"
                className="form-control mb-3"
                placeholder="Subject"
                name="subject"
                ref={register({ required: "Please add a subject" })}
              />
              <span className="error-message text-danger">{errors.subject && errors.subject.message}</span>
            </div>

            <div className="col-md-6">
              <textarea
                rows="8"
                className="form-control mb-3"
                placeholder="Describe your project needs..."
                name="description"
                ref={register({ required: "Please describe your project" })}
              ></textarea>
              <span className="error-message text-danger">{errors.description && errors.description.message}</span>
              <button className="btn btn-warning btn-block font-weight-bold mt-3" type="submit">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
