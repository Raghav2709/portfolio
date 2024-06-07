import React from 'react'
import './Hero.css'
import { IoLogoGithub } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io";

const Hero = () => {
  return (
    <div class="container bgstyle">
    <div id="stars"></div>
    <div className='Hero-Content'>
    <h1>Chirag Kakrania</h1>
    <p>Innovation At Every Step</p>
    <ul>
     <li><IoLogoGithub/></li>
     <li><IoLogoFacebook/></li>
     <li><IoLogoInstagram/></li>
     <li><IoLogoLinkedin /></li>
    </ul>
    <button>More About Me</button>
    </div>
    </div>
  )
}

export default Hero