import React from 'react'
import { Navbar, Nav, Container,Row, Col, Form, NavDropdown, FormControl, Button} from 'react-bootstrap'
import '../index.css'
import {LinkContainer} from 'react-router-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {logout_func} from '../actions/auth'

function Header() {

  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () =>{
    dispatch(logout_func())
  }

  return (
    <header>
      <Navbar fixed="top" bg="light" expand="lg">
        <Container fluid>
          <LinkContainer to='/'>
            <Navbar.Brand><img src="/images/art-logo.png" width= '70' height= '70'  className="d-inline-block align-top" alt="Art Deco Logo"/></Navbar.Brand> 
          </LinkContainer>
          {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/">Acasa</Nav.Link>
              {/* <Nav.Link href="#action2">Link</Nav.Link> */}
              <NavDropdown title="Produse" id="navbarScrollingDropdown">
                <NavDropdown.Item href="/copaci/produse/">Copaci</NavDropdown.Item>
                <NavDropdown.Item href="/tablouri/produse/">Tablouri</NavDropdown.Item>
                <NavDropdown.Item href="/ceasuri/produse/">Ceasuri</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/produse/">
                  Toate produsele
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Despre noi
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <LinkContainer to="/cos-cumparaturi/">
                <Nav.Link><i className='fas fa-shopping-cart'></i> Cos cumparaturi</Nav.Link>
            </LinkContainer>
            {/* info user, show the login icon only if the user is not logged in */}
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to = '/profil'>
                    <NavDropdown.Item>Profil</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>Iesire</NavDropdown.Item>

              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link><i className='fas fa-user'></i> Autentificare</Nav.Link>
              </LinkContainer>
            )}

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
