import React from "react";

function ProjectCard(props) {
  return (
    <>
      <div id="projCard" className="container">
        <div id="projImg" className="right">
          <img src={props.img} alt="Project Img" />
        </div>
        <div className="ProjText">
          <div className="ProjDesc">
            <h2>{props.title}</h2>
            <p>{props.desc}</p>
          </div>
          <div className="projInfo">
            <div>
              <h3>PROJECT INFO</h3>
              <h3></h3>
            </div>
            <div>
              <h3>Year</h3>
              <h3>{props.year}</h3>
            </div>
            <div>
              <h3>Role</h3>
              <h3>{props.role}</h3>
            </div>
          </div>
          <div className="projLinks">
            <a href={props.liveUrl} target={props.liveUrl === "#" ? "" : "_blank"}>
            <p>LIVE DEMO</p>
            <img src="./assets/images/arrow.png" alt="Project link" />
          </a>
          <a href={props.githubUrl} target="_blank">
            <p>SEE ON GITHUB</p>
            <img src="./assets/images/github.svg" alt="Project link" />
          </a>
        </div>
      </div>
    </div >
    </>
  );
}

export default ProjectCard;
