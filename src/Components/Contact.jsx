import React, { useEffect } from "react";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { useForm, ValidationError } from "@formspree/react";
import { Button, Input } from "@mui/material";


import "../Style/contact.css";
function ContactForm() {
  const [show, setShow] = React.useState(false);
  // const [state, handleSubmit] = useForm("xyyayvwe");

 
  // if (state.succeeded) {
  //   return (
  //     <>
  //       {" "}
  //       <div
  //         id="formsub"
         
  //         style={{ textAlign: "center" }}
  //       >
  //         <img
  //           width={300}
  //           src="https://png.pngtree.com/png-vector/20230105/ourmid/pngtree-3d-green-check-mark-icon-png-image_6552255.png"
  //           alt=""
  //         />
  //         <h1>
  //           Your mail has been sent Succesfully !
  //         </h1>
  //       </div>
  //     </>
  //   );
  // }

  return (
    <section id="contact">
      <div
        id="tech"
      
        margin={"auto"}
        justifyContent={"space-around"}
      >
        <h1 style={{ color: "var(--color-font)" }}>Contact Me </h1>
      </div>
      <div
       
        id="contactform"
      >
        {/*   <i class="fa-sharp fa-solid fa-location-pin"></i>{" "}    <i class="fa-solid fa-envelope"></i>*/}
        <div
         
          id="contactlinkdiv"
        >
          <div>
            <div>
              {" "}
              <div style={{fontSize:"1.5rem",marginRight:"10px"}}>
              <i  class="fa-solid fa-envelope"></i>
              </div>
              <h4 id="contact-email">yd.pt180@gmail.com</h4>
            </div>
            <div>
            <a target={"blank"} href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=yd.pt180@gmail.com"><button id="btnform">
               
               Email Now !
             </button></a>
              
            </div>
          </div>
          <div className="whatsapp">
            <div>
              {" "}
              <div style={{fontSize:"1.5rem",marginRight:"10px"}}>
             
              <i class="fa-solid fa-phone"></i>
              </div>
              <h4 id="contact-phone"> Phone : +91 8887397388</h4>
            </div>
            <div>
              <a target={"blank"} href="tel:918264121428">
                {" "}
                <button id="btnform">Call Now !</button>
              </a>
            </div>
          </div>
          <div className="call">
            <div >
           <div style={{fontSize:"2rem",marginRight:"20px"}} > <i class="fa-brands fa-whatsapp"></i></div>
              <h4> Whatsapp</h4>
            </div>
            <div>
              <a target={"blank"} href="https://wa.me/918887397388">
                <button id="btnform">Whatsapp Now !</button>
              </a>
            </div>
            
          </div>
          <div style={{display:"flex",justifyContent:"space-evenly"}} id="socialgit">
            <a id="contact-github" target="blank" href="https://github.com/PrashantGIT7388">
              {" "}
              <i class="fa-brands fa-github"></i>
            </a>

            <a
            id="contact-linkedin"
              target="blank"
              href="https://www.linkedin.com/in/prashant-yadav-694230240/"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>

        <div
         
        >
          <form 
          // onSubmit={handleSubmit} 
          action="https://getform.io/f/bfc32f0d-445e-4251-a972-b6729aeb2e97" method="POST"
          >
            <h4>Your Name </h4>
            <input id="name" placeholder="Insert Your Name" name="Name" />
            <h4>Email Address</h4>
            <input
              id="email"
              placeholder="Insert Your Email"
              type="email"
              name="Email"
            />

            <h4>Mobile Number</h4>
            <input id="mobile" placeholder="+91" type="number" name="Mobile" />
            {/* <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            /> */}
            <h4>Message</h4>
            <input
              placeholder=" Insert Your Message"
              style={{ paddingTop: "10px", paddingBottom: "90px" }}
              id="message"
              type="text"
              name="Message"
            />

            {/* <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            /> */}
            <div id="formbu">
              <button
                style={{ width: "55%",marginBottom:"20px" }}
                id="btnform"
                type="submit"
                // disabled={state.submitting}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
function App() {
  return <ContactForm />;
}
export default App;
