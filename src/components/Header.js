import { LinkContainer } from 'react-router-bootstrap';
import {
  Navbar, Container, Nav,
} from 'react-bootstrap';
import logo from '../assets/logo.png';

const Header = () => {
  const links = [
    {
      name: 'Rockets',
      path: '/rockets',
    },
    {
      name: 'Missions',
      path: '/missions',
    },
    {
      name: 'Dragons',
      path: '/dragons',
    },
    {
      name: 'MyProfile',
      path: 'my-profile',
    },
  ];
  const NavComps = links.map(({ name, path }) => (
    <LinkContainer to={path} key={name} activeClassName="active-link">
      <Nav.Item as="li">
        <Nav.Link variant="primary" href={path}>{name}</Nav.Link>
      </Nav.Item>
    </LinkContainer>
  ));
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="primary" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand className="brand">
            <img src={logo} alt="alt" height="50" className="me-2" />
            <span>Space Travelers &apos; Hub</span>
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {NavComps}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
