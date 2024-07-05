import React, { useEffect, useRef } from 'react'
import mScreen from '../assets/m-screen.png'
import hGif1 from '../assets/h-gif-1.webp';
import hGif2 from '../assets/h-gif-2.webp';
import hGif3 from '../assets/h-gif-3.webp';
import hGif4 from '../assets/h-gif-4.webp';
import Card from './Card'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


function Home() {
   const circleRef = useRef(null);
   const hGif2Ref = useRef(null);
   const hGif3Ref = useRef(null);
   const hGif4Ref = useRef(null);

   useEffect(() => {
      gsap.to(circleRef.current, {
         rotate: -360,
         duration: 2,
         scrollTrigger: {
            trigger: circleRef.current,
            start: 'top 10%',
            end: 'bottom 20%',
            toggleActions: 'play none none reset',
         }
      });
   }, []);

   useEffect(() => {
      const tl = gsap.timeline();

      tl.fromTo(
         hGif2Ref.current,
         { x: -200, y: 200, opacity: 0 },
         { x: 0, y: 0, opacity: 1, duration: 1, ease: "power3.out", repeat: -1 }
      )
         .fromTo(
            hGif3Ref.current,
            { x: 200, y: 200, opacity: 0 },
            { x: 0, y: 0, opacity: 1, duration: 1, ease: "power3.out", repeat: -1 },
            "-=0.5"
         )
         .fromTo(
            hGif4Ref.current,
            { x: -200, y: -200, opacity: 0 },
            { x: 0, y: 0, opacity: 1, duration: 1, ease: "power3.out", repeat: -1 },
            "-=0.5"
         );
   }, []);


   return (
      <div className='flex justify-center' id='emotions'>
         <div className="bg-purple-100 h-[90vh] flex items-center justify-around md:p-4 rounded-3xl w-[90vw] relative">
            <div className="w-1/2 text-left">
               <p className="md:text-lg sm:text-sm mb-6">Ahead app</p>
               <h1 className="md:text-4xl sm:text-2xl font-bold mb-4 w-72">Master your life by mastering emotions</h1>
               <a
                  href="https://apps.apple.com"
                  className="bg-black text-white px-2 rounded-md inline-flex items-center w-46"
               >
                  <img src="https://img.icons8.com/?size=100&id=S7uGGzULpRw4&format=png&color=000000" alt="App Store" className="h-6 w-6 mr-2 bg-white" />
                  <div className='text-center'><p className='font-thin text-xs'>Download on the</p> <p>App Store</p></div>
               </a>
               <p className="text-sm mt-2">100+ AppStore reviews</p>
               <div className="absolute" style={{ top: '10%', left: '10%' }} ref={hGif2Ref}>
                  <img src={hGif2} alt="Ghost" className="h-16 w-16" />
               </div>
               <div className="absolute" style={{ top: '10%', right: '50%' }} ref={hGif3Ref}>
                  <img src={hGif3} alt="Ghost" className="h-16 w-16" />
               </div>
               <div className="absolute" style={{ top: '30%', left: '30%' }} ref={hGif4Ref}>
                  <img src={hGif4} alt="Ghost" className="h-16 w-16" />
               </div>
            </div>
            <div className="relative w-[500px] h-[500px]">
               <div className="w-[500px] h-[500px] bg-purple-200 rounded-full border-4 border-dashed border-white flex items-center justify-center" ref={circleRef}>
                  <div className="absolute" style={{ bottom: '10%', left: '10%' }}>
                     <img src={hGif2} alt="Ghost" className="h-16 w-16" />
                  </div>
                  <div className="absolute" style={{ bottom: '10%', right: '10%' }}>
                     <img src={hGif3} alt="Ghost" className="h-16 w-16" />
                  </div>
                  <div className="absolute" style={{ top: '10%', left: '10%' }}>
                     <img src={hGif4} alt="Ghost" className="h-16 w-16" />
                  </div>
               </div>
               <div className="flex items-center justify-center absolute inset-0">
                  <Card
                     imgSrc={hGif1}
                     title={"Can you find what best calms you down?"}
                     duration={"4 min"}
                  />
                  <img src={mScreen} className="max-h-[400px] max-w-full object-contain" alt='Mobile Screen' />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Home;