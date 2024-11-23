import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div
      className="d-flex flex-column position-relative align-items-center text-white"
      style={{ paddingBottom: "10vh" }}
    >
      <Navbar />
      <Container style={{ width: "80%", paddingTop: "25vh" }}>
        <Row>
          <Col md={8} style={{ padding: "20px", textAlign: "left" }}>
            <h1>Hi, welcome to my portfolio</h1>
            <Link
              to="/about"
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
              <span>Read more about me here</span>
              <img
                src="/Right.png"
                style={{ marginLeft: "10px", width: "20px", height: "20px" }}
              />
            </Link>
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="/Selfie1.png"
              style={{
                width: "100%",
                maxWidth: "300px",
                borderRadius: "10px",
                border: "1px solid white",
                backgroundColor: "white",
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
