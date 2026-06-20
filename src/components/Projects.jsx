import { projects } from "../data/project";

const Projects = () => {
  return (
    <section
      className="container mx-auto max-w-5xl py-5 px-4"
      id="projects"
    >
      <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center pb-2">
        <b>
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </b>
      </h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Here are some of my recent projects. Each project was carefully crafted
        with attention to detail, performance, and user experience.
      </p>

      <section id="projects" className="container py-5">
        <div className="row g-4">
          {projects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div className="card h-100 shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                  style={{
                    height: "200px",
                    objectFit: "cover",
                  }}
                />

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>

                  <p className="card-text">{project.description}</p>

                  <div className="mb-3">
                    {project.tech.map((item) => (
                      <span key={item} className="badge bg-primary me-2">
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-dark me-2"
                    >
                      GitHub
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Projects;
