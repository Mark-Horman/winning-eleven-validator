import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Winning Eleven Validator header element', () => {
  render(<App />);
  const headerElement = screen.getByText(/Winning Eleven Validator/i);
  expect(headerElement).toBeInTheDocument();
});
