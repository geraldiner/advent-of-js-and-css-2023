import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';
import { API_BASE_URL } from '../variables/environment';

function LoginPage() {
  useEffect(() => {
    axios.get(`${API_BASE_URL}/`).then(({ data }) => console.log(data));
  });
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
