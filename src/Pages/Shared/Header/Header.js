import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar collapseOnSelect sticky='top' expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        Tour W Alamin
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="packages" as={Link}>Packages</Nav.Link>
                            <Nav.Link to="blogs" as={Link}>Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            {/* {
                                user ?
                                    <button className='btn btn-primary' onClick={handaleSignOut}>Sign Out</button>
                                    : */}
                                    <Nav.Link eventKey={2} as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                                    {/* } */}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;