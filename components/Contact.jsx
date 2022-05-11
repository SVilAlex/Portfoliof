import styled from "styled-components";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import isEmail from "validator/lib/isEmail";
import ReCAPTCHA from "react-google-recaptcha";
import DOMPurify from "dompurify";
import emailjs from "emailjs-com";
import { useState, useEffect } from "react";

const Contact = () => {
  const [_document, set_document] = useState(null);
  const [value, setValue] = useState(null);
  const [emailValidate, setEmailValidate] = useState(null);

  useEffect(() => {
    set_document(document);
  }, []);

  // Handle Input
  const handleChange = (e) => {
    document.getElementById(e.target.id).value = DOMPurify.sanitize(
      e.target.value
    );
    if (e.target.id === "email") setEmailValidate(e.target.value);
  };

  const handleRecaptcha = (value) => setValue(value);

  function sendEmail(e) {
    let settings = {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };
    e.preventDefault();

    // Recaptcha not Validate
    !value &&
      toast.warn("Merci de confirmer que vous étes un humain!", settings);

    // Email not right
    !isEmail(_document.querySelector("#email").value) &&
      toast.warn("Merci de renseigner un email valide", settings);

    if (value && isEmail(emailValidate)) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          e.target,
          process.env.NEXT_PUBLIC_EMAILJS_USER_ID
        )
        .then(
          (result) => {
            toast.success(
              "Merci de m'avoir contacter, je reviens vers vous dans les plus bref délais ! ",
              settings
            );
          },
          (error) => {
            toast.error(
              "Il y a eu une error de l'envoie de votre message, merci de contacter par email alexpierre995@gmail.com",
              settings
            );
          }
        )
        .catch((error) => console.log(error));

      // Reset form's fields
      e.target.reset();
    }
  }

  return (
    <Container id="contact">
      <h2>Contactez moi</h2>

      <Form onSubmit={sendEmail}>
        <div>
          <label htmlFor="name">Nom</label>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Insérer votre Nom"
            name="name"
            id="name"
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={handleChange}
            type="email"
            placeholder="Insérer votre Email"
            name="email"
            id="email"
          />
        </div>

        <div className="textarea">
          <label htmlFor="name">Message</label>
          <textarea
            onChange={handleChange}
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Ecrire votre message"
          ></textarea>
        </div>
        <ReCAPTCHA
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITEKEY}
          onChange={handleRecaptcha}
        />
        <button className="box">Envoyer</button>
      </Form>
      <ToastContainer />
    </Container>
  );
};

const Container = styled.section`
  margin: 4rem 2rem 2rem;

  h2 {
    font-size: var(--h2-font-size);
    color: var(--first-color);
    margin-bottom: 1rem;
  }
`;

const Form = styled.form`
  display: grid;
  justify-content: center;
  div {
    width: 20rem;
    height: 4rem;
    position: relative;
    margin-bottom: 2rem;
    label {
      position: absolute;
      top: -0.75rem;
      left: 1.25rem;
      font-size: var(--small-font-size);
      background-color: var(--body-color);
      z-index: 10;
    }
    input,
    textarea {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 2px solid var(--text-color-light);
      background: none;
      color: var(--text-color);
      outline: none;
      padding: 1.5rem;
      border-radius: 0.75rem;
      z-index: 1;
    }
    textarea {
      resize: none;
    }
  }
  .textarea {
    height: 11rem;
  }

  button {
    display: inline-block;
    background-color: var(--first-color);
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;
    font-weight: var(--font-medium);
    transition: 0.4s;
    a {
      color: whitesmoke;
    }
    &:hover {
      background-color: var(--first-color-alt);
    }
    &:hover a {
      color: var(--body-color);
    }
  }
`;

export default Contact;
