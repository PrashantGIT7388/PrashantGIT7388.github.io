import React from "react";
import "../Style/social.css";

const Social = () => {
 
  return (
    <div id="social" >
      <div id="git">
        {" "}
        <a  target="blank" href="https://github.com/PrashantGIT7388">
          <i style={{color:'#4761be'}} class="fa-brands fa-github"></i>
        </a>
      </div>
 <div id="link">
        {" "}
        <a  target="blank" href="https://www.linkedin.com/in/prashant-yadav-694230240/">
          {" "}
          <i style={{color:'#4761be'}} class="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default Social;
