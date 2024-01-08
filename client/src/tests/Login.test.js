import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginPage from '../routes/LoginPage';

/* This is a test that is testing the Login page.
 * It is testing that the heading is correct. */
describe('Login page', () => {
  it('should have exact heading', () => {
    /* Rendering the LoginPage component. */
    render(<MemoryRouter><LoginPage /></MemoryRouter>)

    /* Getting the h1 tag". */
    const mainHeading = screen.getByRole('heading', {level: 1});

    /* Checking that the textContent of the h1 tag is equal to "Login". */
    expect(mainHeading.textContent).toBe('Login');
  });
});
