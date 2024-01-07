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
          <div className="hero-background" />
          <div className="signup-form">
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
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default HomePage;
