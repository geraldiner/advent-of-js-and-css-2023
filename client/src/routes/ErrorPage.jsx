import React from 'react';
import { useRouteError } from 'react-router-dom';
import Footer from '../components/Footer';

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <main>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
      <Footer />
    </>
  );
}

export default ErrorPage;
