import React from 'react';
import { FaMapMarkerAlt, FaRegMoneyBillAlt, FaCalendarAlt, FaUserTie } from "react-icons/fa";

const Jobs = ({ result }) => {
  return (
    <div className='flex flex-row flex-wrap'>
      {result.map((job) => (
        <div key={job.id} className="flex w-full m-3 shadow shadow-blue-500/40 hover:shadow-indigo-500/40 rounded-xl">
          <div className="image-content mx-5 py-5">
            <img 
              src={job.companyLogo} 
              className={`w-${job.companyName === 'Notion' ? '20' : '24'} h-${job.companyName === 'Notion' ? '20' : '24'} object-contain`} 
              alt={`${job.companyName} logo`} 
            /> 
          </div>
          <div className="desc flex flex-col justify-between gap-3 py-5">
            <div>
              <h3 className='font-medium'>{job.companyName}</h3>
              <h2 className='font-bold text-2xl'>{job.jobTitle}</h2>
              <div className="information-bar flex gap-5 items-center">
                <FaMapMarkerAlt className="text-gray-500" />
                <p>{job.jobLocation}</p>
                <FaUserTie className="text-gray-500 ml-auto" />
                <p>{job.employmentType}</p>
                <FaRegMoneyBillAlt className="text-gray-500 ml-auto" />
                <p>
                  {job.salaryType === 'annual'
                    ? `Rp.${job.minPrice}jt - Rp.${job.maxPrice}jt/Bln`
                    : `Rp.${job.minPrice}jt - Rp.${job.maxPrice}jt/Bln`}
                </p>
                <FaCalendarAlt className="text-gray-500 ml-auto" />
                <p>{job.postingDate}</p>
              </div>
            </div>
            <p>{job.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
