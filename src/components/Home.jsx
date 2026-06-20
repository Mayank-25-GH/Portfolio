const Home = () => {
  return (
    <section
      className="d-flex flex-column justify-content-center align-items-center text-center vh-100"
      id="home"
      style={{ minHeight: "90vh" }}
    >
      {" "}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        fill="currentColor"
        className="bi bi-code-slash"
        viewBox="0 0 16 16"
      >
        <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
      </svg>
      <h1 className="display-5 fw-bold text-body-emphasis">
        Hi, I'm <span className="text-primary"> Mayank </span> Parashar
      </h1>{" "}
      <div className="col-lg-6 mx-auto">
        {" "}
        <p className="lead mb-4">
          Building robust web applications with modern technologies.
        </p>{" "}
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
          {" "}
          <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
            <a href="#projects" className="nav-link px-2 text-white">
              Projects
            </a>
          </button>{" "}
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg px-4"
          >
            <a href="#projects" className="nav-link px-2 text-dark">
              Resume
            </a>
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  );
};

export default Home;
