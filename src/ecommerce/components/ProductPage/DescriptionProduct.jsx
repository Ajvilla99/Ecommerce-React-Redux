import React from 'react'

export const DescriptionProduct = ({description}) => {

  const paragraphs = description.split('/');

  return (
    <div className='w-full p-5 lg:pl-7 lg:pr-10 lg:py-5'>
        <div>
            <h3 className='text-xl'>Descripción:</h3>
        </div>
        { paragraphs.map((paragraph, index) => (
            <p key={index + paragraph} className='mt-6 text-black/60'>{paragraph}</p>
      ))}
    </div>
  )
}
