import Navbar from "./Navbar";

function LegoAlarmClock() {
  return (
    <div
      className="d-flex flex-column position-relative align-items-center text-white"
      style={{ paddingBottom: "10vh" }}
    >
      <Navbar />
      <h1 style={{paddingTop: "15vh"}}>Lego Alarm Clock Teambased Collaberation</h1>
    </div>
  );
}

export default LegoAlarmClock;
