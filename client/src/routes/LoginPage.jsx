import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';

function LoginPage() {
  return (
    <>
      <main>
        <h1>Login</h1>
        <Link to="signup">Already have an account?</Link>
      </main>
      <Footer />
    </>
  );
}

export default LoginPage;
