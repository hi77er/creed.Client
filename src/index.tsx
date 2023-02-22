import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from './components/pages/Landing';
import Signin from './components/pages/Signin';
import Signup from './components/pages/Signup';
import ForgotPassword from './components/pages/ForgotPassword';
import reportWebVitals from './reportWebVitals';
import Header from './components/pages/components/Header';
import Footer from './components/pages/components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const router = createBrowserRouter([
  { path: "/", element: <Landing /> },
  { path: "/signin", element: <Signin /> },
  { path: "/signup", element: <Signup /> },
  { path: "/forgot", element: <ForgotPassword /> },
]);

ReactDOM
  .createRoot(document.getElementById('root')!)
  .render(
    <React.StrictMode>
      <Provider store={store}>
        <Header />
        <RouterProvider router={router} />
        <Footer />
      </Provider>
    </React.StrictMode>
  );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
