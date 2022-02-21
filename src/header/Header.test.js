import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

test('renders Header', () => {
  render(<Header />);
  const img = screen.getByAltText(/logo/i);
  const h2 = screen.getAllByText(/Meme Generator/i);
  const h4 = screen.getAllByText(/Project 3/i);
  expect(img).toBeInTheDocument();
  expect(h2[0]).toBeInTheDocument();
  expect(h4[0]).toBeInTheDocument();
});
