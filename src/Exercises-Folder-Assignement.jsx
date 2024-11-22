import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function ExercisesFolderAssignment() {
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
        <h3>Exercises & Folder Assignment Programming 1</h3>
        <h4>About the exercises</h4>
        <p style={{ fontSize: "1.2vw" }}>
          We got assigned 11 exercises which introduced us to the basics of
          programming in Java. These gradually increased in difficulty and
          complexity.
        </p>
        <Link
          to="https://github.com/Segward/Exercises-IDATT1003"
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
        <h4>Folder Assignment</h4>
        <p style={{ fontSize: "1.2vw" }}>
          The folder assignment was about making a grocery storage system where
          you could register, remove, list groceries and more. We also had to
          implement recipies and cooking books. The enduser should be able to
          check what they had in storage and what they could make with the
          ingredients they had. The project was made in Java with a maven
          project structure. We also had to make full test coverage with Junit.
        </p>
        <Link
          to="https://github.com/NTNU-IDI/idatt1003-mappe-2024-Segward"
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

export default ExercisesFolderAssignment;
