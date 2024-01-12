import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Footer from '../../components/Footer';
import { login } from '../../slices/auth.slice';
import { setCookie } from '../../utils/cookies';
import { API_BASE_URL } from '../../variables/environment';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (currentUser) {
      navigate('/a/dashboard');
    }
  }, [navigate, currentUser]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${API_BASE_URL}/login`,
        {
          email,
          password,
        },
        {
          withCredentials: true,
        },
      );
      const data = await response.data;

      if (data.success) {
        const { user, token } = data;
        dispatch(
          login({
            name: user.name,
            email: user.email,
          }),
        );
        setCookie('jwt', token, 7);
        navigate('/a/dashboard');
      }
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const disableSubmit = !email || !password;

  return (
    <>
      <main>
        <h1>Login</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="email">
            Email:
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password">
            Password:
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button
            type="submit"
            disabled={disableSubmit}
            onClick={(e) => handleSubmit(e)}
          >
            Login
          </button>
        </form>
        <Link to="/signup">Don&apos;t have an account?</Link>
      </main>
      <Footer />
    </>
  );
}

export default LoginPage;
