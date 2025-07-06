import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <>
      <div className="line"></div>
      <div id="about" className="container">
        <div>
          <h1>ABOUT ME</h1>
        </div>
        <div className="Text">
          <div>
            <h2>My Journey Into Front-End Development</h2>
            <p>
              Hi there! I’m Sameer Rind, a passionate web developer dedicated to
              building custom, user-friendly websites that help businesses stand
              out online.
            </p>
            <p>
              I don’t rely on generic templates—every site I create is carefully
              tailored to reflect each brand’s unique style and goals. I work
              with HTML, CSS, JavaScript, React, Next.js, Node.js, and Express,
              and I enjoy crafting websites that are fast, responsive, and
              SEO-optimized to perform smoothly across all devices.
            </p>
            <p>
              While I’m new to freelancing, I bring a strong eye for design, a
              solid technical foundation, and a genuine commitment to giving
              100% effort to every project. My goal is simple: to deliver work
              that both you and I can be proud of.
            </p>
          </div>
          <div>
            <Link to="/about-page/" className="links container">
              <p>MORE ABOUT ME</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
