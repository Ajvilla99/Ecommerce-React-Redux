import { render, screen } from '@testing-library/react';
import { EcommerceApp } from './EcommerceApp';

test('renders learn react link', () => {
  render(<EcommerceApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
