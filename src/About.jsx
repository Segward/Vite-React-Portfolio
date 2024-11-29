import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

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
        <Container>
          <Row>
            <Col md={6} style={{ padding: "5px", textAlign: "left" }}>
              <h2>I'm Gustav Skyberg</h2>
              <p style={{ fontSize: "1.1rem" }}>
                I am a computer engineering student at NTNU in Trondheim. I
                develop software and have experience with programming languages
                such as C, C++, Python, Java and more. Also, I have experience
                with version control systems like Git, GitLab and GitHub. Other
                tools I use are Ghidra, Ida Pro and Cheat Engine which I use for
                reverse engineering. My hobbies, other than programming, are
                reading manga, manwha, manhua, watching anime, playing video
                games and listening to music on my hifiman edition xs headset
                with a topping l30ii and e30ii stack. Also, I love cats a lot!!!
              </p>
              <h3 className="mt-5">Future plans</h3>
              <p style={{ fontSize: "1.1rem" }}>
                I plan on taking a master's degree in computer technology or
                cybersecurity. This will be done after I have finished my
                bachelor's degree in computer engineering.
              </p>

              <h3 className="mt-5">What my dream job would be</h3>
              <p style={{ fontSize: "1.1rem" }}>
                I am interested in working with software development, reverse
                engineering and cyber security. I have a passion for low level
                programming and operating systems. Becuase of this a dream job
                for me would be a job where I get to work close to the hardware
                and operating system.
              </p>
            </Col>
            <Col
              md={6}
              className="d-flex justify-content-center align-items-center"
            >
              <img
                src="/Selfie2.png"
                className="rounded"
                style={{ width: "50%", maxWidth: "500px", height: "auto" }}
              />
            </Col>
          </Row>
        </Container>
        <h3 className="mt-5">These are some of the technologies I use </h3>
        <Container style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <img src="/C.png" style={{ width: "60px", height: "60px" }} />
          <img src="/C++.png" style={{ width: "60px", height: "60px" }} />
          <img src="/Python.png" style={{ width: "60px", height: "60px" }} />
          <img src="/Java.png" style={{ width: "60px", height: "60px" }} />
          <img src="/Lua.png" style={{ width: "60px", height: "60px" }} />
          <img src="/JS.png" style={{ width: "60px", height: "60px" }} />
          <img src="/HTML.png" style={{ width: "60px", height: "60px" }} />
          <img src="/CSS.png" style={{ width: "60px", height: "60px" }} />
          <img src="/React.png" style={{ width: "60px", height: "60px" }} />
          <img src="/Bootstrap.png" style={{ width: "60px", height: "60px" }} />
          <img src="/Node.png" style={{ width: "60px", height: "60px" }} />
          <img src="/Vite.png" style={{ width: "60px", height: "60px" }} />
          <img src="/Express.png" style={{ width: "60px", height: "60px" }} />
          <img src="/Curl.png" style={{ width: "60px", height: "60px" }} />
          <img src="/OpenCV.png" style={{ width: "60px", height: "60px" }} />
          <img src="/Shell.png" style={{ width: "60px", height: "60px" }} />
          <img src="/Bat.png" style={{ width: "60px", height: "60px" }} />
          <img src="/Ghidra.png" style={{ width: "60px", height: "60px" }} />
          <img src="/IdaPro.png" style={{ width: "60px", height: "60px" }} />
          <img src="/CE.png" style={{ width: "60px", height: "60px" }} />
          <img src="/GCC.png" style={{ width: "60px", height: "60px" }} />
        </Container>
        <h3 className="mt-5">I use these operating systems</h3>
        <Container style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <img
            src="/Windows.png"
            className="rounded"
            style={{ width: "60px", height: "60px" }}
          />
          <img
            src="/Sonoma.png"
            className="rounded"
            style={{ width: "60px", height: "60px" }}
          />
        </Container>
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
            marginTop: "5vh",
          }}
        >
          <span>Check out my projects here</span>
          <img
            src="/Right.png"
            alt="Right arrow"
            style={{ marginLeft: "10px", width: "20px", height: "20px" }}
          />
        </Link>
      </div>
    </div>
  );
}

export default About;
