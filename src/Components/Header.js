import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaHackerNewsSquare } from "react-icons/fa";
import "./../scss/Header.scss";


/**
 * This component is used to render the header of webpage, and consists of Hacker News Icon and text 
 * along with links for navigating between different types of stories(New, Best, Ask, Show) and jobs.
 *
 * @component Header
 * @prop None
 */

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="Header-Container">
                <Navbar.Brand
                    href="/"
                    className="Brand"
                    data-testid="hn-navbrand"
                >
                    <FaHackerNewsSquare className="Icon" />
                    <div className="Icon-Text">HACKER NEWS</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/new" className="px-3 mx-3 menu-text" data-testid="new-navlink" style={{ color: "#4D4D4D" }}>
                            NEW
                        </Nav.Link>
                        <Nav.Link href="/best" className="px-3 mx-3 menu-text" data-testid="best-navlink" style={{ color: "#4D4D4D" }}>
                            BEST
                        </Nav.Link>
                        <Nav.Link href="/ask" className="px-3 mx-3 menu-text" data-testid="ask-navlink" style={{ color: "#4D4D4D" }}>
                            ASK
                        </Nav.Link>
                        <Nav.Link href="/show" className="px-3 mx-3 menu-text" data-testid="show-navlink" style={{ color: "#4D4D4D" }}>
                            SHOW
                        </Nav.Link>
                        <Nav.Link href="/jobs" className="px-3 mx-3 menu-text" data-testid="jobs-navlink" style={{ color: "#4D4D4D" }}>
                            JOBS
                        </Nav.Link>
                        <Nav.Link href="/sorted-stories" className="px-3 mx-3 menu-text" data-testid="sorted-navlink" style={{ color: "#4D4D4D" }}>
                            SORTED
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
