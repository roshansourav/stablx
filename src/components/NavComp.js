import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import favicon from "../images/favicon.png";

import "../App.css";

function NavComp() {
    return (
        <div>
            <div id="nav-bar">
                <Navbar className="fixed-top" expand="lg">
                    <Navbar.Brand ><a id="a-brand" href="#home"><img alt="attainU-favicon" src={favicon} />AttainU</a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <NavDropdown title="Course" id="basic-nav-dropdown">

                                <NavDropdown.Item >Course Details</NavDropdown.Item>
                                <NavDropdown.Item >Live Batches</NavDropdown.Item>
                                <NavDropdown.Item >Student Projects</NavDropdown.Item>
                                <NavDropdown.Item >FAQ</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Placements" id="basic-nav-dropdown">
                                <NavDropdown.Item >Placement Details</NavDropdown.Item>
                                <NavDropdown.Item >Placement Stories</NavDropdown.Item>
                            </NavDropdown>

                            <NavDropdown title="Hire" id="basic-nav-dropdown">
                                <NavDropdown.Item >Hire from AttainU</NavDropdown.Item>
                                <NavDropdown.Item >Verify Student Status</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <Button variant="outline-warning">Apply Now</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}

export default NavComp;