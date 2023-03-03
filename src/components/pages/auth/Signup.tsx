import { Button, Modal } from 'react-bootstrap';
import './Signup.css';

// or less ideally
const Signup = () => {
  return (
    <div className="Signup">
      <Modal
        show centered
        aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton={false}>
          <Modal.Title id="contained-modal-title-vcenter">
            Sign up
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => console.log('click')}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Signup;
