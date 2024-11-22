import { Link } from "react-router-dom";
import { Container, Card } from "react-bootstrap";
import Navbar from "./Navbar";

function Projects() {
  return (
    <div
      className="d-flex flex-column position-relative align-items-center text-white"
      style={{ paddingBottom: "10vh" }}
    >
      <Navbar />
      <h1 style={{ paddingTop: "15vh" }}>Projects</h1>
      <Container className="pt-5 projects-grid">
        <Link to={"/lego-alarm-clock"} className="no-text-decoration">
          <Card className="bg-dark text-white card-hover-scale">
            <Card.Img
              variant="top"
              src={"/LegoRobot.png"}
              className="fixed-size"
            />
            <Card.Body
              className="d-flex flex-column align-items-center"
              style={{ height: "200px" }}
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
          <Card className="bg-dark text-white card-hover-scale">
            <Card.Img
              variant="top"
              src={"/LegoRobot.png"}
              className="fixed-size"
            />
            <Card.Body
              className="d-flex flex-column align-items-center"
              style={{ height: "200px" }}
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
          <Card className="bg-dark text-white card-hover-scale">
            <Card.Img
              variant="top"
              src={"/Github.png"}
              className="fixed-size"
            />
            <Card.Body
              className="d-flex flex-column align-items-center"
              style={{ height: "200px" }}
            >
              <Card.Title>
                Exercises and Folder Assignment Programming 1
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
