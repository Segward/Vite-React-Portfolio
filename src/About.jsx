import Navbar from "./Navbar";

function About() {
  return (
    <div
      className="d-flex flex-column position-relative align-items-center text-white"
      style={{ paddingBottom: "10vh" }}
    >
      <Navbar />
      <h1 style={{paddingTop: "15vh"}}>About Me</h1>
    </div>
  );
}

export default About;
