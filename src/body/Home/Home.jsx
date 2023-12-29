import { useState, useEffect } from 'react';
import './Home.css';
import { isMobile } from '../../generalFunctions';
import SplitChars from '../../GeneralComponents/SplitChars';

function Home(props) {

   useEffect(() => {
      window.history.replaceState(null, "Homepage", "./home");
      document.title = 'Homepage';

      document.querySelectorAll('.home h1 .split_char:nth-child(4n)').forEach(item => item.classList.add('special_nth_char'));
   }, []);

   return (
      <>
         <div className="wrappedContent">
            <div className="home">
               <h1><SplitChars animeType='upwards'>Vasileios Filippos Zempilas</SplitChars></h1>
            </div>
         </div>
      </>
   );
}

export default Home;