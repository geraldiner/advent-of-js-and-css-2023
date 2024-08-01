import React from 'react';
import {createRoot} from 'react-dom/client';
import {Provider} from 'react-redux';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import {PersistGate} from 'redux-persist/integration/react';

import ErrorPage from './src/pages/ErrorPage';
import DashboardPage from './src/pages/account/DashboardPage';
import LandingPage from './src/pages/root/LandingPage';
import LoginPage from './src/pages/root/LoginPage';
import SignupPage from './src/pages/root/SignupPage';
import './src/scss/index.scss';
import {persistor, store} from './src/store';

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <ErrorPage />,
		children: [
			{
				index: true,
				element: <LoginPage />,
			},
			{
				path: 'login',
				element: <LoginPage />,
			},
			{
				path: 'signup',
				element: <SignupPage />,
			},
		],
	},
	{
		path: '/a/',
		errorElement: <ErrorPage />,
		children: [
			{index: true, element: <DashboardPage />},
			{path: 'dashboard', element: <DashboardPage />},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}
createRoot(document.getElementById('root')).render(
	<Provider store={store}>
		<PersistGate persistor={persistor} loading={null}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</PersistGate>
	</Provider>
);
