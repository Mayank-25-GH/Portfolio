import { BsAlignCenter } from "react-icons/bs";

const About = () => {
  return (
    <section className="container px-4 py-5" id="about">
      {" "}
      <h1 className="pb-2 border-bottom" style={{ textAlign: "center" }}>
        <b>
          About <span className="text-primary"> Me </span>
        </b>
      </h1>{" "}
      <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
        {" "}
        <div className="col d-flex flex-column gap-2">
          {" "}
          <h2
            className="fw-bold text-body-emphasis"
            style={{ textAlign: "center" }}
          >
            Learning, building, and improving every day.
          </h2>{" "}
          <p className="text-body-secondary" style={{ textAlign: "center" }}>
            I am a Full-Stack Developer with practical experience in modern web
            technologies such as JavaScript, TypeScript, React, Node.js, NextJs
            and Python. I specialize in building scalable, maintainable
            applications while emphasizing clean architecture, performance, and
            reliability.
          </p>{" "}
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            {" "}
            <button type="button" className="btn btn-primary btn-lg px-4 gap-3">
              <a href="#contact" className="nav-link px-2 text-white">
                Get in touch
              </a>
            </button>{" "}
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              <a href="#projects" className="nav-link px-2 text-dark">
                Projects
              </a>
            </button>{" "}
          </div>{" "}
        </div>{" "}
        <div className="grid grid-cols-1 gap-6">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-code h-6 w-6 text-primary"
                  aria-hidden="true"
                >
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  {" "}
                  Full-Stack Web Developer
                </h4>
                <p className="text-muted-foreground">
                  Building scalable and high-performance applications using the
                  MERN stack and modern web technologies.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user h-6 w-6 text-primary"
                  aria-hidden="true"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Problem Solver</h4>
                <p className="text-muted-foreground">
                  Designing efficient and elegant solutions to tackle complex
                  challenges with code and creativity.
                </p>
              </div>
            </div>
          </div>
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-briefcase h-6 w-6 text-primary"
                  aria-hidden="true"
                >
                  <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  <rect width="20" height="14" x="2" y="6" rx="2"></rect>
                </svg>
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">
                  Leadership &amp; Project Management
                </h4>
                <p className="text-muted-foreground">
                  Driving projects from idea to execution while leading teams
                  with collaboration and agile practices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </section>
  );
};

export default About;
