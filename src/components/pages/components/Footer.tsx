import { Container, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="justify-content-center" activeKey="/home">
          <Nav.Item>
            <Nav.Link onClick={() => { navigate('/'); }}>Home</Nav.Link>
          </Nav.Item>
          {/* <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
      </Container>
    </Navbar >
  );
}

export default Footer;