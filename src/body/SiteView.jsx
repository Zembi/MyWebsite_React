import { useState, useEffect } from 'react';
import './SiteView.css';
import { isMobile } from '../generalFunctions';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';

function SiteView(props) {
      const currentNav = props.currentNav;
      var content = '';


      if (currentNav === "Home") {
            content = <Home />;
      }
      else if (currentNav === "About Me") {
            content = <AboutMe />;
      }


      return (
            <main id="main_content">
                  <div className="current_view">
                        {content};
                  </div>
            </main>
      );
}

export default SiteView;