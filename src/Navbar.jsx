import { Link } from "react-router-dom";

function Navbar({ active }) {
  return (
    <ul
      className="nav justify-content-center align-items-center"
      style={{
        position: "fixed",
        backgroundColor: "azure",
        right: "0",
        width: "400px",
        height: "80px",
        zIndex: "2",
        gap: "10px",
        borderBottomLeftRadius: "10px",
      }}
    >
      <li className="nav-item">
        <Link className="nav-link" to="/">
          <h3 className="m-0">Home</h3>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/about">
          <h3 className="m-0">About</h3>
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/projects">
          <h3 className="m-0">Projects</h3>
        </Link>
      </li>
    </ul>
  );
}

export default Navbar;
