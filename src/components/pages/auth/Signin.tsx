import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { Alert, Button, Form, Modal } from 'react-bootstrap';
import {
  FacebookLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  // MicrosoftLoginButton,
} from "react-social-login-buttons";
import type { } from 'redux-thunk/extend-redux';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { getFacebookUrl } from '../../../services/facebookOauthService';
import { getGithubUrl } from '../../../services/githubOauthService';
import { getGoogleUrl } from '../../../services/googleOauthService';
import { errorMessage, fetchToken, resetErrorMessage } from '../../features/authorize/authorizeSlice';
import './Signin.css';

const Signin = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const errMessage = useAppSelector(errorMessage);
  const facebookSigninUrl = getFacebookUrl((location.pathname as string) || '/');
  const githubSigninUrl = getGithubUrl((location.pathname as string) || '/');
  const googleSigninUrl = getGoogleUrl((location.pathname as string) || '/');

  useEffect(() => {
    dispatch(resetErrorMessage());
  }, [dispatch]);

  let loginWithEmail = (e: string, p: string) => {
    dispatch(fetchToken({ email: e, password: p }))
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
                <Button style={{ marginRight: 10 }} variant="warning" onClick={() => loginWithEmail(email, password)}>
                  Sign in
                </Button>
                <Button variant="primary" onClick={() => loginWithEmail("kdkrastev89@gmail.com", "!234Qwer")}>
                  Shortcut
                </Button>
              </div>
            </div>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Use another provider:</Form.Label>
              <GithubLoginButton onClick={() => { window.location.href = githubSigninUrl }} style={{ marginBottom: 15 }} />
              {/* <MicrosoftLoginButton onClick={() => { window.location.href = facebookSigninUrl }} /> */}
              <FacebookLoginButton onClick={() => { window.location.href = facebookSigninUrl }} style={{ marginBottom: 15 }} />
              <GoogleLoginButton onClick={() => { window.location.href = googleSigninUrl }} />
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