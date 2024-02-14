import {
  SimpleGrid,
  Grid,
  Image,
  Box,
  Heading,
  Flex,
  ChakraProvider,
} from "@chakra-ui/react";
import React from "react";

import mongo from "../Components/Images/mongodb-seeklogo.com.svg";
import npm from "../Components/Images/npm.876.svg";
import node from "../Components/Images/nodejs.png";


import "../Style/skill.css";

import { useEffect } from "react";

const Skills = () => {
  const html = `https://i.postimg.cc/fRbKFQ8X/Html.png`;

  const css = `https://i.postimg.cc/VNpDnZBt/Css.png`;
  const react = `https://i.postimg.cc/mkwYXmM8/react.png`;
  const redux = `https://seeklogo.com/images/R/redux-logo-9CA6836C12-seeklogo.com.png`;
  // const node=`https://seeklogo.com/images/N/node-node-js-logo-81A4CC16D2-seeklogo.com.png`
  const js = `https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png`;
  const git = `https://i.postimg.cc/hPcMLdx2/git.png`;
  const github = `https://i.postimg.cc/rySQRJdd/github.png`;
  const next = `https://seeklogo.com/images/N/next-js-logo-8FCFF51DD2-seeklogo.com.png`;
  const typescript = `https://i.postimg.cc/4Nfb7TkM/typescript.png`;
  const cypress = `https://i.postimg.cc/sx9mFjFP/cypress1.webp`;
  const chakra = `https://i.postimg.cc/BnhhQnjM/chakra.png`;
  const express = `https://i.postimg.cc/G2DzQPq5/express.png`;
  const vs = `https://i.postimg.cc/CKqjThkZ/vscode.png`;
  // const npm=`https://i.postimg.cc/1tDc6mzx/npm-node-package-manager.png`
  const dsa = `https://i.postimg.cc/15BBJ3rs/Dsa.png`;
const postman=`https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png`
  const [tech, setTech] = React.useState("all");
const thunder=`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIDzWtmwdZjtI-bZdaa6yiCa61joruKiuoriweCzkTUA&s`
  const kitten=`https://akveo.github.io/react-native-ui-kitten/docs/assets/playground-build/static/media/icon.a78e4b51.png`

  const skillsarr = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "Java Script" },
    { img: react, name: "React" },
    { img: redux, name: "Redux" },
    { img: mongo, name: "Mongo Db" },
    { img: node, name: "Node JS" },
    { img: react, name: "React Native" },
    { img: next, name: "Next JS" },
    { img: express, name: "Express JS" },
    { img: typescript, name: "Type Script" },
    { img: npm, name: "Npm" },
    { img: dsa, name: "DSA" },
    { img: cypress, name: "Cypress" },
  ];
  const frontend = [
    { img: html, name: "HTML" },
    { img: css, name: "CSS" },
    { img: js, name: "Java Script" },
    { img: react, name: "React" },
    { img: redux, name: "Redux" },
    { img: next, name: "Next JS" },
    { img: react, name: "React Native" },
    { img: typescript, name: "Type Script" },
    { img: npm, name: "Npm" },
    { img: dsa, name: "DSA" },
    { img: cypress, name: "Cypress" },
  ];
  const canva=`https://freelogopng.com/images/all_img/1656734305canva-app-icon.png`
  const backend = [
    { img: mongo, name: "Mongo Db" },
    { img: node, name: "Node JS" },
    { img: npm, name: "Npm" },
    { img: express, name: "Express JS" },
    { img: dsa, name: "DSA" },
  ];
  const toolsarr = [
    { img: vs, name: "VS Code" },
    { img: github, name: "Github" },

    { img: chakra, name: "Chakra UI" },
    { img: git, name: "Git" },
    { img: kitten, name: "Kitten UI" },
    { img: postman, name: "Postman" },
   
    { img: canva, name: "Canva" }, { img: thunder, name: "Thunder Client" },
  ];
  


  return (
    <section id="skills">
      <Flex
        id="tech"
      
      >
        <h1 style={{ color: "var(--color-font)" }}>Technical Skills </h1>
        {/* <h1 style={{ color: "var(--color-font)" }}> Skills </h1> */}
      </Flex>
      <Flex
        id="skillsButton"
       
        m="auto"
        w={400}
        mb={"60px"}
        justifyContent={"space-evenly"}
      >
        <button
          className={tech == "all" ? "active" : null}
          onClick={() => setTech("all")}
        >
          ALL
        </button>
        <button
          className={tech == "frontend" ? "active" : null}
          onClick={() => setTech("frontend")}
        >
          FRONTEND{" "}
        </button>
        <button
          className={tech == "backend" ? "active" : null}
          onClick={() => setTech("backend")}
        >
          BACKEND
        </button>
      </Flex>
      {tech === "all" ? (
        <div

          id="skillsdiv"
          
        >
          {tech === "all"
            ? skillsarr.map((el) => (
              <div className="skills-card">
              <img className="skills-card-img"  alt="" src={el.img} />
              <h3 className="skills-card-name" >{el.name}</h3>
            </div>
              ))
            : null}
          {tech === "frontend"
            ? frontend.map((el) => (
                <div className="skills-card">
                  <img className="skills-card-img"  alt="" src={el.img} />
                  <h3 className="skills-card-name" >{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "backend"
            ? backend.map((el) => (
              <div className="skills-card">
              <img className="skills-card-img"  alt="" src={el.img} />
              <h3 className="skills-card-name" >{el.name}</h3>
            </div>
              ))
            : null}
        </div>
      ) : null}
      {tech === "backend" ? (
        <div
        
          id="skillsdiv"
        >
          {tech === "all"
            ? skillsarr.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "frontend"
            ? frontend.map((el) => (
                <div>
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "backend"
            ? backend.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
        </div>
      ) : null}
      {tech === "frontend" ? (
        <div
         
          id="skillsdiv"
        >
          {tech === "all"
            ? skillsarr.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "frontend"
            ? frontend.map((el) => (
                <div>
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
          {tech === "backend"
            ? backend.map((el) => (
                <div>
                  {" "}
                  <img alt="" src={el.img} />
                  <h3>{el.name}</h3>
                </div>
              ))
            : null}
        </div>
      ) : null}
      <Flex
        id="tools"
        
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)" }}>Tools </h1>
      </Flex>
      <div id="skillsdiv">
        {toolsarr.map((el) => (
          <div
           
          >
            {" "}
            <img alt="" src={el.img} />
            <h3>{el.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
