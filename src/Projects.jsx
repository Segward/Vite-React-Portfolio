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
      <h1 className="pt-5 mt-5">Home Page</h1>
      <Container className="pt-5 projects-grid">
        <Link to={"/"} className="no-text-decoration">
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
              <Card.Title>Semester Project IDATT1004</Card.Title>
              <Card.Text>We made a lego alarmclock with EV3 mindstorm kit and micro python.</Card.Text>
            </Card.Body>
          </Card>
        </Link>
        <Link to={"/"} className="no-text-decoration">
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
              <Card.Title>Folder Assignment IDATT1003</Card.Title>
              <Card.Text>I made a grocery and foodstorage program with registers in a java maven project.</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Container>
    </div>
  );
}

export default Projects;
