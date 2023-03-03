import { useEffect, useState } from 'react';
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector, useAppDispatch } from '../../../app/hooks/hooks';
import type { } from 'redux-thunk/extend-redux';
import {
  errorMessage,
  fetchToken,
  resetErrorMessage
} from '../../features/authorize/authorizeSlice';
import GoogleButton from 'react-google-button';
import { getGoogleUrl } from '../../../services/googleOauthService';
import './Signin.css';

const Signin = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errMessage = useAppSelector(errorMessage);
  const googleSigninUrl = getGoogleUrl((location.pathname as string) || '/');

  useEffect(() => {
    dispatch(resetErrorMessage());
  }, []);

  let loginWithEmail = () => {
    dispatch(fetchToken({ email, password }))
      .then((result: any) => {
        if (result.payload.success)
          navigate("/user");
      });
  };

  return (
    <div className="Signin">
      <Modal
        show centered
        aria-labelledby="contained-modal-title-vcenter"
        backdrop="static">
        <Modal.Header closeButton={false}>
          <Modal.Title id="contained-modal-title-vcenter">
            Sign in
          </Modal.Title>
        </Modal.Header>
        <Form>
          <Modal.Body style={{ paddingLeft: 80, paddingRight: 80 }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            {
              !errMessage || (
                <Alert variant="danger">
                  {errMessage}
                </Alert>
              )
            }
            <div className='email-signin-btn-container'>
              <div>
                <Button style={{ marginRight: 10 }} variant="light" onClick={() => navigate(-1)}>
                  Cancel
                </Button>
                <Button variant="warning" onClick={() => loginWithEmail()}>
                  Sign in
                </Button>
              </div>
            </div>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Or use another provider:</Form.Label>
              <GoogleButton
                style={{ width: '100%' }}
                className='google-signin-btn'
                onClick={() => { window.location.href = googleSigninUrl }}
              />
            </Form.Group>

          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="light" onClick={() => navigate(-1)}>
              Cancel
            </Button>
            <Button variant="warning" onClick={() => login()}>
              Sign in
            </Button>
          </Modal.Footer> */}
        </Form>
      </Modal>
    </div >
  );
}

export default Signin;
