import { useState, useEffect } from 'react';
import './Header.css';
import { isMobile } from '../generalFunctions';
import { gsap } from 'gsap';

function Header(props) {
      const navMenu = props.navMenu;
      useEffect(() => {
            props.nav.changeNav;

            gsap.fromTo('.header_nav_btn_wrap',
                  {
                        x: -200
                  },
                  {
                        x: 0,
                        stagger: 0.2
                  }
            );
      }, []);

      function handleClick(e, item) {
            if (props.nav.navigate !== item) {
                  if (!props.activated.activated) {
                        props.nav.changeNav(item);
                        props.activated.handleAnim(true);
                  }
            }
      }

      return (
            <>
                  <header className="header_full_wrap">
                        <div className="header_wrap">
                              {!isMobile() ?
                                    navMenu.map(item =>
                                          <div className="header_nav_btn_wrap" key={'btn_wrap_nav_' + item}>
                                                <button className="header_nav_btn" onClick={(e) => handleClick(e, item)}>{item}</button>
                                          </div>
                                    ) : ""}
                        </div>
                  </header>
            </>
      );
}

export default Header;