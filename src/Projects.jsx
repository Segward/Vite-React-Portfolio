import { Link } from "react-router-dom";
import { Card, Container } from "react-bootstrap";
import Navbar from "./Navbar";

function Projects() {
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
        <h1 style={{fontSize: "2.5rem"}}>These are my projects</h1>
      </div>
      <Container className="projects-grid">
        <Link to={"/lego-alarm-clock"} className="no-text-decoration">
          <Card className="bg-dark text-white hover-scale">
            <Card.Img
              variant="top"
              src={"/LegoRobot.png"}
              className="fixed-size"
            />
            <Card.Body
              className="d-flex flex-column align-items-center"
              style={{ height: "150px" }}
            >
              <Card.Title>Lego Alarm Clock Teambased Collaberation</Card.Title>
              <Card.Text>
                We made a lego alarm clock with ev3 mindstorm kit and micro
                python.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to={"/lego-racer"} className="no-text-decoration">
          <Card className="bg-dark text-white hover-scale">
            <Card.Img
              variant="top"
              src={"/LegoRobot.png"}
              className="fixed-size"
            />
            <Card.Body
              className="d-flex flex-column align-items-center"
              style={{ height: "150px" }}
            >
              <Card.Title>Lego Racer Teambased Collaberation</Card.Title>
              <Card.Text>
                We made a lego racer robot with ev3 mindstorm kit and micro
                python.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link
          to={"/exercises-folder-assignment"}
          className="no-text-decoration"
        >
          <Card className="bg-dark text-white hover-scale">
            <Card.Img
              variant="top"
              src={"/Github1.png"}
              className="fixed-size"
            />
            <Card.Body
              className="d-flex flex-column align-items-center"
              style={{ height: "150px" }}
            >
              <Card.Title>
                Exercises & Folder Assignment Programming 1
              </Card.Title>
              <Card.Text>
                In Programming 1 we used java to do 11 exercises and 1 folder
                assignment.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Container>
    </div>
  );
}

export default Projects;
