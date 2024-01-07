import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import ErrorPage from './routes/ErrorPage';
import LoginPage from './routes/LoginPage';
import SignupPage from './routes/SignupPage';

import './scss/index.scss';

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
        path: 'signup',
        element: <SignupPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
