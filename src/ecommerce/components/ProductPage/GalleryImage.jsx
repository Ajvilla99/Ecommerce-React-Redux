import React, { useState } from 'react'

export const GalleryImage = ({ images, name, id  }) => {

    const [selectedImage, setSelectedImage] = useState({
        selected: null,
        imageSelected: null,
    });

    const handleHover = ( index, image ) => {
        setSelectedImage({
            selected: index,
            imageSelected: image
        })
    }

  return (
    <div className='w-full'>
        <div className='w-full h-full flex'>
            <div className='w-14 h-full pt-4 flex flex-col gap-2'>
                {
                    images.map(( image, index ) => (
                        <button
                            onMouseEnter={()=>handleHover( index, image )}
                            className={`min-w-14 max-w-14 min-h-14 max-h-14 flex items-center justify-center rounded-md border-2 overflow-hidden
                                        ${ selectedImage.selected === index ? 'border-2 border-actions-success' : '' }`}>
                            <figure className=''>
                                <img src={image} alt={`imagen de  ${name}`}
                                    className='max-h-14 max-w-14 object-contain p-2'
                                />
                            </figure>
                        </button>
                    ))
                }
            </div>
            <div className='w-full max-h-[500px] flex items-center justify-center'>
                <img src={ selectedImage.imageSelected || images[0] } alt={`foto del producto`} 
                    className='p-10 w-full h-full object-contain'/>
            </div>
        </div>
    </div>
  )
}
