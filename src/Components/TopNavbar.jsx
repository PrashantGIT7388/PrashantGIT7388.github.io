import "../Style/topNavbar.css";
import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import resumeFile from "../Resume/fw21_0565-Prashant-Yadav-Resume.pdf"

import NavDrawer from "./NavDrawer";


const TopNavbar = () => {
 
  const handleResumeShow=()=>{
  window.open(`https://drive.google.com/file/d/1_UxYWbjSqUUXLKOuoqWWw_3-EXMsdU15/view?usp=share_link=sharing`)
}
  const [current, setCurrent] = useState("#home");
  // const [fix,setFix]=useState(false)
  
  // const fixed=()=>{
  //   if(window.scrollY>=300){
  //     setCurrent("#skills")
  //   }else{
  //     setFix(false)
  //   }
  // }
  // window.addEventListener("scroll",fixed)

  return (
    <div>
      <div style={{height:"10vh" ,  }}  id="nav-menu"
            >
        <a  href="https://github.com/PrashantGIT7388" style={{  align: "center", padding: "4px" ,color:'#4761be' ,textDecoration:'none' ,fontSize:'30px',fontStyle:'sans-riff'}}>
          <div  style={{ marginLeft: "40px", align: "center", padding: "4px" ,color:'#4761be' ,textDecoration:'none' ,fontFamily:'system-ui', fontSize:'40px'}}>
          {/* <img width={"50px"} src={``} alt="" style={{color:'#4761be'}}/> */}
         
         Prashant
        </div>
        </a>


        <div id="navel">
          <div className="nav-link home" onClick={() => [setCurrent("#home"),window.location.href="#home"]}>
            <a href="#home">
              <h4 className={current === "#home" ? "activemain" : null}>
                Home
              </h4>
            </a>{" "}
          </div>

          <div className="nav-link about" onClick={() => [setCurrent("#about"),window.location.href="#about"]}>
            <a href="#about">
              <h4 className={current === "#about" ? "activemain" : null}>
                About
              </h4>
            </a>{" "}
          </div>
          <div className="nav-link skills" onClick={() => [setCurrent("#skills"),window.location.href="#skills"]}>
            <a href="#skills">
              <h4 className={current === "#skills" ? "activemain" : null}>
                Skills
              </h4>
            </a>{" "}
          </div>
          <div className="nav-link projects" onClick={() => [setCurrent("#projects"),window.location.href="#projects"]}>
            <a href="#projects">
              <h4 className={current === "#projects" ? "activemain" : null}>
                Projects
              </h4>
            </a>{" "}
          </div>
          <div className="nav-link contact" onClick={() => [setCurrent("#contact"),window.location.href="#contact"]}>
            <a href="#contact">
              <h4 className={current === "#contact" ? "activemain" : null}>
                Contact
              </h4>
            </a>{" "}
          </div>
          <div className="nav-link resume" onClick={() => setCurrent("#resume")}>

{/* 
          <span  id="resume-button-1">
                    <a  id="resume-link-1"    href={resumeFile}  download="Prashant-Yadav-Resume" onClick={window.open('https://drive.google.com/file/d/1_UxYWbjSqUUXLKOuoqWWw_3-EXMsdU15/view?usp=share_link=sharing')}>Resume</a>
                </span> */}
           
            <span id="resume-button-1" onClick={handleResumeShow}>
            <a 
            id="resume-link-1"
            href={resumeFile}
             download={true}
             target="_blank"
             rel="noreferrer"
            >
              <h4 id="resumenav" className={current === "#resume" ? "activemain" : null}>
                
                Resume
              </h4>                                                                       
            </a>
            </span>{" "}
          </div>
         
        </div>
        <div id="sidebar">
          <NavDrawer/>
          </div>
      </div>
    </div>
  );
};

export default TopNavbar;
