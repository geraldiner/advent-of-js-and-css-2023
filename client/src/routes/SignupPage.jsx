import React, { useState } from 'react';

import Footer from '../components/Footer';

function HomePage() {
  const [displayName, setState] = useState('World');
  const handleOnchange = (e) => {
    setState(e.target.value);
  };
  return (
    <>
      <main>
        <section id="signup">
          <div className="hero-background">
            <img
              alt="background"
              src="/images/backgrounds/background-full-width.svg"
            />
          </div>
          <div className="signup-form">
            <form>
              <label htmlFor="firstName">
                <span>User: </span>
                <input
                  name="firstName"
                  type="text"
                  value={displayName}
                  onChange={handleOnchange}
                />
              </label>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
