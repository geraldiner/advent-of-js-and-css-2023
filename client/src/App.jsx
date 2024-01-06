import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignupPage from './routes/SignupPage'
import ErrorPage from './routes/ErrorPage'
import LoginPage from './routes/LoginPage'

import './scss/index.scss'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <SignupPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
