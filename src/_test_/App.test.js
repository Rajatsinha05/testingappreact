import { render, screen } from '@testing-library/react';
import App from '../App';

// Test case 1: Check if the heading is rendered correctly
test('renders heading with text "Helllo tester"', () => {
  render(<App />);
  const headingElement = screen.getByText(/Helllo tester/i);
  expect(headingElement).toBeInTheDocument();
});

// Test case 2: Check if the button is rendered correctly
test('renders a button with text "Test now"', () => {
  render(<App />);
  const testButton = screen.getByRole('button', { name: /Test now/i });
  expect(testButton).toBeInTheDocument();
});

// Test case 3: Check if the paragraph is rendered correctly
test('renders a paragraph with text "Every thing is working"', () => {
  render(<App />);
  const paragraphElement = screen.getByText(/Every thing is working/i);
  expect(paragraphElement).toBeInTheDocument();
});
