import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

function About() {
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
        <h3>I'm Gustav Skyberg</h3>
        <p style={{ fontSize: "1.2vw" }}>
          I am a computer engineering student at NTNU in Trondheim. I develop
          software and have experience with programming languages such as C,
          C++, Python, Java and more. Also, I have experience with version
          control systems like Git, GitLab and GitHub. Other tools I use are
          Ghidra, Ida Pro and Cheat Engine which I use for reverse engineering.
          In the future I want to work with software development, preferably in
          the field of software security.
        </p>
        <h4 className="mt-5">These are technologies I use</h4>
        <Container style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <img src="/C.png" style={{ width: "50px", height: "50px" }} />
          <img src="/C++.png" style={{ width: "50px", height: "50px" }} />
          <img src="/Python.png" style={{ width: "50px", height: "50px" }} />
          <img src="/Java.png" style={{ width: "50px", height: "50px" }} />
          <img
            src="/JavaScript.png"
            style={{ width: "50px", height: "50px" }}
          />
          <img src="/HTML.png" style={{ width: "50px", height: "50px" }} />
          <img src="/CSS.png" style={{ width: "50px", height: "50px" }} />
          <img src="/Lua.png" style={{ width: "50px", height: "50px" }} />
          <img src="/React.png" style={{ width: "50px", height: "50px" }} />
          <img src="/Maven.png" style={{ width: "50px", height: "50px" }} />
          <img src="/GCC.png" style={{ width: "50px", height: "50px" }} />
          <img src="/OpenCV.png" style={{ width: "50px", height: "50px" }} />
          <img src="/Vite.png" style={{ width: "50px", height: "50px" }} />
          <img src="/Git.png" style={{ width: "50px", height: "50px" }} />
          <img src="/Gitlab.png" style={{ width: "50px", height: "50px" }} />
          <img src="/Github2.png" style={{ width: "50px", height: "50px" }} />
          <img src="/Ghidra.png" style={{ width: "50px", height: "50px" }} />
          <img src="/IdaPro.png" style={{ width: "50px", height: "50px" }} />
          <img
            src="/CheatEngine.png"
            style={{ width: "50px", height: "50px" }}
          />
        </Container>
        <Link
          to="/projects"
          className="mt-5 no-text-decoration hover-scale"
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
          <span>Check out my projects here</span>
          <img
            src="/Right.png"
            style={{ marginLeft: "10px", width: "20px", height: "20px" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default About;
