import React, {useState} from 'react'
import {FiSearch,FiMap} from "react-icons/fi"

const Banner = ({query, handleInputChange}) => {

    return (
        <div className='max-w-screen-2x1 container mx-auto x1:px-24 px-24 md:py-20 py-14 '>
            <h1 className='text-5xl font-bold text-primary mb-3'>Temukan <span className='text-blue'> pekerjaan baru  </span> Anda hari ini</h1>
            <p className='text-lg text-black/50 mb-8'>Ribuan pekerjaan di sektor komputer, teknik, dan teknologi menanti Anda</p>

            <form>
                <div className='flex justify-start md:flex-row flex-col md:gap-0 gap-4'>
                    <div className='flex md:round-s-md rounded shadow-sm ring-1 ring-insert  
                    focus-within:ring-2 focus-within:ring-insert focus-within:ring-indigo-600 md:w-1/2 w-full'>
                        <input type="text" name="title" id="title" placeholder='developer'
                        className='black flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900
                        placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 '
                        onChange={handleInputChange}
                        value={query} />
                        <FiSearch className='absolute mt-2.5 ml-2 text-gray-400'
                        
                        />
                    </div>
                    <div className='flex md:round-s-none rounded shadow-sm ring-1 ring-insert  
                    focus-within:ring-2 focus-within:ring-insert focus-within:ring-indigo-600 md:w-1/3 w-full'>
                        <input type="text" name="title" id="title" placeholder='Lokasi'
                        className='black flex-1 border-0 bg-transparent py-1.5 pl-8 text-gray-900
                        placeholder:text-gray-400 focus:right-0 sm:text-sm sm:leading-6 '
                        value={""} />
                        <FiMap className='absolute mt-2.5 ml-2 text-gray-400'
                        />
                    </div>

                    <button type='submit' className='bg-blue py-2 px-8 text-white md:rounded-s-none rounded'>
                        Cari
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Banner