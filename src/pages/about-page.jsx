import "./about-page.css";
import { Link } from "react-router-dom";
import Contact from "../pages/contact";
function AboutPage() {
  return (
    <>
      <div id="about" className="container about-page">
        <div>
          <h1>ABOUT ME</h1>
        </div>
        <div className="text">
          <div>
            <h2>My Journey Into Front-End Development</h2>
            <div className="desc">
              <p>
                Hi there! I’m Sameer Rind, a passionate front-end developer
                based in Karachi, Pakistan. With a background in Mechanical
                Engineering, I’ve always been drawn to problem-solving,
                structure, and design—qualities that naturally led me into the
                world of web development.
              </p>
              <p>
                I specialize in building custom, user-friendly websites that
                help businesses stand out online. I don’t rely on generic
                templates—every site I create is crafted from scratch to reflect
                your brand’s unique personality and goals.
              </p>
              <p>
                I work with HTML, CSS, JavaScript, React, Next.js, Node.js, and
                Express. I love creating fast, responsive, and SEO-optimized
                websites that look great and perform well on all devices. I also
                focus on accessibility because I believe the web should be
                inclusive and usable for everyone.
              </p>
              <p>
                While I’m still new to freelancing, I bring years of self-driven
                learning and hands-on development experience. I have a strong
                eye for design, a deep understanding of how users interact with
                websites, and a commitment to always giving 100% to every
                project I work on.
              </p>
              <p>
                My goal is simple: to help you turn your ideas into a digital
                reality—thoughtfully, professionally, and with heart.
              </p>
            </div>
          </div>

          <div>
            <li id="about-links" className="links container">
              <button className="ctr-btn">
                <a
                  href="/assets/docs/sameer-cv.pdf"
                  download
                  className="ctr-btn"
                  aria-label="Download Sameer Rind's Resume"
                >
                  Download Resume
                </a>
                <span></span>
              </button>
              <a
                href="https://www.linkedin.com/in/sameer-rind-274796247/"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.39825 7.79682C6.70735 7.79682 7.76858 6.73558 7.76858 5.42649C7.76858 4.11739 6.70735 3.05615 5.39825 3.05615C4.08915 3.05615 3.02792 4.11739 3.02792 5.42649C3.02792 6.73558 4.08915 7.79682 5.39825 7.79682Z"
                    fill="#D3E97A"
                  />
                  <path
                    d="M10.0068 9.59282V22.7434H14.0898V16.2402C14.0898 14.5242 14.4127 12.8623 16.5403 12.8623C18.6388 12.8623 18.6648 14.8242 18.6648 16.3485V22.7445H22.75V15.5327C22.75 11.9902 21.9873 9.26782 17.8468 9.26782C15.8589 9.26782 14.5264 10.3587 13.9815 11.3912H13.9263V9.59282H10.0068ZM3.35292 9.59282H7.4425V22.7434H3.35292V9.59282Z"
                    fill="#D3E97A"
                  />
                </svg>
              </a>
              <a
                href="https://github.com/Sameerrind765"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M13.0282 2.16675C7.06008 2.16675 2.223 7.00383 2.223 12.9719C2.223 17.7451 5.31808 21.7957 9.61242 23.2257C10.153 23.3232 10.348 22.9906 10.348 22.7046C10.348 22.4478 10.3393 21.7675 10.3361 20.8673C7.32983 21.5194 6.695 19.4178 6.695 19.4178C6.20533 18.1698 5.49575 17.8372 5.49575 17.8372C4.51533 17.1666 5.5705 17.1818 5.5705 17.1818C6.656 17.2576 7.22475 18.2954 7.22475 18.2954C8.18892 19.9464 9.75542 19.4698 10.3686 19.1935C10.4672 18.4948 10.7488 18.0181 11.0565 17.7483C8.658 17.4764 6.136 16.5491 6.136 12.4075C6.136 11.2299 6.55742 10.2636 7.24533 9.50958C7.13592 9.2355 6.76217 8.13592 7.35258 6.64958C7.35258 6.64958 8.25933 6.35817 10.3231 7.75567C11.2045 7.51589 12.1137 7.3935 13.0271 7.39167C13.9405 7.39315 14.8498 7.51554 15.7311 7.75567C17.7959 6.35708 18.7016 6.64958 18.7016 6.64958C19.292 8.13592 18.9215 9.2355 18.8088 9.50958C19.5022 10.2636 19.9182 11.2288 19.9182 12.4075C19.9182 16.5599 17.394 17.4721 14.9868 17.7397C15.3714 18.0733 15.7181 18.732 15.7181 19.7395C15.7181 21.1847 15.7051 22.3503 15.7051 22.7046C15.7051 22.9938 15.8979 23.3297 16.4493 23.2235C20.7415 21.7913 23.8333 17.744 23.8333 12.9719C23.8333 7.00383 18.9963 2.16675 13.0282 2.16675Z"
                    fill="#D3E97A"
                  />
                </svg>
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div id="about-container" className="container ">
        <h1>My Capabilities</h1>
        <div className="about-text">
          <p>
            I'm always learning and expanding my skill set to stay up-to-date
            with the latest technologies in web development. I enjoy building
            modern, responsive, and efficient web applications that deliver
            great user experiences.
          </p>
          <div className="tags">
            <p className="tag">HTML</p>
            <p className="tag">CSS</p>
            <p className="tag">REACT</p>
            <p className="tag">JAVASCRIPT</p>
            <p className="tag">JQUERY</p>
            <p className="tag">BOOTSTRAP</p>
            <p className="tag">NODE JS</p>
            <p className="tag">PRESQL</p>
          </div>
        </div>
      </div>
      <div id="about-container" className="container ">
        <h1>My Capabilities</h1>
        <div className="exp-text about-text">
          <div className="exp">
            <div className="sub-head">
              <h2>Full-Stack Developer — Real Estate E-commerce Project</h2>
              <p>June-2025</p>
            </div>
            <div className="desc">
              <p>
                I independently developed a real estate e-commerce website using
                React, Node.js, and MongoDB. The application includes features
                such as user authentication, dynamic property listings, and an
                integrated payment gateway. This project helped me deepen my
                understanding of building scalable full-stack applications and
                delivering a smooth, responsive user experience across devices.
              </p>
            </div>
          </div>
          <div className="exp">
            <div className="sub-head">
              <h2>Frontend Developer — Portfolio Website</h2>
              <p>May-2025</p>
            </div>
            <div className="desc">
              <p>
                I designed and built my personal portfolio from scratch using
                HTML, CSS, and JavaScript. The site showcases my work, skills,
                and contact options, with smooth scrolling, animations, and
                interactive elements to enhance usability. This project improved
                my frontend development skills and attention to design detail.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default AboutPage;
