import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import Cart from "./Cart";
import logo from "/images/E-11.png";

const Nb = () => {
  return (
    <Navbar expand="lg" className="p-4 justify-content-between">
      <Navbar.Brand href="#home">
        <img src={logo} alt="business logo" height={40} width={40} />
      </Navbar.Brand>
      <Cart />
    </Navbar>
  );
};

export default Nb;
