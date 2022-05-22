import { render, screen } from '@testing-library/react';
import App from './App';

test('page has title', () => {
  render(<App />);
  const linkElement = screen.getByText("Flawless floors");
  expect(linkElement).toBeInTheDocument();
});
