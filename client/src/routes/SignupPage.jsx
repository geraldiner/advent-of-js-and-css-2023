import { useState } from "react";
import HelloWorld from "../components/HelloWorld";
import Footer from "../components/Footer";

const HomePage = () => {
  const [displayName, setState] = useState("");
  const handleOnchange = (e) => {
    setState(e.target.value);
  };
  return (
    <>
      <main>
        <section id="signup">
          <div className="hero-background"></div>
          <div class="signup-form">
            <HelloWorld name={displayName} />
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
};

export default HomePage;
