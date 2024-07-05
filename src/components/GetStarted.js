import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger, TextPlugin);


function GetStarted() {
   const textRef = useRef(null);

   useEffect(() => {
      if (textRef.current) {
         gsap.fromTo(
            textRef.current,
            { opacity: 0 },
            {
               opacity: 1,
               duration: 2,
               ease: "power3.out",
               text: "",
               onComplete: () => {
                  gsap.to(textRef.current, {
                     text: "Team Alpha",
                     duration: 2,
                     delay: 1,
                     ease: "power3.out",
                     
                  });
               },
               scrollTrigger: {
                  trigger: textRef.current,
                  start: 'top 80%',
                  toggleActions: 'play none none reset'
               }
            }
         );
      }
   }, []);

   return (
      <div className="bg-white p-8 mx-auto max-w-xl text-center">
         <p className="text-gray-600 text-lg">We take privacy seriously</p>
         <h1 className="text-2xl mt-4 font-bold">Before you get started</h1>
         <p className="italic mt-4">"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"</p>
         <p className="mt-6 text-lg">with love, <span ref={textRef} className='italic'>Team Alpha</span></p>
         <button className="mt-6 bg-black text-white rounded-full py-2 px-8 focus:outline-none hover:bg-gray-800 transition-colors">Start a test</button>
         <p className="text-gray-500 mt-4">Take only 5 minutes</p>
      </div>
   )
}

export default GetStarted;