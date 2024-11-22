import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function LegoAlarmClock() {
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
        <h4>About the project</h4>
        <p style={{ fontSize: "1.5vw" }}>
          In the course teambased collaberation (IDATT1004) each group got
          assigned a final project. In this final project we had to utilize what
          we previously had learned from the course. The project was about
          making a product that was both sustainable and useful for society. My
          group made a Lego alarm clock with the ev3 mindstorm kit and micro
          python with the goal of making it easier for people to wake up in the
          morning.
        </p>
        <h4>Process</h4>
        <p style={{ fontSize: "1.5vw" }}>
          We developed an alarm clock with intentionally irritating features
          designed to ensure users wake up in the morning. Initially, we
          implemented the project using Java on the EV3dev robot, utilizing the
          EV3-dev-java bindings and LeJOS library, under the assumption that the
          Java Virtual Machine (JVM) would offer faster performance and superior
          threading capabilities compared to MicroPython. However, this
          assumption was debunked, leading us to switch back to MicroPython. The
          alarm clock consisted of several systems, including a movement system,
          a menu system, and an alarm system. To make the workflow more
          efficient, we divided tasks among smaller working groups, assigning
          specific responsibilities to each team member. This distribution
          resulted in unequal workloads, as some tasks were more complex than
          others. The physical robot, built using LEGO components and
          conceptualized through brainstorming, featured an ultrasonic sensor, a
          drop mechanism, two motorized wheels, and two supporting wheels.
          Despite encountering challenges, such as the speaker volume being too
          low and insufficient time to implement a multiple-choice math question
          system, we were ultimately satisfied with the final outcome.
        </p>
        <h4>Learnings & Soft Skills</h4>
        <p style={{ fontSize: "1.5vw" }}>
          Throughout the project, we learned the importance of structured
          working groups, clear organization, and effective workload delegation.
          Both formal and informal meetings, such as standups, helped us track
          progress and address challenges. We gained hands-on experience with
          SCRUM, a framework that uses empirical processes for adapting
          projects, and utilized collaboration tools like GitLab and OneDrive
          for efficient version control and file sharing. These experiences
          taught us skills that are directly applicable to future work,
          particularly in programming and teamwork. One key takeaway was the
          importance of researching technologies ahead of time to minimize
          unnecessary rework.
        </p>
        <Link
          to="https://gitlab.stud.idi.ntnu.no/idatt1004-team-13-h2024/prosjekt-lego"
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
        <h4>Video of the product</h4>
        <video width="30%" controls>
          <source src="/LegoAlarmClock.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p style={{ fontSize: "1.5vw" }}></p>
        <Link
          to="/projects"
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

export default LegoAlarmClock;
