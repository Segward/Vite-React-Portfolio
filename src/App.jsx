import Navbar from "./Navbar";

function App() {
  return (
    <div
      className="d-flex flex-column position-relative align-items-center text-white"
      style={{ paddingBottom: "10vh" }}
    >
      <Navbar />
      <h1 className="pt-5 mt-5">Home Page</h1>
    </div>
  );
}

export default App;
