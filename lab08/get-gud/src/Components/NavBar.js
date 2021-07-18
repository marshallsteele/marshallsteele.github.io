import '../App.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = ( {language} ) => {
    return ( 
        <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand className="logo" as={Link} to="/">GG</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav>
                <Nav.Link as={Link} to="/boosters">Boosters</Nav.Link>
                <Nav.Link as={Link} to="/guides">Guides</Nav.Link>
                <Nav.Link as={Link} to="/help">{language === "eng" ? <div>Help</div> : <div>Aider</div>}</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;