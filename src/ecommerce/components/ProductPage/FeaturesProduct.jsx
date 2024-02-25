import React from 'react'

export const FeaturesProduct = ({ features }) => {

  
  return (
    <div className='w-full p-4'>
      <div className=''>
        <h3 className='font-semibold text-lg'>Caracteristicas</h3>
      </div>
      {
        Object.entries(features).map(([key, value], i)=>(
          <div key={i} className="mb-2">
          <span className="font-semibold">{key}: </span>
          <span>{value}</span>
        </div>
        ))
      }
    </div>
  )
}
