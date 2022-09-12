import React from 'react'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useSelector } from 'react-redux';
import Checkout from '../checkout';
import Search from "../images/search_icon.svg"
// import Logos from "../images/logo.jpg"
import "./Header.css"

function Header() {
    const [modalShow, setModalShow] = React.useState(false);

  const Productcount = useSelector((state) => state.DetailsReducer.Productcount);

  return (
    <div>
    {/* <Checkout/> */}
     <Checkout
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
        <Navbar  bg="light" expand='md' className="mb-3">
          <Container fluid>
            {/* <img src={Logos}/> */}
           
            <Navbar.Brand href="#">Shopcroc</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-md`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-md`}
              aria-labelledby={`offcanvasNavbarLabel-expand-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                Shopcroc
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Form className="d-flex search_card">
                  <Form.Control
                    type="search"
                    placeholder="Search Products..."
                    className="me-2"
                    aria-label="Search"
                  />
                  <img alt="search_icon" src={Search} className="search_icon"/>
                </Form>
                <Nav className="justify-content-end navbar_pages flex-grow-1 pe-3">
                <NavDropdown
                    title="My Account"
                    id={`offcanvasNavbarDropdown-expand-md`}
                  >
                    <NavDropdown.Item href="#action6">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action7">
                      Details
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action8">
                      Log Out
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Fashion</Nav.Link>
                  <Nav.Link href="#action3">Gadgets</Nav.Link>
                  <Nav.Link href="#action3">
                 <img onClick={() => setModalShow(true)} className='add_Cart' alt="icons" src="https://cdn-icons-png.flaticon.com/512/70/70021.png"/>
                  </Nav.Link>
                 <span>{Productcount && Productcount.count}</span>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    </div>
  )
}

export default Header