import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import icon1 from '../assets/flower-1.webp';
import icon2 from '../assets/flower-2.webp';
import icon3 from '../assets/flower-3.webp';

gsap.registerPlugin(ScrollTrigger);

function FeedbackSection() {
   const iconRefs = useRef([]);
   const textRefs = useRef([]);
   const dotRefs = useRef([]);
   const labelRefs = useRef([]);


   useEffect(() => {
      iconRefs.current.forEach((icon, index) => {
         gsap.fromTo(
            icon,
            { y: 50, opacity: 0, scale: 0.8 },
            {
               y: 0,
               opacity: 1,
               scale: 1,
               duration: 2,
               ease: 'power3.out',
               scrollTrigger: {
                  trigger: icon,
                  start: 'top 90%',
                  toggleActions: 'play none none reverse'
               }
            }
         );
      });

      textRefs.current.forEach((text, index) => {
         gsap.fromTo(
            text,
            { y: 50, opacity: 0 },
            {
               y: 0,
               opacity: 1,
               duration: 2,
               delay: 0.2,
               ease: 'power3.out',
               scrollTrigger: {
                  trigger: text,
                  start: 'top 90%',
                  toggleActions: 'play none none reverse'
               }
            }
         );
      });
   }, []);

   useEffect(() => {
      dotRefs.current.forEach((dot, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: dot,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
  
        tl.fromTo(
          dot,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.3,
            ease: 'power3.out'
          }
        );
      });
  
      labelRefs.current.forEach((label, index) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: label,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
  
        tl.fromTo(
          label,
          { opacity: 0, y: -20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            delay: index * 0.3 + 0.2,
            ease: 'power3.out'
          }
        );
      });
    }, []);

   return (
      <div className="bg-blue-50 p-10 rounded-3xl w-[90vw] mx-auto" id='feedback'>
         <div className="text-center mb-10">
            <p className="text-gray-900 mb-4">Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
            <h1 className="text-4xl font-bold mb-6">Ever wondered what others think of you?</h1>
         </div>

         <div className="relative mb-16 mt-16 flex flex-col justify-center items-center">
            <div className="relative w-[50vw]">
               <div className="absolute top-8 w-full border-t-2 border-dashed border-gray-300"></div>
               <div className="relative flex justify-between">
                  {[
                     { icon: icon1, step: "step-1", text: "Answer questions on your social skills" },
                     { icon: icon2, step: "step-2", text: "Let others anonymously answer the same questions about you" },
                     { icon: icon3, step: "step-3", text: "Find out where you and others see things the same way - and where not!" }
                  ].map((item, index) => (
                     <div key={index} className="flex flex-col items-center relative" style={{ width: '33.33%' }}>
                        <div className="relative mb-4">
                           <img src={item.icon} alt='' className="w-16 h-16 rounded-full bg-white p-2 border-2 border-gray-300"
                              ref={el => iconRefs.current[index] = el}
                           />
                        </div>
                        <p className="text-gray-700 text-center mt-4 px-2"
                           ref={el => textRefs.current[index] = el}
                        >
                           {item.text}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>

         <div className='flex justify-center'>
            <div className="bg-white p-6 rounded-lg shadow-md w-[50vw]">
               <div className="relative">
                  <div className="absolute left-0 right-0 mx-auto w-full h-0.5 bg-gray-200"></div>
                  <div className="flex justify-between items-center w-full">
                     {[
                        { label: "You", color: "bg-purple-500", position: "left-0" },
                        { label: "Anonymonos 1", color: "bg-blue-500", position: "left-1/3" },
                        { label: "Anonymonos 2", color: "bg-yellow-500", position: "left-2/3" },
                        { label: "Anonymonos 3", color: "bg-green-500", position: "left-full" }
                     ].map((item, index) => (
                        <div key={index} className={`relative flex flex-col items-center`}>
                           <div className={`absolute ${item.position} -translate-x-2 w-4 h-4 rounded-full ${item.color}`}
                              ref={el => dotRefs.current[index] = el}
                           ></div>
                           <div className={`mt-6 p-2 rounded-md ${item.color} text-white text-sm whitespace-nowrap`}
                              ref={el => labelRefs.current[index] = el}
                           >
                              {item.label}
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>

      </div>
   );
}

export default FeedbackSection;