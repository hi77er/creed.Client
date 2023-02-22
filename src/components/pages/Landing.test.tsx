import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import Landing from './Landing';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Landing />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
