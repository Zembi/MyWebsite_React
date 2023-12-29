import { useState, useEffect } from 'react';
import './App.css';
import Header from './header/Header';
import SiteView from './body/SiteView';
import { func } from 'prop-types';

function App() {
  // FOR RESIZE
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });
  useEffect(() => {
    const resize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', resize)
  }, [])
  // NAVIGATION 
  const [activated, setActivated] = useState(false);
  function handleAnim(flag) {
    setActivated(flag);
  }

  const navMenu = ['Home', 'About Me', 'Portfolio', 'Contact'];
  const [navigate, setNavigate] = useState(navMenu[0]);
  function changeNav(page) {
    // ADD CURRENT VIEW TO PREVIOUS SO AS TO CREATE AN EFFECT
    if (page !== navigate) {
      const mainContent = document.getElementById('main_content');
      const prev_view = document.createElement('div');
      prev_view.className = "prev_view";
      mainContent.prepend(prev_view);
      mainContent.querySelector('.prev_view').innerHTML = document.querySelector('#main_content > .current_view').innerHTML;
      setTimeout(function () {
        mainContent.querySelector('.prev_view').remove();
        handleAnim(false);
      }, 700);

      setNavigate(page);
    }
  }

  return (
    <>
      <Header activated={{ activated, handleAnim }} navMenu={navMenu} nav={{ navigate, changeNav }} />
      <SiteView currentNav={navigate} />
    </>
  )
}

export default App
