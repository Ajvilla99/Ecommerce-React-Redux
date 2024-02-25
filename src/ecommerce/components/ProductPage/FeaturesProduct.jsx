import React from 'react'

export const FeaturesProduct = ({ features }) => {

  
  return (
    <div className='w-full p-5'>
      <div className='lg:px-4 mb-3'>
        <h3 className='text-xl'>Caracteristicas</h3>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 lg:px-4'>
        {
          Object.entries(features).map(([key, value], i)=>(
            <div key={i} className='py-2'>
              <span className='text-sm'>{key}: </span>
              <span className='text-sm ml-2 font-semibold'>{value}</span>
            </div>
          ))
        }
      </div>
    </div>
  )
}
