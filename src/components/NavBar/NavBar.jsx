import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Cursos jlacosta</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#features">Linux principiantes</Nav.Link>
                <Nav.Link href="#pricing">Linux avanzado</Nav.Link>
              </Nav>
              <Nav>
                <CartWidget/>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </>  
    )
  }