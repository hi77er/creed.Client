import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { authStatus, signout } from '../../features/authorize/authorizeSlice';
import { currentUser, resetCurrentUser } from '../../features/currentUser/currentUserSlice';
import { useAppSelector, useAppDispatch } from '../../../app/hooks/hooks';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const status = useAppSelector(authStatus);
  const user = useAppSelector(currentUser);

  const logout = () => {
    dispatch(signout());
    dispatch(resetCurrentUser());
    navigate('/');
  };

  return (
    <Navbar sticky="top" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Creed</Navbar.Brand>
        <Nav>
          <Nav.Link onClick={() => { navigate("/") }}>Home</Nav.Link>
          <Nav.Link href="#features">Themes</Nav.Link>
          <Nav.Link href="#pricing">Interview</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {
              status === 'authorized' && user != null
                ? (
                  <NavDropdown
                    title={`Signed in as: ${[user.firstName, user.lastName].join(' ')}`}
                    id={`offcanvasNavbarDropdown-expand-lg`}>
                    <NavDropdown.Item onClick={() => { navigate("/user") }}>Profile</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={() => { logout(); }}>
                      Sign out
                    </NavDropdown.Item>
                  </NavDropdown>
                )
                : <Nav.Link onClick={() => { navigate("/signin"); }}>Sign in</Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;