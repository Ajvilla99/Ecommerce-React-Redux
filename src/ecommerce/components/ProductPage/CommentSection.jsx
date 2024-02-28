import React, { useState } from 'react'
import { renderRatingStarts } from '../../helpers';

// Icons
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { IoEllipsisVertical, IoCloseOutline } from 'react-icons/io5';
import { RxStarFilled } from 'react-icons/rx';

export const CommentSection = ({rating, comments}) => {

    const [ likes, setLikes ] = useState(comments.map(() => false));
    const [imageModal, setImageModal] = useState(false);

    const toggleLike = (index) => {
        setLikes(prevLikes => {
            const newLikes = [...prevLikes];
            newLikes[index] = !newLikes[index];
            return newLikes
        });
    };

    const ratingFilterString = [ 'todas', '5', '4', '3', '2', '1'];

  return (
    <section className='w-full lg:w-desktop p-4 flex flex-col lg:flex-row lg:justify-around bg-white mt-1 rounded-md'>
        <div className='w-full lg:w-80 lg:p-5'>
            <div className=''>
                <p className='font-semibold'>Reseñas del producto:</p>
            </div>
            <div className='w-full flex items-center justify-between gap-1.5 py-1.5 text-actions-success'>
                <div className='flex items-center gap-0.5'>
                    <span className='flex gap-1 text-5xl font-semibold'>
                        <span>{rating.toFixed(1)}</span>
                    </span>
                    <div>
                    <span className='flex text-xl'>
                        {renderRatingStarts(rating).map( star => star)}
                    </span>
                    <span className='flex items-center gap-1'>
                        <span>{ comments.length }</span>
                        <span>comentarios</span>
                    </span>
                    </div>
                    <div className='hidden lg:block'>
                        <div className='w-full h-10 overflow-hidden border-b'>

                        </div>
                    </div>
                </div>
                <div className='py-2 lg:hidden'>
                    <button
                        onClick={()=>setImageModal(true)}
                        className='px-2 py-1.5 bg-actions-success/30 rounded-e-2xl rounded-s-2xl'>
                        filtrar
                    </button>
                </div>
            </div>
        </div>
        <hr className='lg:hidden'/>
        {/* ---- Comments ---- */}
        <div className='w-full max-w-[700px] pb-3 flex flex-col'>
            {
                comments.map(({user, text, image, rating}, i)=>(
                    <div key={`${user} comment ${i}`} className='mb-1 pt-3 relative'>
                        <div className='w-full h-10 flex gap-2 items-center'>
                            <div className='flex w-10 h-full bg-primary rounded-full overflow-hidden'>
                                <img src={'https://i.imgur.com/773QfGA.jpg'} alt="" className='w-full h-full object-contain' />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <span className='flex capitalize'>{user}</span>
                                <span className='flex text-actions-success'>
                                    { renderRatingStarts(rating).map(star => star) }
                                </span>
                            </div>
                        </div>
                        <span className='text-sm text-black/80'>
                            <p className='line-clamp-4 px-1 mt-2'>{text}</p>
                        </span>
                        <div className='mt-2 mb-3'>
                            <button
                                onClick={()=>toggleLike(i)}
                                className='bg-actions-success/10 text-actions-success flex gap-2 items-center px-3 py-1.5 rounded-s-2xl rounded-e-2xl'>
                                <span>{`Útil`}</span>
                                <span className='text-base'>{ likes[i] ? <AiFillLike /> : <AiOutlineLike/> }</span>
                            </button>
                        </div>
                        <hr className='lg:mx-7'/>
                        <button className='absolute text-lg right-3 top-5 text-actions-success/80'>
                            <IoEllipsisVertical />
                        </button>
                        {/* ---- Modal ---- */}
                        { imageModal && <div className='w-full h-screen bg-black/40 fixed bottom-0 right-0 top-0 left-0 z-10'></div> }
                        {
                            imageModal &&
                                <div className='w-full h-[360px] p-5 fixed flex flex-col justify-between left-0 bottom-0 bg-white rounded-t-xl z-30 animate-growHeight'>
                                    <div className='flex flex-col relative'>
                                {/* Close Modal */}
                                        <button 
                                            onClick={()=>setImageModal(!imageModal)}
                                            className='absolute w-10 h-10 flex items-center justify-center -top-[65%] -right-[3%] text-2xl text-white'>
                                                <IoCloseOutline />
                                            </button>
                                        <span>Filtrar por:</span>
                                        <span className='mt-3 text-sm'>Ordenar</span>
                                        <div className='mt-3 flex gap-3 text-sm'>
                                            <button className='p-2 rounded-3xl border border-black/50'>Mas útiles</button>
                                            <button className='p-2 rounded-3xl border border-black/50'>Más Recientes</button>
                                        </div>
                                    </div>
                                    <hr className='lg:mx-7'/>
                                    <div>
                                        <span className='text-sm'>Calificación</span>
                                        <div className='w-full flex flex-wrap gap-2 mt-3'>
                                            {
                                             ratingFilterString.map((_, i) => (
                                                <button key={i + _} className='border border-black/50 min-w-12 rounded-s-xl rounded-e-xl px-2 flex items-center justify-between'>
                                                    {_}
                                                    { i > 0 && <span className='text-actions-success ml-1'> <RxStarFilled /> </span>}
                                                </button>
                                             ))
                                            }
                                        </div>
                                    </div>
                                    <div className='mb-6'>
                                        <button className='w-full bg-blue-950/20 py-3 rounded-md text-sm'>
                                            Aplicar
                                        </button>
                                    </div>
                                </div>
                        }   
                    </div>
                ))
            }
        </div>
    </section>
  )
}
