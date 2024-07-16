import React, { useState } from 'react'
import "./style.css";

function VacanciesModal({item, onClose, currentItem, currentOpenings, setCurrentOpenings}) {
   const [jobTitleText, setJobTitleText] = useState(item.jobTitle);
   const [employementTypeText, setEmploymentTypeText] = useState(item.employementType)
   const [jobLocationText, setJobLocationText] = useState(item.jobLocation);
   const [salaryText, setSalaryText] = useState(item.salary);

   const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === 'jobTitle') {
         setJobTitleText(value);
      } else if (name === 'employementType') {
         setEmploymentTypeText(value);
      } else if (name === "jobLocation") {
         setJobLocationText(value);
      } else if (name === "salary") {
         setSalaryText(value);
      }
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const updatedVacancies = currentOpenings.map((item) => {
         if (item.id === currentItem.id) {
            return { ...item, jobTitle: jobTitleText, employementType: employementTypeText, jobLocation: jobLocationText, salary: salaryText };
         }
         return item;
      });
      setCurrentOpenings(updatedVacancies);
      onClose();
   };
   return (
      <div className="modal">
         <div className="modal-content">
            <div className='modal-header'>
               <h2>Edit Vacancies</h2>
               <button onClick={onClose} className="close-button">X</button>
            </div>
            <div className='header-border'></div>
            <form onSubmit={handleSubmit}>
               <div className='input-content'>
                  <label>Job Title</label>
                  <input
                     className='input-placeholder'
                     type="text"
                     name="jobTitle"
                     value={jobTitleText}
                     onChange={handleChange}
                  />
               </div>

               <div className='input-content'>
                  <label>Employement Type</label>
                  <input
                     className='input-placeholder'
                     type="text"
                     name="employementType"
                     value={employementTypeText}
                     onChange={handleChange}
                  />
               </div>

               <div className='input-content'>
                  <label>Job Location</label>
                  <input
                     className='input-placeholder'
                     type="text"
                     name="jobLocation"
                     value={jobLocationText}
                     onChange={handleChange}
                  />
               </div>

               <div className='input-content'>
                  <label>Salary</label>
                  <input
                     className='input-placeholder'
                     type="text"
                     name="salary"
                     value={salaryText}
                     onChange={handleChange}
                  />
               </div>

               <button className='submit-btn' type="submit">Save Changes</button>
            </form>
         </div>
      </div>
   )
}

export default VacanciesModal