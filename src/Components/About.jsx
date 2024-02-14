import React from "react";

import "../Style/about.css";
const About = () => {
 const me='';
  return (
    <section className="about section" id="about" >
      {/* <h1 style={{ color: "var(--color-font)" ,textAlign:'center',fontSize:'50px' }}>About Me </h1> */}

      <div
        id="tech"
       >
        <h1 style={{ color: "var(--color-font)" }}>About Me </h1>
        {/* <h1 style={{ color: "var(--color-font)" }}> Skills </h1> */}
      </div>
  

    <div id="aboutdiv" >

    
    <div>

      
      {/* <h1 id="about">
        About <span>Me</span>
      </h1> */}
      {/* <h2 id="user-detail-name">
        I'm <span>Suraj Singh</span> from Prayagraj, UttarPradesh
      </h2> */}

      {/* <h4>Mern Developer</h4> */}
      {/* <p id="user-detail-intro" style={{ letterSpacing: "1px" }}> */}
        {/* An enthusiastic Mern Developer with excellent hands-on experience in
        developing scalable websites and application using a wide range of
        front-end and back-end skills like HTML, CSS, JavaScript, React,
        Redux and Node Js. Highly skilled in design, development and
        implementation of functional specifications, Ready for taking
        challenging roles.. */}
         <ul   style={{ letterSpacing: "1px" }} type="square">
             <li id="user-detail-name">
           Hello My Name is Prashant Yadav & I enjoy creating things that
           live on the Internet.{" "}
          </li>
             <li id="user-detail-intro" >
              {" "}
               I'm a passionate Developer, with strong administrative and
               communication skills , 1200 + hours of hands on experience in coding, good attention to detail and the ability to
               write efficient code using  HTML, CSS, JavaScript, React,
        Redux and Node Js..
             </li>
             <li>
              My interest in web development started back last year when I was
               working with an E-Commerce Affiliate Platform in which they were
               facing problems to make good web applications.
             </li>
             <li>
              As I grow and flourish as a Developer, one thing which keeps me
            going is my inquisitiveness for discovering new things every day.
           </li>
             <li>
               Fast Forwarding to today, I built a number of web applications and
               5 major projects. Learned a great deal about teamwork, leadership,
               and communication. After months of rigorous training, here I am
              looking for an opportunity as a full stack web developer.
            </li>
         </ul>
         </div>
      {/* </p> */}
      <div  className="about-img" >
           <img
           style={{width:'100%',height:'100%'}}
           className="home-img"
             src="https://img.freepik.com/premium-vector/man-working-home_28923-46.jpg?w=740"
             alt="home-image"
          />
         </div>
      
    
    </div>
  </section>










    // ***************************************************************************************************
    // <section id="about">
    //   <div
    //     id="tech"
       
    //   >
    //     <h1 style={{ color: "var(--color-font)" }}>About Me </h1>
    
    //   </div>

    //   <div id="aboutdiv">
    //     <div className="about section" id="about" >
    //       <ul  type="square">
    //         <li id="user-detail-name">
    //           Hello My Name is Prashant Yadav & I enjoy creating things that
    //           live on the Internet.{" "}
    //         </li>
    //         <li id="user-detail-intro">
    //           {" "}
    //           I'm a passionate Developer, with strong administrative and
    //           communication skills , 1200 + hours of hands on experience in coding, good attention to detail and the ability to
    //           write efficient code using MERN Stack.
    //         </li>
    //         <li>
    //           My interest in web development started back last year when I was
    //           working with an E-Commerce Affiliate Platform in which they were
    //           facing problems to make good web applications.
    //         </li>
    //         <li>
    //           As I grow and flourish as a Developer, one thing which keeps me
    //           going is my inquisitiveness for discovering new things every day.
    //         </li>
    //         <li>
    //           Fast Forwarding to today, I built a number of web applications and
    //           5 major projects. Learned a great deal about teamwork, leadership,
    //           and communication. After months of rigorous training, here I am
    //           looking for an opportunity as a full stack web developer.
    //         </li>
    //       </ul>
    //     </div>
       
    //     <div className="about-img" >
    //       <img
    //       className="home-img"
    //         src="https://img.freepik.com/premium-vector/man-working-home_28923-46.jpg?w=740"
    //         alt="home-image"
    //       />
    //     </div>
    //   </div>
    // </section>
  );
};

export default About;
