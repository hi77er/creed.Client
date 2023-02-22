import logo from './logo.svg';
import { Counter } from '../features/counter/Counter';
import { Container } from 'react-bootstrap';
import './Landing.css';

const Landing = () => {
  return (
    <Container>
      <div className="Landing">
        <header className="Landing-header">
          <img src={logo} className="Landing-logo" alt="logo" />
          <Counter />
          <p>
            Edit <code>src/Landing.tsx</code> and save to reload.
          </p>
          <span>
            <span>Learn </span>
            <a
              className="Landing-link"
              href="https://reactjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </a>
            <span>, </span>
            <a
              className="Landing-link"
              href="https://redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux
            </a>
            <span>, </span>
            <a
              className="Landing-link"
              href="https://redux-toolkit.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Redux Toolkit
            </a>
            ,<span> and </span>
            <a
              className="Landing-link"
              href="https://react-redux.js.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React Redux
            </a>
          </span>
        </header>
      </div>
    </Container>
  );
}

export default Landing;
