import React, { useEffect, useRef } from 'react';
import hGif4 from "../assets/h-gif-4.webp";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger,MotionPathPlugin);

function Instruction() {
   const textRef1 = useRef(null);
   const textRef2 = useRef(null);
   const textRef3 = useRef(null);
   const imageRef = useRef(null);
   const imageRef1 = useRef(null);

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

      gsap.fromTo(
         textRef1.current,
         { x: -100, opacity: 0 },
         { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: {
            trigger: textRef1.current,
            start: 'top 80%',
            toggleActions: 'play none none reset'
         }}
      );
      gsap.fromTo(
         textRef2.current,
         { x: -100, opacity: 0 },
         { x: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5, scrollTrigger: {
            trigger: textRef2.current,
            start: 'top 80%',
            toggleActions: 'play none none reset'
         }}
      );
      gsap.fromTo(
         textRef3.current,
         { x: 300, opacity: 0 },
         { x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: {
            trigger: textRef3.current,
            start: 'top 80%',
            toggleActions: 'play none none reset'
         }}
      );
      gsap.fromTo(
         imageRef.current,
         { opacity: 0 },
         {
            opacity: 1,
            duration: 2,
            ease: "power3.out",
            motionPath: {
               path: [
                  { x: 0, y: 200 },  // Start below the view
                  { x: 50, y: 100 }, // Midway point creating a curve
                  { x: 0, y: 0 }     // End at the final position
               ],
               curviness: 1.5
            },
            scrollTrigger: {
               trigger: imageRef.current,
               start: 'top 80%',
               toggleActions: 'play none none reset'
            }
         }
      );
      gsap.fromTo(
         imageRef1.current,
         {opacity: 0},
         {
            opacity: 1,
            duration: 2,
            ease: "power3.out",
            motionPath: {
               path: [
                  {x: 0, y: 150},
                  {x: 50, y: 100},
                  {x: 0, y: 0}
               ],
               curviness: 1.5
            },
            scrollTrigger: {
               trigger: imageRef1.current,
               start: 'top 80%',
               toggleActions: 'play none none reset'
            }
         }
      );
   }, []);

   return (
      <div className='flex justify-center' id='self-awareness-test'>
         <div className="bg-pink-100 w-[90vw] h-[80vh] p-4 rounded-3xl flex items-center">
            <div className="flex flex-col">
               <div className="mb-6 mt-16 pl-8">
                  <p ref={textRef1} className="text-gray-900 mb-2">Built out of frustration</p>
                  <h1 ref={textRef2} className="text-4xl font-bold mb-4">Meet the ahead app</h1>
               </div>
               <div className="flex w-full mt-16">
                  <div className="relative w-1/2 flex justify-center" ref={imageRef}>
                     <img src={hGif4} alt="Ghost Icon" className="w-32 h-32 rounded-full" />
                     <div className="bg-white rounded-full p-1 h-6 w-6 flex justify-center items-center absolute top-[-10px]" ref={imageRef1}>
                        <span className="text-yellow-500 font-bold">1</span>
                     </div>
                  </div>
                  <div className='w-1/2 flex flex-col justify-center' ref={textRef3}>
                     <p className="text-lg text-gray-900 mb-2">A personalized pocket coach that provides bite-sized, science-driven tools to boost emotional intelligence.</p>
                     <p className="text-lg text-gray-900">Think of it as a pocket cheerleader towards a better, more fulfilling life.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Instruction;