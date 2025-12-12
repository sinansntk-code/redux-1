import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import img from '../image/logoooo.png';
import cart from '../image/cart.png';

export default function Header() {

  const cartCount = useSelector((state) =>
    state.cart.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <Navbar expand="lg"  style={{backgroundColor:"#F875AA"}}>
      <Container fluid>
        <Navbar.Brand><img style={{height:"60px"}} src={img} alt="logo"/></Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

          <Nav className="me-auto my-2 my-lg-0" navbarScroll>

            {/* Use Nav.Link with NavLink from router */}
            <Nav.Link style={{color:"white"}} as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link style={{color:"white"}} as={NavLink} to="/categories">Categories</Nav.Link>
            <Nav.Link style={{color:"white"}} as={NavLink} to="/login">Login</Nav.Link>
            <Nav.Link style={{color:"white"}} as={NavLink} to="/cart">
              <img height={20} src={cart} alt="logo"/> {cartCount}
            </Nav.Link>

          </Nav>

          {/* Search Bar */}
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
