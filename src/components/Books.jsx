import React from 'react';

export const Books = ({ id, img, title, price, color }) => {
  return (
    <div className='bookContainer ' key={id}>
      <a className='block' href=''>
        <img
          className='object-cover w-full h-56 shadow-xl rounded-xl'
          src={img}
          alt=''
        />

        <div className='p-4 text-center w-full'>
          <h5 className='text-xl font-bold text-gray-900'>{title}</h5>
          <p className='mt-2 text-gray-500' style={{ color }}>
            {price}
          </p>
        </div>
      </a>
    </div>
  )
}

