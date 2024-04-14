import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CustomNavbar = () => {
  return (
    <Navbar expand='lg' bg='danger' data-bs-theme='danger'>
      <Container>
        <Navbar.Brand href='/' className='text-white'>Happy Cake</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <Link className='nav-item nav-link text-white' to='/'>Home</Link>
            <Link className='nav-item nav-link text-white' to='/contacto'>Contacto</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default CustomNavbar
