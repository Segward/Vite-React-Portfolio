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
        <h3>Lego Racer Teambased Collaberation</h3>
        <h4>About the project</h4>
        <p style={{ fontSize: "1.2vw" }}>
          In the course IDATT1004 we got assigned a project where we had to
          build and program a lego robot. This project was done in groups and we
          had to use the Lego Mindstorm kit, Python, Pybricks and GitLab. NTNU
          provided us with the Lego Mindstorm kit and a gitlab server to use for
          version control. The project was divided into four tasks that we had
          to complete. The first task was to make the robot drive in a square.
          The second task was to make the robot respond to a sensor that
          measured the distance to an object. My group made it turn around when
          the distance was less than a given value. The third task was to make
          the robot follow a line while giving entertainment to the user. The
          fourth task, and the most challenging one, was to make the robot
          compete in a race against another robot. Sadly enough we did not win
          because the opponent robot deployed a trap on the track.
        </p>
        <h4>Learnings & Soft Skills</h4>
        <p style={{ fontSize: "1.2vw" }}>
          Through this project we learned to use version control systems like
          GitLab, and how to work in a group. We also learned about the
          importance of git and how to use it properly. Furthermore, we learned
          how to automate tasks using Python and Pybricks. This required us to
          use our problem-solving skills and to think creatively. In this
          project we also had meetings and discussions about how to solve the
          tasks. These meetings were both formal and informal but they taught us
          how to communicate and work together as a team. We also learned how to
          divide the work between us and how to help each other when needed. For
          instance, when one of us needed feedback or help with a code problem
          we would help each other out.
        </p>
        <Link
          to="https://gitlab.stud.idi.ntnu.no/idatt1004-team-13-h2024/lego-prosjekter"
          className="no-text-decoration hover-scale mb-5"
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
          <span>Source code</span>
        </Link>
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
