import ProgressBar from "react-bootstrap/ProgressBar";
import { skills } from "../data/skills";
import { useState } from "react";

const Skills = () => {
  const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <section
      className="container px-4 py-5"
      style={{ marginBottom: "50px" }}
      id="skills"
    >
      <div>
        <h1 className="pb-2 border-bottom" style={{ textAlign: "center" }}>
          <b>
            My <span className="text-primary"> Skills </span>
          </b>
        </h1>{" "}
      </div>

      <div className="skills-category">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className="btn btn-primary button"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="container">
        <div className="row g-4">
          {filteredSkills.map((skill) => (
            <div key={skill.id} className="col-12 col-sm-6 col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{skill.name}</h5>
                  <ProgressBar animated now={Number(skill.progress)} />
                  <div className="mt-2 text-end">
                    <span>
                      {skill.progress}
                      {"%"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
