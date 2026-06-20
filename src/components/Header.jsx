import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

const Header = () => {
  return (
    <header className="navbar fixed-top p-3 text-bg-dark">
      {" "}
      <div className="container">
        {" "}
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          {" "}
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none px-4"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-code-slash"
              viewBox="0 0 16 16"
            >
              <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
              <use xlinkHref="#bootstrap"></use>
            </svg>{" "}
          </a>{" "}
          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            {" "}
            <li className="header">
              <a href="#home" className="nav-link px-2 text-white">
                Home
              </a>
            </li>{" "}
            <li className="header">
              <a href="#about" className="nav-link px-2 text-white">
                About
              </a>
            </li>{" "}
            <li className="header">
              <a href="#skills" className="nav-link px-2 text-white">
                Skills
              </a>
            </li>{" "}
            <li className="header">
              <a href="#projects" className="nav-link px-2 text-white">
                Projects
              </a>
            </li>{" "}
            <li className="header">
              <a href="#contact" className="nav-link px-2 text-white">
                Contact
              </a>
            </li>{" "}
          </ul>{" "}
          {/* <button>
            <MdOutlineDarkMode />
          </button> */}
        </div>{" "}
      </div>{" "}
    </header>
  );
};

export default Header;
