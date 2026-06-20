import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [currentState, setCurrentState] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    setCurrentState(true);

    try {
      await emailjs
        .sendForm(
          "service_gblujva",
          "template_gmlsuhl",
          form.current,
          "JLA7s-CCdD1rkauvP",
        )
        .then(
          () => {
            alert("Message sent successfully!");
          },
          (error) => {
            console.log(error.text);
          },
        )
        .then(() => {
          form.current.reset();
        });
    } finally {
      setCurrentState(false);
    }
  };

  return (
    <section className="container mx-auto max-w-5xl py-5 px-4" id="contact">
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center pb-2">
        <b>
          Get In <span className="text-primary"> Touch</span>
        </b>
      </h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Got a project or idea? Let's build something amazing together!
      </p>
      <div
        className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5"
        style={{ width: "1300px" }}
      >
        <div className="container my-5">
          <div className="text-center">
            <h2 className="fw-bold mb-4">Contact Information</h2>
            <br />

            <div className="d-flex flex-column gap-3 align-items-center">
              <p className="fs-5 mb-0">
                📧 <strong>Email:</strong> <br />
                <a
                  href="mailto:yourname@example.com"
                  className="text-decoration-none"
                >
                  mayankparashar2508@gmail.com
                </a>
              </p>

              <p className="fs-5 mb-0">
                📱 <strong>Phone:</strong> <br />
                <a href="tel:+919458349099" className="text-decoration-none">
                  +91 9458349099
                </a>
              </p>

              <p className="fs-5 mb-0">
                📍 <strong>Location:</strong> <br />
                Delhi, India
              </p>

              <div className="d-flex gap-4 justify-content-center align-items-center mt-3">
                <a
                  href="https://linkedin.com/in/mayank-parashar-526727306"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                  title="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-primary"
                  >
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.77.62-1.4 1.4-1.4.77 0 1.4.63 1.4 1.4v4.34h2.5M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69-.93 0-1.69.76-1.69 1.69 0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.5H5.5v8.5h2.77z" />
                  </svg>
                </a>

                <a
                  href="https://github.com/Mayank-25-GH"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                  title="GitHub"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="card mb-3 p-4"
          style={{ width: "520px" }}
        >
          <h4 className="text-center">
            <b>Send Message</b>
          </h4>
          <br />
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-center"
          >
            Name
          </label>
          <input
            name="user_name"
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Your Name"
            required
          />
          <br />

          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-center"
          >
            Your Email
          </label>
          <input
            name="user_email"
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
            required
          />
          <br />

          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label text-center"
          >
            Your Message
          </label>
          <textarea
            name="message"
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Hi Mayank, I'd like to talk about..."
            required
          />
          <br />
          <button
            type="submit"
            className="btn btn-primary p-2"
            disabled={currentState}
          >
            {currentState ? <b>Sending...</b> : <b>Send Message</b>}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send"
              aria-hidden="true"
            >
              <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
              <path d="m21.854 2.147-10.94 10.939"></path>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
