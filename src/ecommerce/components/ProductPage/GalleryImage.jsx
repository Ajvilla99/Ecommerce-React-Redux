import React, { useState } from 'react'

export const GalleryImage = ({ images, name, id  }) => {

    const [selectedImage, setSelectedImage] = useState({
        selected: null,
        imageSelected: null,
    });

    const handleHover = ( index, image ) => {
        console.log({image});
        setSelectedImage({
            selected: index,
            imageSelected: image
        })
    }

  return (
    <div className='min-w-[428px] h-[500px]'>
        <div className='w-full h-full flex'>
            <div className='w-12 h-full pt-4'>
                {
                    images.map(( image, index ) => (
                        <button 
                            onMouseEnter={() => handleHover(index, image)}
                            key={`Imagen de ${id}`} className={`w-full h-12 rounded-md border mb-3 overflow-hidden
                                ${ selectedImage.selected === index ? 'border-2 border-actions-success' : 'border-black/30' }`}>
                            <div className='w-full h-full flex items-center justify-center'>
                                <img src={image} alt='' className='max-w-[80%] w-10/12 object-contain' />
                            </div>
                        </button>
                    ))
                }
            </div>
            <div className='w-[400px] flex items-center justify-center'>
                <img src={ selectedImage.imageSelected || images[0] } alt={`foto del producto`} 
                    className='p-4 w-full h-full object-contain'/>
            </div>
        </div>
    </div>
  )
}
