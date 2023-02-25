import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import type { } from 'redux-thunk/extend-redux';
import { AuthorizeState } from '../features/authorize/authorizeAPI';
import {
  authStatus,
  fetchToken
} from '../features/authorize/authorizeSlice';
import './Signin.css';

const Signin = () => {
  const dispatch = useAppDispatch();
  const bla = useAppSelector(authStatus);

  useEffect(() => {
    dispatch(fetchToken({ email: "kdkrastev89@gmail.com", password: "!234Qwer" }))
  }, [dispatch])

  useEffect(() => {
    console.log('accessToken, status')
    console.log(bla)
  }, [bla])

  return (
    <div className="Signin">
      <h1>Sign in</h1>
    </div>
  );
}

export default Signin;
