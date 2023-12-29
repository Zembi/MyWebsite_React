import { useState, useEffect } from 'react';
import './MultiuseComponentsCss.css';
import { gsap } from 'gsap';

function SplitChars(props) {
   const msg = props.children.split('');

   console.log(gsap)
   if (props.animeType === "upwards") {
      useEffect(() => {
         gsap.context(() => {
            gsap.fromTo('.split_char',
               {
                  y: 150,
               },
               {
                  y: 0,
                  stagger: 0.1
               }
            );
         });
      }, []);
   }

   let c = 0;
   return (
      <span className="chars_anim_wrap">
         {
            msg.map(char => {
               c++;
               return (<span className="split_char" key={"split_char_" + c}>{char}</span>)
            })
         }
      </span>
   );
}

export default SplitChars;