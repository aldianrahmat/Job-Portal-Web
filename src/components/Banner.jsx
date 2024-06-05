import React from 'react';
import { FiSearch, FiMap } from "react-icons/fi";

const Banner = ({ query, handleInputChange, location, handleLocationChange, handleSearch }) => {
    const onSubmit = (event) => {
        event.preventDefault();
        handleSearch();
    };

    return (
        <div className='max-w-screen-2xl container mx-auto xl:px-24 px-24 md:py-20 py-14'>
            <h1 className='text-5xl font-bold text-primary mb-3'>
                Temukan <span className='text-blue'>pekerjaan baru</span> Anda hari ini
            </h1>
            <p className='text-lg text-black/50 mb-8'>
                Ribuan pekerjaan di sektor komputer, teknik, dan teknologi menanti Anda
            </p>

            <form onSubmit={onSubmit}>
                <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
                    <div className='relative flex md:rounded-md rounded shadow-sm ring-1 ring-inset border-blue-500 
                    md:w-1/2 w-full'>
                        <input 
                            type="text" 
                            name="title" 
                            id="job-title" 
                            placeholder='Posisi Pekerjaan'
                            className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 
                            placeholder:text-gray-400 focus:border-blue-500 focus:ring-0 sm:text-sm sm:leading-6'
                            onChange={handleInputChange}
                            value={query} 
                        />
                        <FiSearch className='absolute mt-2.5 ml-2 text-gray-400' />
                    </div>

                    <div className='relative flex md:rounded-md rounded shadow-sm ring-1 ring-inset border-blue-500 
                    md:w-1/2 w-full md:ml-4 mt-4 md:mt-0'>
                        <input 
                            type="text" 
                            name="location" 
                            id="location" 
                            placeholder='Lokasi'
                            className='block flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900 
                            placeholder:text-gray-400 focus:border-blue-500 focus:ring-0 sm:text-sm sm:leading-6' 
                            onChange={handleLocationChange}
                            value={location} 
                        />
                        <FiMap className='absolute mt-2.5 ml-2 text-gray-400' />
                        <button type='submit' className='bg-blue py-2 px-8 text-white rounded-r-md'>
                            Cari
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Banner;
