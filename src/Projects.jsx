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
              src={"/Github.png"}
              className="fixed-size"
            />
            <Card.Body
              className="d-flex flex-column align-items-center"
              style={{ height: "100px" }}
            >
              <Card.Title>Project 1</Card.Title>
              <Card.Text>This is the project text</Card.Text>
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
              style={{ height: "100px" }}
            >
              <Card.Title>Project 2</Card.Title>
              <Card.Text>This is the project text</Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </Container>
    </div>
  );
}

export default Projects;
