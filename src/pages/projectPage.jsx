import React from "react";
import ProjectCard from "../components/projectCard";

function ProjectPage() {
  return (
    <>
      <div className="line"></div>
      <div id="project">
        <div className="container" id="projHead">
          <div className="width-50">
            <h1>FEATURED PROJECTS</h1>
            <p>
              Here are some Of the selected projects that showcase my passion
              for front-end development.
            </p>
          </div>
        </div>
        <ProjectCard
          title="E-commerce Clothing Brand Website"
          desc="Designed and developed a modern e-commerce website for a clothing brand, focusing on responsive UI, intuitive navigation, and smooth user flows. Implemented dynamic product displays, filters, and cart functionality to deliver a seamless shopping experience across all devices."
          img="./assets/images/clothing-brand.webp"
          liveUrl="https://glamify-clothing.netlify.app/"
          githubUrl="https://github.com/Sameerrind765/Clothing-Store"
          year={"2025"}
          role={"Full-stack Developer"}
        />
        <ProjectCard
          title="Blog site for World News"
          desc="Mastered CSS Grid complexities in building an innovative news
homepage, navigating intricate design decisions for a seamless user
experience. Leveraged the challenge to enhance skills in front-end
development."
          img="./assets/images/blog.webp"
          liveUrl="#"
          githubUrl="#"
          year={"2024"}
          role={"Frontend Developer"}
        />
        <ProjectCard
          title="E-commerce product page"
          desc="Successfully crafted an engaging product page featuring a dynamic
lightbox gallery and seamless cart functionality, showcasing
proficiency in JavaScript development."
          img="./assets/images/work.webp"
          liveUrl="#"
          githubUrl="#"
          year={"2024"}
          role={"Frontend Developer"}
        />
      </div>
    </>
  );
}

export default ProjectPage;
