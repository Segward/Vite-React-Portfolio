import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function LegoRacer() {
  return (
    <div
      className="d-flex flex-column position-relative align-items-center text-white"
      style={{ paddingBottom: "10vh" }}
    >
      <Navbar />
      <div
        style={{
          width: "80%",
          padding: "20px",
          textAlign: "left",
          paddingTop: "25vh",
        }}
      >
        <h3>Lego Alarm Clock Teambased Collaberation</h3>
        <p className="fs-5">
          Hi, my name is Gustav and I am a computer engineering student at NTNU
          in Trondheim. I develop software and have experience with programming
          languages such as C, C++, Python, Java and more. Also, I have
          experience with version control systems like Git, GitLab and GitHub.
          Other tools I use are Ghidra, Ida Pro and Cheat Engine which I use for
          reverse engineering. In the future I want to work with software
          development, preferably in the field of software security.
        </p>
        <Link
          to="/projects"
          className="no-text-decoration hover-scale"
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "white",
            color: "black",
            padding: "10px 20px",
            borderRadius: "10px",
            cursor: "pointer",
            width: "fit-content",
            marginTop: "20px",
          }}
        >
          <img
            src="/Left.png"
            style={{ marginRight: "10px", width: "20px", height: "20px" }}
          />
          <span>Return to projects</span>
        </Link>
      </div>
    </div>
  );
}

export default LegoRacer;
