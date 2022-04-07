import { Box } from './Box';
import { render, screen } from '@testing-library/react';

it('should render', () => {
  render(<Box label="Default box" />);
  expect(screen.getByText(/default box/i));
});
