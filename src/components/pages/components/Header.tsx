import { useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { authStatus, signout } from '../../features/authorize/authorizeSlice';
import { currentUser, loginProvider, resetCurrentUser } from '../../features/currentUser/currentUserSlice';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import './Header.css';

const Header = () => {
  const [signedInLabel, setSignedInLabel] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const status = useAppSelector(authStatus);
  const user = useAppSelector(currentUser);
  const provider = useAppSelector(loginProvider);

  useEffect(() => {
    setSignedInLabel(
      provider === 'facebook'
        || provider === 'github'
        || provider === 'google'
        ? `with ${provider.charAt(0).toUpperCase() + provider.slice(1)}`
        : ''
    );
  }, [provider]);

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
          {/* <Nav.Link href="#features">Themes</Nav.Link>
          <Nav.Link href="#pricing">Interview</Nav.Link> */}
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            {
              status === 'authorized' && user != null
                ? (
                  <NavDropdown
                    title={`Signed in ${signedInLabel}: ${[user.firstName, user.lastName].join(' ')}`}
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