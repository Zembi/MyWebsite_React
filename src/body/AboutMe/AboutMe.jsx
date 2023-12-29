import { useState, useEffect } from 'react';
import './AboutMe.css';
import { isMobile } from '../../generalFunctions';

function AboutMe(props) {
   useEffect(() => {
      window.history.replaceState(null, "About Me", "./about_me");
      document.title = 'About Me';
   }, []);

   return (
      <>
         <div className="wrappedContent">
            <div className="about_me">
               About Me
            </div>
         </div>
      </>
   );
}

export default AboutMe;