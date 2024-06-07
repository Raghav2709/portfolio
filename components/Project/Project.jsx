import React from "react";
import "./Project.css";
import { IoLogoGithub } from "react-icons/io";

const Project = () => {
  return (
    <div className="project">
      <h1>Recent Projects</h1>
      <div className="recent-project">
        <div className="full-stack-projects">
          <h2>SportsSpice</h2>
          <p>
            Developed a full stack blog application using React, Node.js,
            Express.js, and MongoDB, integrating JWT authentication and Google
            OAuth for secure user access. Created a user-friendly admin
            dashboard with CRUD functionalities for managing blog posts and user
            data, enhancing the application’s usability and scalability.
          </p>
          <hr />
          <p>Languages | React, Express, Node, MongoDB</p>
          <a href="https://github.com/Raghav2709/Blogging" target="_blank">
            <IoLogoGithub className="logo" /> Project Link
          </a>
        </div>

        <div className="full-stack-projects">
          <h2>SocioBuddy</h2>
          <p>
            Built ”SocioBuddy” Social Media Platform: Developed a feature-rich
            social media application called ”SocioBuddy” using React, Node.js,
            and MongoDB, integrating modern technologies like Material UI, Redux
            Toolkit, and JWT authentication.Developed a full stack blog
            application using React, Node.js, Express.js, and MongoDB,
            integrating JWT authentication.
          </p>
          <hr />
          <p>Languages | React, Express, Node, MongoDB</p>
          <a href="https://github.com/Raghav2709/SocioBuddy" target="_blank">
            <IoLogoGithub className="logo" /> Project Link
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
