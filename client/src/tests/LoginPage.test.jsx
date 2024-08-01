/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react';
import React from 'react';
import {Provider} from 'react-redux';
import {MemoryRouter} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';

import LoginPage from '../pages/root/LoginPage';
import {persistor, store} from '../store';

/* This is a test that is testing the Login page.
 * It is testing that the heading is correct. */
describe('Login page', () => {
	it('should have exact heading', () => {
		/* Rendering the LoginPage component. */
		render(
			<Provider store={store}>
				<PersistGate persistor={persistor} loading={null}>
					<MemoryRouter>
						<LoginPage />
					</MemoryRouter>
				</PersistGate>
			</Provider>
		);

		/* Getting the h1 tag". */
		const mainHeading = screen.getByRole('heading', {level: 1});

		/* Checking that the textContent of the h1 tag is equal to "Login". */
		expect(mainHeading.textContent).toBe('Login');
	});
});
