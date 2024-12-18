import react from "react";
import "../nav.css";
import "../styles.css";
import "../main.css";
function Main() {
  return (
    <>
      <div className="container">
        <div className="left">
          <div className="profession">FULL-STACK WEB DEVELOPER</div>
          <div className="name">
            <h1>Devon</h1>
            <h1>Lane</h1>
          </div>
          <div className="bio">
            <div className="line"></div>
            <div className="para">
              I'm a full-stack web developer and I work remotely from Pakistan
            </div>
          </div>
        </div>
        <div className="right">
          <div className="img">
            <img src="/img/profilei.png" alt="profile picture of sameer" />
          </div>
          <div className="uploadCv"></div>
        </div>
      </div>
      <div className="headline">
        <div>Backend</div>
        <div>Frontend</div>
        <div>Wordpress</div>
        <div>Full-Stack</div>
        <div>Backend</div>
      </div>
    </>
  );
}

export default Main;
