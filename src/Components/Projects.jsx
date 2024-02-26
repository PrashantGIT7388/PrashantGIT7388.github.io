import React from "react";
import GitHubCalendar from "react-github-calendar";
import ProjectCard from "./ProjectCard";
import "../Style/projects.css";
import {Flex} from "@chakra-ui/react"
import mongo from "../Components/Images/mongodb-seeklogo.com.svg";
import npm from "../Components/Images/npm.876.svg";
import node from "../Components/Images/nodejs.png";
const Projects = () => {
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
  const kitten=`https://i.postimg.cc/YqgDwnR7/image.png`

  const [tech,setTech]=React.useState("all")
  let dataarr = [
    // {
    //   imgarr: [
    //     {
    //       img: "https://i.postimg.cc/wj5CMv94/Screenshot-from-2023-01-10-01-42-55.png",
    //     },
    //     {
    //       img: "https://i.postimg.cc/c1C5kkD7/Screenshot-from-2023-01-12-02-10-04.png",
    //     },
    //     {
    //       img: "https://i.postimg.cc/CKv9d3P1/Screenshot-from-2023-01-12-02-10-36.png",
    //     },
    //     {
    //       img: "https://i.postimg.cc/QxbmXpnN/Screenshot-from-2023-01-12-02-12-41.png",
    //     },
    //     {
    //       img: "https://i.postimg.cc/BvWXkzcj/Screenshot-from-2023-01-12-02-11-10.png",
    //     },
    //   ],
    //   des: `RentoMojo is rental platform where a person can use the products
    //   according to there needs by paying rent for the products on monthly
    //   Subscription based model`,
    //   title: "RentoMojo",
    //   techstack: [
    //     { src: html, name: "HTML" },
    //     { src: css, name: "CSS" },
    //     { src: js, name: "JavaScript" },
    //     { src: react, name: "React" },
    //     { src: chakra, name: "Chakra" },
    //   ],
    //   live: `https://rent-do-maja-lo-3knv-git-master-hanumat-sharan.vercel.app/`,
    //   github: `https://github.com/HANUMAT-SHARAN/filthy-range-8205`,
    //   dplink:
    //     "https://drive.google.com/file/d/19cCXUXLKvV7XoXyeLg0Csdp_SZkWFAol/view?usp=share_link",
    // },
  ];
  let Myntra = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/FKPyfW5Y/image.png",
        },
        {
          img: "https://i.postimg.cc/qRTT3Lsd/image.png",
        },
        {
          img: "https://i.postimg.cc/mDHy0YJh/image.png",
        },
        {
          img: "https://i.postimg.cc/x117BZRC/image.png",
        },
        {
          img: "https://i.postimg.cc/W193PQcf/image.png",
        },
        {
          img: "https://i.postimg.cc/RVkdLbDy/image.png",
        },
      ],
      des: `
      A Fashion store Website clone created using Html,Css,Javascript with all major functionality`,
      title: "Myntra",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
      ],
      live: `https://jazzy-selkie-afc155.netlify.app/`,
      github: `https://github.com/PrashantGIT7388/blessed-story-3613`,
      dplink:
        "https://drive.google.com/file/d/1lrT3GlRD15HrN0vNScwCMV_DQGgpFjML/view",
    },
  ];
  let optimizely = [
    // {
    //   imgarr: [
    //     {
    //       img: "https://i.postimg.cc/fyWzmLJY/Screenshot-from-2023-01-12-03-07-22.png",
    //     },
    //     {
    //       img: "https://i.postimg.cc/J08ygMth/Screenshot-from-2023-01-12-03-07-00.png",
    //     },
    //     {
    //       img: "https://i.postimg.cc/t4pKgfnV/Screenshot-from-2023-01-12-03-08-26.png",
    //     },
    //     {
    //       img: "https://i.postimg.cc/JnDggCvS/Screenshot-from-2023-01-12-03-07-51.png",
    //     },
    //   ],
    //   des: `
    //   Optimizely is the website which helps the small companies to Myntra thier business exponentially by doing digital Marketing across diffrent platforms to reach more audience`,
    //   title: "Optimizely",
    //   techstack: [
    //     { src: html, name: "HTML" },
    //     { src: css, name: "CSS" },
    //     { src: js, name: "JavaScript" },
    //   ],
    //   live: `https://effulgent-cobbler-698112.netlify.app/`,
    //   github: `https://github.com/HANUMAT-SHARAN/-main-insurance-1276`,
    // },
  ];
  let CaratLane = [
    {
      imgarr: [
        {
          img: "https://github.com/tambeaditya101/abounding-kittens-4324/assets/112858915/ad0e4c3a-391d-484c-b2cb-fc2396b39a2f",
        },

        {
          img: "https://github.com/tambeaditya101/abounding-kittens-4324/assets/112858915/2aeb00e3-2197-4a00-8e08-c50f0e5304e6",
        },

        {
          img: "https://github.com/tambeaditya101/abounding-kittens-4324/assets/112858915/9f91476d-a6cc-465d-9021-b70dc6825b3",
        },
        {
          img: "https://github.com/tambeaditya101/abounding-kittens-4324/assets/112858915/b20a9d8f-e20c-4a28-b319-50cd271f630f",
        },
        {
          img: "https://github.com/tambeaditya101/abounding-kittens-4324/assets/112858915/5dc8d3cb-d66e-43c7-927c-72332ec274c2",
        },
        {
          img: "https://i.postimg.cc/9XN8XpRQ/Screenshot-from-2023-01-30-20-56-53.png",
        },
        {
          img: "https://github.com/tambeaditya101/abounding-kittens-4324/assets/112858915/885263cf-6670-459e-9d3b-baf2cb3556b3",
        },
        {
          img: "https://github.com/tambeaditya101/abounding-kittens-4324/assets/112858915/1da6988c-d5d1-4fb8-ad6f-21a31b3806d2",
        },
        {
          img: "https://github.com/tambeaditya101/abounding-kittens-4324/assets/112858915/5d09e1ec-734a-46cc-8fe6-968f6c1a857f",
        },
        {
          img: "https://github.com/tambeaditya101/abounding-kittens-4324/assets/112858915/cf0a3e60-ab50-4c19-af83-292c658d1906",
        },
        {
          img: "https://github.com/tambeaditya101/abounding-kittens-4324/assets/112858915/50be54dd-a555-49cb-a33b-c6bb27392c1a",
        },
        {
          img: "https://github.com/tambeaditya101/abounding-kittens-4324/assets/112858915/82e4fbd6-fbb6-466a-b1fc-f33547df056b",
        },
      ],
      des: `
      The clone of Caretlane website using complete MERN stack. This website allows you to order and browse all kinds of jewelleries ranging from low to expensive costs.`,
      title: "CaratLane",
      techstack: [
        { src: typescript, name: "Type Script" },
        { src: react, name: "React" },
        { src: chakra, name: "Chakra" },
        { src: redux, name: "Redux" },
        { src: css, name: "CSS" },
      ],
      live: `https://caratlane.vercel.app/`,
      github: `https://github.com/tambeaditya101/CaretLane-clone`,
      dplink:
        "https://drive.google.com/file",
    },
  ];
  let spritsVilla = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/LXVPnS56/Screenshot-from-2023-03-07-14-09-40.png",
        },
        {
          img: "https://i.postimg.cc/kgP8DVwJ/Screenshot-from-2023-02-27-12-23-42.png",
        },
        {
          img: "https://i.postimg.cc/MHhB7XSY/Screenshot-from-2023-02-27-12-24-47.pngg",
        },
        {
          img: "https://i.postimg.cc/qv0dGdvd/Screenshot-from-2023-03-07-14-09-12.png",
        },
        {
          img: "https://i.postimg.cc/qqtn6y9R/Screenshot-from-2023-02-27-12-22-57.png",
        },
        {
          img:"https://i.postimg.cc/SK6rfnmd/Screenshot-from-2023-02-27-13-04-15.png"
        },
        {
          img:"https://i.postimg.cc/DZ7cj7ZT/Screenshot-from-2023-02-27-13-04-47.png"
        },{
          img:"https://i.postimg.cc/5tnFPsJy/Screenshot-from-2023-02-27-12-26-02.png"
        }
      ],
      des: ` Spirits Villa offer you the convenience of shopping for everything that you need for your home - household cleaning items & personal care products from a single virtual store.`,
      title: "Spirits Villa",
      techstack: [
        { src: react, name: "React" },
        { src: chakra, name: "Chakra" },
        { src: redux, name: "Redux" },
        { src: express, name: "Express" },
        { src: mongo, name: "MongoDb" },
        { src: node, name: "Node JS" },
      ],
      live: `https://vercel.app/`,
      github: `https://github.com/`,
      dplink:
        "https://drive.google.com/file/",
    },
  ];
  let MyGlow = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/GhS4RRL8/image.png",
        },
        {
          img: "https://i.postimg.cc/JzQyDXmg/image.png",
        },
        {
          img: "https://i.postimg.cc/kXmY7r5c/image.png",
        },
        {
          img: "https://i.postimg.cc/JhHjyq7q/image.png",
        },
        {
          img: "https://i.postimg.cc/6pPz8TKd/image.png",
        },
        {
          img:"https://i.postimg.cc/6pPz8TKd/image.png"
        },
        {
          img:"https://i.postimg.cc/JhfsHCt6/image.png"
        }
      ],
      des: `
      Clone of Website Sugar Cosmetics, which provides a wide range of beauty products for women .`,
      title: "My Glow",
      techstack: [
        { src: react, name: "React Native" },
        { src: kitten, name: "Kitten UI " },
        { src: redux, name: "Redux" },
        { src: js, name: "Java Script" },
        { src: css, name: "CSS" },
        
      ],
      live: `https://my-glow-ankush3681.vercel.app/`,
      github: `https://github.com/ankush3681/My_Glow`,
      dplink:
        "https://drive.google.com/file/d/1fQtvc4raGNnVuDxNf9FtLBiN_r5XRJNg/view?usp=share_link",
    },
  ];
  return (
    <section id="projects">
      <div id="tech" margin={"auto"} justifyContent={"space-around"}>
        <h1 style={{ color: "var(--color-font)" }}>Projects </h1>
      </div>
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
          className={tech == "web" ? "active" : null}
          onClick={() => setTech("web")}
        >
          WEB 
        </button>
        <button
          className={tech == "android" ? "active" : null}
          onClick={() => setTech("android")}
        >
          ANDROID {" "}
        </button>
       
      </Flex>
      <div id="procard">
     {tech==`android`? <div>
          <ProjectCard arr={MyGlow} />
        </div>:null}
      {tech=="all"?<>
      <div>
          <ProjectCard arr={CaratLane} />
        </div>
      <div>
          <ProjectCard arr={ optimizely} />
        </div>
     
        <div>
          <ProjectCard arr={MyGlow} />
        </div>
        
       
        <div>
          <ProjectCard arr={dataarr} />
        </div>
        <div>
          <ProjectCard arr={Myntra} />
        </div>
        <div>
          <ProjectCard arr={spritsVilla} />
        </div>
       </>:null}
       {tech=="web"?<>
       <div>
          <ProjectCard arr={CaratLane} />
        </div>
        <div>
          <ProjectCard arr={optimizely} />
        </div>
        
        <div>
          <ProjectCard arr={dataarr} />
        </div>
        <div>
          <ProjectCard arr={Myntra} />
        </div>
        <div>
          <ProjectCard arr={spritsVilla} />
        </div>
       </>:null}
      </div>
      <div id="gitname" margin={"auto"} justifyContent={"space-around"}>
        <h2 style={{ color: "var(--color-font)" }}>
          Github Contribution Calender{" "}
        </h2>
      </div>
      <div id="calendar">
        <GitHubCalendar
          fontSize={14}
          color="#4761be"
          blockRadius={1}
          blockMargin={6}
          blockSize={16}
          showWeekdayLabels
          username="PrashantGIT7388"
        />
      </div>
      <div id="gitname" margin={"auto"} justifyContent={"space-around"}>
        <h2 style={{ color: "var(--color-font)" }}>Github Stats </h2>
      </div>
      <div id="gitstats">
        <img
        id="github-top-langs"
          alt="most used languages"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=PrashantGIT7388&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8&langs_count=20&hide=hack,swift,kotlin,objective-c"
        />

        <img
          id="github-streak-stats"
          alt="status github, commits, etc..."
          src="https://github-readme-streak-stats.herokuapp.com/?user=PrashantGIT7388&count_private=true&show_icons=true&custom_title=Github&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=8"
        />

        <img
        id="github-stats-card"
          alt="7oSkaaa's Github Stats"
          src="https://github-readme-stats.vercel.app/api?username=PrashantGIT7388&show_icons=true&count_private=true&theme=algolia&bg_color=0,000000,130F40&layout=compact&border_radius=10"
        />
        <img
          alt="Prashant Activity Graph"
          src="https://github-readme-activity-graph.cyclic.app/graph?username=PrashantGIT7388&theme=react-dark&hide_border=false"
        />
      </div>
    </section>
  );
};

export default Projects;
