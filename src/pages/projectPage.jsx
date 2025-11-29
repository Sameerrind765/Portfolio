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
          title="Warda Collections Brand Website"
          desc="Designed and developed a modern e-commerce website for a clothing brand, focusing on responsive UI, intuitive navigation, and smooth user flows. Implemented dynamic product displays, filters, and cart functionality to deliver a seamless shopping experience across all devices."
          img="./assets/images/clothing-brand.webp"
          liveUrl="https://wardacollections.com/"
          githubUrl="https://github.com/Sameerrind765/Clothing-Store"
          year={"2025"}
          role={"Full-stack Developer"}
        />
        <ProjectCard
          title="Twitch Agency Website"
          desc="This website was designed by Bolt, but I developed the backend. When a user submits data, it is stored in a database, sent to me via email, and the user also receives a confirmation email."
          img="./assets/images/twitchmarketingsite.webp"
          liveUrl="https://growstreatmers.com/"
          githubUrl="https://github.com/Sameerrind765/Twitch_Marketing_site"
          year={"2025"}
          role={"Backend Developer"}
        />
        <ProjectCard
          title="Car Inspection Service Website"
          desc="This website was originally designed by Bolt for a car inspection service. I developed the backend, customized key functionalities to meet the client’s needs, and resolved several bugs to ensure smooth performance. When a user submits the form, the data is saved in a database, sent to my email, and the user also receives a confirmation email automatically."
          img="./assets/images/car-inspection-site.webp"
          liveUrl="/https://twitchmarketingsite-production.up.railway.app/"
          githubUrl="https://github.com/Sameerrind765/car-inspection-site"
          year={"2025"}
          role={"Backend Developer"}
        />
        {/* <ProjectCard
          title="Blog site for World News"
          desc="Mastered CSS Grid complexities in building an innovative news
homepage, navigating intricate design decisions for a seamless user
experience. Leveraged the challenge to enhance skills in front-end
development."
          img="./assets/images/blog.webp"
          liveUrl="https://sameerrind765.github.io/Blog/"
          githubUrl="https://github.com/Sameerrind765/Blog/"
          year={"2024"}
          role={"Frontend Developer"}
        /> */}
      </div>
    </>
  );
}

export default ProjectPage;
