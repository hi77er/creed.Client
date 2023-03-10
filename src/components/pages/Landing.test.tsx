import { render } from '@testing-library/react';
import Landing from './Landing';

test('renders title', () => {
  const { getByText } = render(<Landing />);

  expect(getByText(/Creed Template/i)).toBeInTheDocument();
});
