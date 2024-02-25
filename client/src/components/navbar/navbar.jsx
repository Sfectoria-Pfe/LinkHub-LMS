
import {Navbar , Container , Nav} from 'react-bootstrap'
function NavBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">LinkHub</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/register">Registre</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default NavBar
