import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <Navbar bg="primary" variant="dark" className="d-flex justify-content-center fs-3 sticky-top">
      <Nav className="w-100 align-items-centerer justify-content-center">
        <Link to="/" className="mx-4 px-3 py-2 rounded-5 light-hover">
          Home
        </Link>
        <Link to="/search" className="mx-4 px-3 py-2 rounded-5 light-hover">
          Search
        </Link>
      </Nav>
    </Navbar>
  );
};

export default MyNavbar;
