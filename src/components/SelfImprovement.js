import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import ghostIcon from '../assets/h-gif-3.webp'
import './style.css';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function SelfImprovement() {
   const sectionRefs = useRef([]);
   const dotRefs = useRef([]);
   const lineRef = useRef(null);
   const textRef = useRef(null);
   const imageRef = useRef(null);

   useEffect(() => {
      gsap.fromTo(
         textRef.current,
         { x: -200, opacity: 0 },
         {
            x: 0, opacity: 1, duration: 1, ease: "power3.out", scrollTrigger: {
               trigger: textRef.current,
               start: 'top 80%',
               toggleActions: 'play none none reset'
            }
         }
      );
      gsap.fromTo(
         imageRef.current,
         { opacity: 0 },
         {
            opacity: 1,
            duration: 3,
            ease: "power3.out",
            motionPath: {
               path: [
                  { x: 0, y: 200 },
                  { x: 50, y: 100 },
                  { x: 0, y: 0 }
               ],
            },
            scrollTrigger: {
               trigger: imageRef.current,
               start: 'top 80%',
               toggleActions: 'play none none reset'
            }
         }
      )
   }, [])

   useEffect(() => {
      sectionRefs.current.forEach((section, index) => {
         ScrollTrigger.create({
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
            onEnter: () => {
               gsap.to(dotRefs.current[index], { backgroundColor: 'blue', duration: 0.5 });
               gsap.to(lineRef.current, { backgroundColor: 'blue', duration: 0.5 });
               gsap.fromTo(section, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power3.out' });
            },
            onLeaveBack: () => {
               gsap.to(dotRefs.current[index], { backgroundColor: 'gray', duration: 0.5 });
               gsap.to(lineRef.current, { backgroundColor: 'gray', duration: 0.5 });
            }
         });
      });
   }, []);

   return (
      <div className="bg-white p-10 rounded-3xl max-w-4xl mx-auto">
         <div className="mb-6 flex">
            <div ref={textRef}>
               <p className="text-gray-950 mb-2">Wrong with self-improvement & how we’re fixing it.</p>
               <h1 className="text-4xl font-bold mb-4 flex items-center">
                  Self-improvement. Ugh.
               </h1>
            </div>
            <div className='flex items-center'>
               <img src={ghostIcon} alt="Ghost Icon" className="ml-8 h-16 w-16 rotate-6" ref={imageRef}/>
            </div>
         </div>

         <div className="relative pl-8 h-[70vh] overflow-y-scroll scroll-container">
            <div className="absolute h-full left-4 top-2 w-1 bg-gray-300" ref={lineRef}></div>
            <div className="space-y-8">
               {[
                  {
                     title: "It's not as easy as 1-2-3.",
                     text: "The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else)."
                  },
                  {
                     title: "Old habits are hard to break.",
                     text: "And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use."
                  },
                  {
                     title: "You and your motivation don’t have a long-term relationship.",
                     text: "Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memorable exercises will help you stick to your goals."
                  },
                  {
                     title: "Books just don’t offer practical solutions.",
                     text: "Remember when you learned to ride a bike just by reading? Yeah, we don’t either."
                  },
                  {
                     title: "Old habits are hard to break.",
                     text: "And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use."
                  }
               ].map((item, index) => (
                  <div
                     key={index}
                     className="relative flex items-start"
                     ref={el => sectionRefs.current[index] = el}
                  >
                     <div
                        className="absolute left-[-22px] top-1 w-4 h-4 bg-gray-300 rounded-full"
                        ref={el => dotRefs.current[index] = el}
                     ></div>
                     <div className="ml-6">
                        <h2 className="font-bold text-lg mb-1">{item.title}</h2>
                        <p className="text-gray-700">{item.text}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default SelfImprovement;