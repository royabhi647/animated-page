import React, { useEffect, useRef } from 'react';
import './style.css';
import hGif1 from '../assets/h-gif-1.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function Notification() {
   const imgRef = useRef(null);
   const scrollContainerRef = useRef(null);


   useEffect(() => {
      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: imgRef.current,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reset',
         }
      });
      tl.fromTo(
         imgRef.current,
         { x: 400, y: -100, opacity: 0 },
         { x: 0, y: 300, opacity: 1, duration: 1, ease: "power3.out" }
      )
         .to(
            imgRef.current,
            { x: 0, y: 0, duration: 1, ease: "power3.out" }
         );
   }, []);

   useEffect(() => {
      const scrollContainer = scrollContainerRef.current;
      const scrollSpeed = 2;

      const autoScroll = () => {
         if (scrollContainer) {
            scrollContainer.scrollLeft += scrollSpeed;
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
               scrollContainer.scrollLeft = 0;
            }
         }
      };

      const scrollInterval = setInterval(autoScroll, 50);

      return () => clearInterval(scrollInterval);
   }, []);

   return (
      <div className="flex flex-col bg-white py-10" id='manifesto'>
         <div className="flex justify-center bg-white py-10">
            <div className="w-full">
               <div className="mb-10 flex justify-center">
                  <h1 className="text-3xl font-bold w-1/4 text-left">EQ beats IQ</h1>
                  <div className="text-lg flex justify-center w-1/2">
                     <div className='w-full px-4'>
                        <p>People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.</p>
                     </div>
                     <div className='w-full px-4'>
                        <p>They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="mb-10 flex ml-40">
            <h1 className="text-3xl font-bold mb-4">Does this sound familiar...</h1>
            <div className="flex ml-8 justify-center items-center">
               <img ref={imgRef} src={hGif1} alt="Ghost Icon" className="h-16 w-16" />
            </div>
         </div>

         <div className="w-[80vw] ml-36 overflow-x-auto scroll-container" ref={scrollContainerRef}>
            <div className="flex space-x-4 " style={{ width: 'fit-content' }}>
               <div className="bg-blue-100 p-4 rounded-lg min-w-[250px]">
                  <h3 className="font-bold mb-2">😡 You argue with a colleague</h3>
                  <p>You get angry and defensive, instead of staying open and working towards common ground.</p>
               </div>
               <div className="bg-purple-100 p-4 rounded-lg min-w-[250px]">
                  <h3 className="font-bold mb-2">🥳 You get a promotion at work</h3>
                  <p>You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.</p>
               </div>
               <div className="bg-yellow-100 p-4 rounded-lg min-w-[250px]">
                  <h3 className="font-bold mb-2">😟 You attend a class reunion</h3>
                  <p>You compare yourself with your peers' achievements, instead of measuring your self-judgement more independently.</p>
               </div>
               <div className="bg-purple-300 p-4 rounded-lg min-w-[250px]">
                  <h3 className="font-bold mb-2">🥰 Quable with your partner</h3>
                  <p>Because them of doing that thing you. They always do it!, instead of calm and addressing their returns.</p>
               </div>
               <div className="bg-yellow-300 p-4 rounded-lg min-w-[250px]">
                  <h3 className="font-bold mb-2">🥰 Quable with your partner</h3>
                  <p>Because them of doing that thing you. They always do it!, instead of calm and addressing their returns.</p>
               </div>
               <div className="bg-blue-200 p-4 rounded-lg min-w-[250px]">
                  <h3 className="font-bold mb-2">😡 You argue with a colleague</h3>
                  <p>You get angry and defensive, instead of staying open and working towards common ground.</p>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Notification;
