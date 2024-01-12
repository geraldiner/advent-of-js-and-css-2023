import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Footer from '../../components/Footer';
import { logout } from '../../slices/auth.slice';
import { getCookie, setCookie } from '../../utils/cookies';
import { API_BASE_URL } from '../../variables/environment';

function DashboardPage() {
  const [displayName, setState] = useState('World');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (!currentUser) {
      navigate('/login');
    }
  }, [navigate, currentUser]);

  const handleOnchange = (e) => {
    setState(e.target.value);
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/logout`,
        {
          token: getCookie('jwt'),
        },
        {
          withCredentials: true,
        },
      );
      const data = await response.data;

      if (data.success) {
        dispatch(logout());
        setCookie('jwt', '', -7);
        navigate('/');
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <main>
        <section>
          <h1>Dashboard</h1>
          <form>
            <label htmlFor="firstName">
              <span>Name: </span>
              <input
                name="firstName"
                type="text"
                value={displayName}
                onChange={handleOnchange}
              />
            </label>
            <button type="button" onClick={() => handleLogout()}>
              Logout
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default DashboardPage;
