import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './app/store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from './components/pages/Landing';
import Signin from './components/pages/auth/Signin';
import Signup from './components/pages/auth/Signup';
import ForgotPassword from './components/pages/auth/ForgotPassword';
import Profile from './components/pages/user/Profile';
import reportWebVitals from './reportWebVitals';
import Header from './components/pages/components/Header';
import Footer from './components/pages/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const router = createBrowserRouter([
  { path: "/", element: <><Header /><Landing /><Footer /></> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  { path: "/forgot", element: <ForgotPassword /> },
  { path: "/user", element: <><Header /><Profile /><Footer /></> },
]);

ReactDOM
  .createRoot(document.getElementById('root')!)
  .render(
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <RouterProvider router={router} />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
