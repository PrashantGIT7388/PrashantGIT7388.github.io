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
  const kitten=`https://akveo.github.io/react-native-ui-kitten/docs/assets/playground-build/static/media/icon.a78e4b51.png`

  const [tech,setTech]=React.useState("all")
  let dataarr = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/wj5CMv94/Screenshot-from-2023-01-10-01-42-55.png",
        },
        {
          img: "https://i.postimg.cc/c1C5kkD7/Screenshot-from-2023-01-12-02-10-04.png",
        },
        {
          img: "https://i.postimg.cc/CKv9d3P1/Screenshot-from-2023-01-12-02-10-36.png",
        },
        {
          img: "https://i.postimg.cc/QxbmXpnN/Screenshot-from-2023-01-12-02-12-41.png",
        },
        {
          img: "https://i.postimg.cc/BvWXkzcj/Screenshot-from-2023-01-12-02-11-10.png",
        },
      ],
      des: `RentoMojo is rental platform where a person can use the products
      according to there needs by paying rent for the products on monthly
      Subscription based model`,
      title: "RentoMojo",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
        { src: react, name: "React" },
        { src: chakra, name: "Chakra" },
      ],
      live: `https://rent-do-maja-lo-3knv-git-master-hanumat-sharan.vercel.app/`,
      github: `https://github.com/HANUMAT-SHARAN/filthy-range-8205`,
      dplink:
        "https://drive.google.com/file/d/19cCXUXLKvV7XoXyeLg0Csdp_SZkWFAol/view?usp=share_link",
    },
  ];
  let grow = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/bNYqdstT/Screenshot-from-2023-01-12-02-50-09.png",
        },
        {
          img: "https://i.postimg.cc/P59H6yF3/Screenshot-from-2023-01-12-02-50-36.png",
        },
        {
          img: "https://i.postimg.cc/nhQgLJ02/Screenshot-from-2023-01-12-02-51-57.png",
        },
        {
          img: "https://i.postimg.cc/zBqcpR52/Screenshot-from-2023-01-12-02-53-13.png",
        },
        {
          img: "https://i.postimg.cc/kGLrjXTV/Screenshot-from-2023-01-12-03-00-47.png",
        },
        {
          img: "https://i.postimg.cc/02zHtvRv/Screenshot-from-2023-01-12-02-53-22.png",
        },
      ],
      des: `
      Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow`,
      title: "ChargeBee",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
      ],
      live: `https://dazzling-buttercream-31808d.netlify.app/index.html`,
      github: `https://github.com/HANUMAT-SHARAN/wicked-edge-6587`,
      dplink:
        "https://drive.google.com/file/d/1lrT3GlRD15HrN0vNScwCMV_DQGgpFjML/view",
    },
  ];
  let optimizely = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/fyWzmLJY/Screenshot-from-2023-01-12-03-07-22.png",
        },
        {
          img: "https://i.postimg.cc/J08ygMth/Screenshot-from-2023-01-12-03-07-00.png",
        },
        {
          img: "https://i.postimg.cc/t4pKgfnV/Screenshot-from-2023-01-12-03-08-26.png",
        },
        {
          img: "https://i.postimg.cc/JnDggCvS/Screenshot-from-2023-01-12-03-07-51.png",
        },
      ],
      des: `
      Optimizely is the website which helps the small companies to grow thier business exponentially by doing digital Marketing across diffrent platforms to reach more audience`,
      title: "Optimizely",
      techstack: [
        { src: html, name: "HTML" },
        { src: css, name: "CSS" },
        { src: js, name: "JavaScript" },
      ],
      live: `https://effulgent-cobbler-698112.netlify.app/`,
      github: `https://github.com/HANUMAT-SHARAN/-main-insurance-1276`,
    },
  ];
  let dailyneeds = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/fb41zvP9/Screenshot-from-2023-01-30-20-50-48.png",
        },

        {
          img: "https://i.postimg.cc/8zfqgYZG/Screenshot-from-2023-01-30-20-51-28.png",
        },

        {
          img: "https://i.postimg.cc/vHBJ3T9c/Screenshot-from-2023-01-30-20-53-09.png",
        },
        {
          img: "https://i.postimg.cc/5047yKS6/Screenshot-from-2023-01-30-20-53-29.png",
        },
        {
          img: "https://i.postimg.cc/g0qtYbRC/Screenshot-from-2023-01-30-20-55-01.png",
        },
        {
          img: "https://i.postimg.cc/9XN8XpRQ/Screenshot-from-2023-01-30-20-56-53.png",
        },
        {
          img: "https://i.postimg.cc/NjXPzH0f/Screenshot-from-2023-01-30-20-54-33.png",
        },
        {
          img: "https://i.postimg.cc/wxm88Btp/Screenshot-from-2023-03-07-14-04-51.png",
        },
        {
          img: "https://i.postimg.cc/gj5NMzFZ/Screenshot-from-2023-01-30-20-56-16.png",
        },
        {
          img: "https://i.postimg.cc/63fk1GYG/Screenshot-from-2023-01-30-20-50-23.png",
        },
        {
          img: "https://i.postimg.cc/yxWLXJ5K/Screenshot-from-2023-01-30-20-54-14.png",
        },
        {
          img: "https://i.postimg.cc/MG8r2pc0/Screenshot-from-2023-01-30-20-54-22.png",
        },
      ],
      des: `
      Daily Objects is a Lifestyle Accessories Brand that curates stunning designs and prints it on a wide range of personal accessories. We vision to bring the things you love on the things you use.`,
      title: "Daily Objects",
      techstack: [
        { src: typescript, name: "Type Script" },
        { src: react, name: "React" },
        { src: chakra, name: "Chakra" },
        { src: redux, name: "Redux" },
        { src: css, name: "CSS" },
      ],
      live: `https://daily-needs-96-git-master-hanumat-sharan.vercel.app/`,
      github: `https://github.com/HANUMAT-SHARAN/bright-noise-2667`,
      dplink:
        "https://drive.google.com/file/d/1fa9EIXXKuzb5tZTYs913GJgAksVvJJxB/view",
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
      live: `https://spirits-villa-git-main-hanumat-sharan.vercel.app/`,
      github: `https://github.com/HANUMAT-SHARAN/Spirits_Villa`,
      dplink:
        "https://drive.google.com/file/d/1ZxLPLoWJSycKiZG8YNNpk2NBx-a2IYvE/view?usp=sharing",
    },
  ];
  let kirayPe = [
    {
      imgarr: [
        {
          img: "https://i.postimg.cc/jjtGY5Zp/Untitled-design-1.jpg",
        },
        {
          img: "https://i.postimg.cc/RhyjkLDd/Untitled-design.jpg",
        },
        {
          img: "https://i.postimg.cc/6qkmj581/Untitled-design-9.jpg",
        },
        {
          img: "https://i.postimg.cc/jSVpvvNd/Untitled-design-5.jpg",
        },
        {
          img: "https://i.postimg.cc/HLzFYgNV/Untitled-design-6.jpg",
        },
        {
          img:"https://i.postimg.cc/XJDh5g4W/Untitled-design-7.jpg"
        },
        {
          img:"https://i.postimg.cc/x8JZ3b1z/Untitled-design-8.jpg"
        },
        {
          img:"https://i.postimg.cc/Vkj3hMB9/Untitled-design-2.jpg"
        },{
          img:"https://i.postimg.cc/15Nxpb8j/Untitled-design-3.jpg"
        },{
          img:"https://i.postimg.cc/W3hB4ygj/Untitled-design-1.jpg"
        }
      ],
      des: `
       Kiraye Pe is rental platform which is Clone of RentoMojo android App where a person can use the products according to there needs by paying rent for the products on monthly Subscription based model`,
      title: "Kiraye Pe",
      techstack: [
        { src: react, name: "React Native" },
        { src: kitten, name: "Kitten UI " },
        { src: redux, name: "Redux" },
        { src: js, name: "Java Script" },
        { src: css, name: "CSS" },
        
      ],
      live: `https://github.com/HANUMAT-SHARAN/Kiraye-Pe`,
      github: `https://github.com/HANUMAT-SHARAN/Kiraye-Pe`,
      dplink:
        "https://drive.google.com/file/d/1wU6CCibnVcyeoeAosnId2tIKE28p9nFA/view?usp=share_link",
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
          <ProjectCard arr={kirayPe} />
        </div>:null}
      {tech=="all"?<>
      <div>
          <ProjectCard arr={dailyneeds} />
        </div>
      <div>
          <ProjectCard arr={spritsVilla} />
        </div>
     
        <div>
          <ProjectCard arr={kirayPe} />
        </div>
        
       
        <div>
          <ProjectCard arr={dataarr} />
        </div>
        <div>
          <ProjectCard arr={grow} />
        </div>
        <div>
          <ProjectCard arr={optimizely} />
        </div>
       </>:null}
       {tech=="web"?<>
       <div>
          <ProjectCard arr={dailyneeds} />
        </div>
        <div>
          <ProjectCard arr={spritsVilla} />
        </div>
        
        <div>
          <ProjectCard arr={dataarr} />
        </div>
        <div>
          <ProjectCard arr={grow} />
        </div>
        <div>
          <ProjectCard arr={optimizely} />
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
