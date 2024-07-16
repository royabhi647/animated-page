import React, { useState } from 'react';
import VacanciesModal from './VacanciesModal';

const OpenVacancies = ({ isAdmin }) => {
   const [currentOpenings, setCurrentOpenings] = useState([
      {
         id: 1,
         jobTitle: "Senior Full-Stack Engineer",
         employementType: "Full-time position",
         jobLocation: "Berlin or remote",
         salary: "€65-85k, 0.5-1.50% equity share options"
      },
      {
         id: 2,
         jobTitle: "Senior Designer",
         employementType: "Full-time position",
         jobLocation: "Berlin or remote",
         salary: "€40-55k, 0.25-0.50% equity share options"
      },
      {
         id: 3,
         jobTitle: "Superstar Intern",
         employementType: "Full-time position",
         jobLocation: "Berlin or remote",
         salary: "€20-24k, 0.5-1.50% equity share options"
      }
   ])

   const [hoveredIndex, setHoveredIndex] = useState(null);
   const [showModal, setShowModal] = useState(false);
   const [currentItem, setCurrentItem] = useState(null);

   const handleEdit = (index) => {
      if (isAdmin) {
        setCurrentItem(currentOpenings[index]);
        setShowModal(true);
      }
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };

   return (
      <div className="bg-white py-8">
         <h1 className="text-3xl font-bold text-center mb-8">Open vacancies</h1>
         <div className="flex flex-col md:flex-row justify-center items-center gap-8">
            {currentOpenings.map((opening, index) => (
               <div
                  className="bg-yellow-100 p-6 rounded-lg shadow-lg w-80 relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  key={opening.jobTitle}
               >
                  <h2 className="text-xl font-semibold mb-4">{opening.jobTitle}</h2>
                  <ul className="list-disc list-inside">
                     <li>{opening.employementType}</li>
                     <li>{opening.jobLocation}</li>
                     <li>{opening.salary}</li>
                  </ul>

                  {isAdmin && hoveredIndex === index && (
                     <button className="absolute bottom-2 right-2 bg-blue-500 text-white p-1 rounded" onClick={(e) => handleEdit(index)}>
                        Edit
                     </button>
                  )}
               </div>
            ))}
         </div>

         {showModal && (
        <VacanciesModal item={currentItem} onClose={handleCloseModal} currentItem = {currentItem} currentOpenings = {currentOpenings} setCurrentOpenings = {setCurrentOpenings} />
      )}
      </div>
   );
};

export default OpenVacancies;