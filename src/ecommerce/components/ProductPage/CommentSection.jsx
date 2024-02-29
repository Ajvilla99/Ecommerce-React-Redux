import React, { useState } from 'react'
import { renderRatingStarts } from '../../helpers';

// Icons
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { IoEllipsisVertical, IoCloseOutline } from 'react-icons/io5';
import { RxStarFilled } from 'react-icons/rx';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const CommentSection = ({rating, comments}) => {

    const [ likes, setLikes ] = useState(comments.map(() => false));
    const [ viewState, setviewState ] = useState({ ordener: false, rating: false })
    const [ imageModal, setImageModal ] = useState(false);

    const toggleLike = (index) => {
        setLikes(prevLikes => {
            const newLikes = [...prevLikes];
            newLikes[index] = !newLikes[index];
            return newLikes
        });
    };

    const ratingFilterString = [ 'todas', '5', '4', '3', '2', '1'];
    const ratingFilterStringDesk = [ 'todas', '1', '2', '3', '4', '5'];

  return (
    <section className='w-full lg:w-desktop p-4 lg:p-10 flex flex-col lg:flex-row lg:justify-between bg-white mt-1 rounded-md'>
        {/* -------- FILTER SECTION -------- */}
        <div className='w-full lg:w-80 lg:p-5'>
            <div className=''>
                <p className='font-semibold'>Reseñas del producto</p>
            </div>
            <div className='w-full flex items-center justify-between gap-1.5 py-1.5 '>
               <div className='w-full'>
                <div className='flex items-center gap-0.5 text-actions-success'>
                        <span className='flex gap-1 text-5xl font-semibold'>
                            <span>{rating.toFixed(1)}</span>
                        </span>
                        <div>
                            <span className='flex text-xl lg:gap-0.5'>
                                {renderRatingStarts(rating).map( star => star)}
                            </span>
                            <span className='flex items-center gap-1'>
                                <span>{ comments.length }</span>
                                <span className='lg:text-sm'>comentarios</span>
                            </span>
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
        {/* //* COMMENT SECTION */ }
        <div className='w-full max-w-[700px] pb-3 flex flex-col lg:items-end'>
            <div className='hidden lg:flex w-full h-12 items-center'>
                <div className='relative group'>
                    <button
                        onClick={()=>setviewState(prevState => ({...prevState, ordener: !viewState.ordener}))}
                        className='px-4 py-1.5 capitalize flex items-center gap-2 text-sm font-semibold bg-actions-success/20 rounded-e-2xl rounded-s-2xl text-actions-success'>
                        <span className='text-xs'>ordenar</span>
                        <span><MdKeyboardArrowDown/></span>
                    </button>
                    { 
                        viewState.ordener &&
                        <div className='group-hover:flex flex-col w-full min-h-20 z-40 shadow-full rounded-md overflow-hidden absolute top-[110%] bg-white'>
                            <button className='w-full h-10 text-xs text-left pl-2 bg-actions-success/20 hover:bg-actions-success/50'>Mas Útiles</button>
                            <button className='w-full h-10 text-xs text-left pl-2 bg-actions-success/20 hover:bg-actions-success/50'>Más Recientes</button>
                        </div> 
                      }
                </div>
                <div className='relative group ml-4'>
                    <button
                        onClick={()=>setviewState(prevState => ({...prevState, rating: !viewState.rating }))}
                        className='px-4 py-1.5 capitalize flex items-center gap-2 text-sm font-semibold bg-actions-success/20 rounded-e-2xl rounded-s-2xl text-actions-success'>
                        <span className='text-xs'>Calificación</span>
                        <span><MdKeyboardArrowDown/></span>
                    </button>
                    { 
                        viewState.rating &&
                        <div className='group-hover:flex flex-col w-full min-h-20 z-40 shadow-full rounded-md overflow-hidden absolute top-[110%] bg-white'>
                            {
                                ratingFilterStringDesk.map((_, i) => (
                                <button key={i + _} className='w-full h-10 flex items-center text-xs text-left pl-4 bg-actions-success/20 hover:bg-actions-success/50'>
                                    <span className='text-black capitalize'> {_} </span>
                                    { i > 0 && <span className='text-actions-success ml-1'> <RxStarFilled /> </span>}
                                </button>
                                ))
                            }
                        </div> 
                      }
                </div>
            </div>
            {
                comments.map(({user, text, image, rating}, i)=>(
                    <div key={`${user} comment ${i}`} className='mb-1 pt-3 relative w-full'>
                        <div className=' h-10 flex gap-2 items-center'>
                            <div className='flex w-10 h-full bg-primary rounded-full overflow-hidden'>
                                <img src={'https://i.imgur.com/773QfGA.jpg'} alt='' className='w-full h-full object-contain' />
                            </div>
                            <div className='flex flex-col justify-center'>
                                <span className='flex capitalize'>{user}</span>
                                <span className='flex text-actions-success'>
                                    { renderRatingStarts(rating).map(star => star) }
                                </span>
                            </div>
                        </div>
                        <span className='text-sm text-black/80'>
                            <p className='line-clamp-4 px-1 mt-2 lg:pr-4'>{text}</p>
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
                {/* //* ---- Modal ---- */}
                        { imageModal && <div className='w-full h-screen bg-black/40 fixed bottom-0 right-0 top-0 left-0 z-10'></div> }
                        {
                            imageModal &&
                                <div className='w-full h-[360px] p-5 fixed flex flex-col justify-between left-0 bottom-0 bg-white rounded-t-xl z-30 animate-growHeight'>
                                    <div className='flex flex-col relative'>
                {/* //*---- Close Modal ---- */}
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
