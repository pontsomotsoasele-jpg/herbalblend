import { fireEvent, render, screen } from '@testing-library/react';
import Contact from './pages/Contact';
import Home from './pages/Home';

test('home page includes the required wellness sections and service cards', () => {
  render(<Home />);

  expect(screen.getByRole('heading', { name: /pure herbal blends for everyday wellness/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /about herbal blend/i })).toBeInTheDocument();
  expect(screen.getByText(/detox & balance/i)).toBeInTheDocument();
  expect(screen.getByText(/daily vitality/i)).toBeInTheDocument();
  expect(screen.getByText(/immune care/i)).toBeInTheDocument();
});

test('contact form validates fields and shows success message on a valid submit', () => {
  render(<Contact />);

  fireEvent.click(screen.getByRole('button', { name: /send message/i }));

  expect(screen.getByText(/full name is required/i)).toBeInTheDocument();
  expect(screen.getByText(/email address is required/i)).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: 'Jane Doe' } });
  fireEvent.change(screen.getByLabelText(/email address/i), { target: { value: 'jane@example.com' } });
  fireEvent.change(screen.getByLabelText(/phone number/i), { target: { value: '+266 5900 1234' } });
  fireEvent.change(screen.getByLabelText(/subject/i), { target: { value: 'Herbal consultation' } });
  fireEvent.change(screen.getByLabelText(/message/i), { target: { value: 'I would like to know more about your wellness teas.' } });

  fireEvent.click(screen.getByRole('button', { name: /send message/i }));

  expect(screen.getByText(/message sent successfully/i)).toBeInTheDocument();
});
