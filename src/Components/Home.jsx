import React, { useEffect } from "react";
import "../Style/home.css";
import resumeFile from "../Resume/fw21_0565-Prashant-Yadav-Resume.pdf"

import { Typewriter } from "react-simple-typewriter";
import { Button } from "@mui/material";

import Aos from "aos";
import { Link } from "react-router-dom";
import { color } from "@chakra-ui/react";
const handleResumeShow=()=>{
  window.open(`https://drive.google.com/file/d/1_UxYWbjSqUUXLKOuoqWWw_3-EXMsdU15/view?usp=share_link=sharing`)
}

const current="";
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <section style={{marginTop:'3%'}} id="home">
      
      
      <div
     
        id="prashant"
      >
        <h1
         
        >
          {" "}
          Hello  {" "}
          <img
            width={35}
            src="https://em-content.zobj.net/thumbs/160/apple/325/waving-hand_1f44b.png"
            alt=""
          />{" "}
           My Name is{" "}
        </h1>
        <h1
         
          id="name"
        >
          <div id='user-detail-name'>
          Prashant Yadav
          </div>
          
        </h1>
       
        <h1
          
          id="type"
        >
          <Typewriter
            deleteSpeed={90}
            typeSpeed={100}
            delaySpeed={2500}
            words={[
              "Full Stack Web Developer",
              "Problem Solver",
              "Life Long Learner",
            ]}
            loop
            cursor
            cursorBlinking
            cursorStyle="|"
          />
        </h1>

        <h1 id="user-detail-intro">
        Ambitious and hardworking aspiring Full Stack Web Developer with proficiency in React Js and Java Script. Problem-solving mindset,1200+ hours of hands-on experience in coding. 
        </h1>

        <span id="resume-button-2" onClick={handleResumeShow}>
            <a  
            style={{padding:'10px',background:'rgb(71,97,190)',borderRadius:'8px' , color:'white',textDecoration:'none'}}
            id="resume-link-2"
            href={resumeFile}
             download={true}
             target="_blank"
             rel="noreferrer"
            >
             {/* <h4 id="resumenav" className={current === "#resume" ? "activemain" : null}>
                
#4761be
                Resume
              </h4>    */}
                  Resume                                                          
            </a>
            </span>{" "}
        <div id="homesocial">
          <a target="blank" href="">
            {" "}
            <i class="fa-brands fa-github"></i>
          </a>

          <a
            target="blank"
            href="https://www.linkedin.com/in/prashant-yadav-694230240/"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>

      <div
      style={{marginLeft:'15px'}}
        id="profile"
      >
        {/* image */}
        <img className="home-img" src={`https://i.postimg.cc/bJCDgQNY/fotor-2023-4-4-9-44-2.jpg`} alt="" />
      </div>
    </section>
  );

  // my name is prashant
};



export default Home;
