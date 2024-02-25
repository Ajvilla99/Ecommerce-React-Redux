import React from 'react'
import { renderRatingStarts } from '../../helpers'

export const CommentSection = ({rating, comments}) => {

  const stars = renderRatingStarts(rating)

  return (
    <section className='w-full lg:w-desktop p-4  flex flex-col lg:flex-row bg-white mt-1 rounded-md'>
        <div className='w-full lg:w-60 '>
            <div className='py-3'>
                <p className='font-semibold'>Reseñas de clientes:</p>
            </div>
            <div className='w-full flex flex-col lg:flex-row gap-1.5 py-3 text-actions-success'>
                <span className='flex gap-1 text-4xl font-semibold'>
                    <span>{rating}</span>
                </span>
                <div>
                <span className='flex text-xl'>
                    {stars.map( star => star)}
                </span>
                <span className='flex items-center gap-1'>
                    <span>{ comments.length }</span>
                    <span>comentarios</span>
                </span>
                </div>
            </div>
        </div>

        <hr className='lg:mx-7'/>           
        
        <div className='py-3 flex flex-col'>
            {
                comments.map(({user, text, rating}, i)=>(
                    <div key={`${user} comment ${i}`} className='mb-1'>
                        <div className='w-full h-12 flex items-center'>
                            <span className='flex w-12 h-full'></span>
                            <span className='flex'>{user}</span>
                        </div>
                        <span className=''>
                            <p>{text}</p>
                        </span>
                    </div>
                ))
            }
        </div>
        
    </section>
  )
}
