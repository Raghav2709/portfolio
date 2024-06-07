import React from "react";
import "./AboutMe.css";
import Image from "next/image";
import portfolioImage from "../../public/assets/Portfolio_Image.jpeg"; // Adjust the import path as per your directory structure

const AboutMe = () => {
  return (
    <div className="AboutMe">
      <div className="AboutMe-Image">
        <Image
          src={portfolioImage}
          alt="Description"
          width={375}
          height={375}
          style={{ borderRadius: "50%" }}
        />
      </div>
      <div className="AboutMe-Content">
        <h1>About Me</h1>
        <p>
          My name is Mohd Shahid Iqbal. I’m a post-graduate of 2020 from Jamia
          hamdard University at New Delhi with a degree in Masters of Computer
          Application . I'm most passionate about giving back to the community,
          and my goal is to pursue this passion within the field of software
          engineering. In my free time I like working on open source projects.
        </p>
        <button>Resume</button>
      </div>
    </div>
  );
};

export default AboutMe;
