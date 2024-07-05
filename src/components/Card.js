import React, {useEffect, useRef} from 'react';
import { gsap } from 'gsap';
import {ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Card({ imgSrc, title, duration }) {
   const cardRef = useRef(null);

   useEffect(() => {
      gsap.fromTo(
         cardRef.current,
         { x: 100, opacity: 0, rotate: 45},
         {
            x: 0,
            opacity: 1,
            rotate: 0,
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: {
               trigger: cardRef.current,
               start: 'top 36%',
               toggleActions: 'play none none reset'
            }
         }
      )
   },[])

  return (
    <div className="bg-white shadow-lg rounded-lg p-2 flex flex-col items-center w-[170px] h-[170px]" ref={cardRef}>
      <img src={imgSrc} alt="Activity" className="h-16 w-16 mb-4" />
      <h6 className="text-sm font-semibold mb-2">{title}</h6>
      <p className="text-sm text-gray-600">Practice - {duration}</p>
    </div>
  );
}

export default Card;
