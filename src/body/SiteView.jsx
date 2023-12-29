import { useState, useEffect } from 'react';
import './SiteView.css';
import { isMobile } from '../generalFunctions';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';

function SiteView(props) {
      const currentNav = props.currentNav;

      return (
            <main id="main_content">
                  <div className="current_view">
                        {(props.currentNav === "Home") ?
                              <Home />
                              : (props.currentNav === "About Me") ?
                                    <AboutMe />
                                    : ''
                        }
                  </div>
            </main>
      );
}

export default SiteView;