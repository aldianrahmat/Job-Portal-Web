import React from 'react';

const Jobs = ({ result }) => {
  return (
    <div className='flex flex-row flex-wrap'>
      {result.map((job) => (
        <div key={job.id} className="flex w-full m-3 shadow shadow-blue-500/40 hover:shadow-indigo-500/40 rounded-xl">
          <div className="image-content mx-5 py-5">
            <img src={job.companyLogo} className="w-30" alt={`${job.companyName} logo`} /> 
          </div>
          <div className="desc flex flex-col gap-3  py-5">
            <h3 className='font-medium'>{job.companyName}</h3>
            <h2 className='font-bold text-2xl'>{job.jobTitle}</h2>
            <div className="information-bar flex gap-5 items-center">
              <p>{job.jobLocation}</p>
              <div class="titik"></div>
              <p>{job.employmentType}</p>
              <div class="titik"></div>
              <p>
                {job.salaryType === 'annual'
                  ? `Rp.${job.minPrice}jt - Rp.${job.maxPrice}jt/Bln`
                  : `Rp.${job.minPrice}jt - Rp.${job.maxPrice}jt/Bln`}
              </p>
              <div class="titik"></div>
              <p>{job.postingDate}</p>
            </div>
            <p>{job.description}</p>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default Jobs;
