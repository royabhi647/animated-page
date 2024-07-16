import React, { useEffect, useRef, useState } from 'react';
import './style.css';
import hGif1 from '../assets/h-gif-1.webp';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import Modal from './Modal';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

function Notification({ isAdmin }) {
  const imgRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const [textContent, setTextContent] = useState([
    {
      id: 1,
      heading: "😡 You argue with a colleague",
      paragraph: "You get angry and defensive, instead of staying open and working towards common ground."
    },
    {
      id: 2,
      heading: "🥳 You get a promotion at work",
      paragraph: "You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities."
    },
    {
      id: 3,
      heading: "😟 You attend a class reunion",
      paragraph: "You compare yourself with your peers' achievements, instead of measuring your self-judgement more independently."
    },
    {
      id: 4,
      heading: "🥰 Quable with your partner",
      paragraph: "Because them of doing that thing you. They always do it!, instead of calm and addressing their returns."
    },
    {
      id: 5,
      heading: "🥰 Quable with your partner",
      paragraph: "Because them of doing that thing you. They always do it!, instead of calm and addressing their returns."
    },
    {
      id: 6,
      heading: "😡 You argue with a colleague",
      paragraph: "You get angry and defensive, instead of staying open and working towards common ground."
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const handleEdit = (index) => {
    if (isAdmin) {
      setCurrentItem(textContent[index]);
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
    ).to(
      imgRef.current,
      { x: 0, y: 0, duration: 1, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    const scrollSpeed = 2;
    let scrollInterval;

    const autoScroll = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += scrollSpeed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
    };

    const startScrolling = () => {
      scrollInterval = setInterval(autoScroll, 50);
    };

    const stopScrolling = () => {
      clearInterval(scrollInterval);
    };

    startScrolling();

    scrollContainer.addEventListener('mouseenter', stopScrolling);
    scrollContainer.addEventListener('mouseleave', startScrolling);

    return () => {
      clearInterval(scrollInterval);
      scrollContainer.removeEventListener('mouseenter', stopScrolling);
      scrollContainer.removeEventListener('mouseleave', startScrolling);
    };
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
        <div className="flex space-x-4 relative" style={{ width: 'fit-content' }}>
          {textContent.map((item, index) => (
            <div className="bg-blue-100 p-4 rounded-lg min-w-[250px] relative" key={item.id}>
              <h3 className="font-bold mb-2">{item.heading}</h3>
              <p>{item.paragraph}</p>

              {isAdmin && (
                <button className='h-5 border-pink-100 bg-pink-400 p-1 flex items-center absolute right-2 bottom-2' onClick={() => handleEdit(index)}>Edit</button>
              )}
            </div>
          ))}
        </div>
      </div>

      {showModal && (
        <Modal item={currentItem} onClose={handleCloseModal} currentItem = {currentItem} textContent = {textContent} setTextContent = {setTextContent} />
      )}
    </div>
  );
}

export default Notification;
