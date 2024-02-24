import React, { useState } from 'react'

export const GalleryImage = ({ data }) => {

    const [selectedImage, setSelectedImage] = useState({
        selected: null,
        imageSelected: null,
    });

    data = [
        { id: 'img1', image: 'https://http2.mlstatic.com/D_Q_NP_2X_724288-MLU73557327279_122023-AB.webp' },
        { id: 'img2', image: 'https://http2.mlstatic.com/D_Q_NP_2X_868154-MCO73494261492_122023-AB.webp' },
        { id: 'img3', image: 'https://http2.mlstatic.com/D_Q_NP_2X_766582-MLA73075460021_112023-AB.webp' },
        { id: 'img4', image: 'https://http2.mlstatic.com/D_Q_NP_2X_992802-MLU72746216408_112023-AB.webp' },
    ]

    const handleHover = (index, image ) => {
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
                    data.map(({ id, image }, index ) => (
                        <button 
                            onMouseEnter={() => handleHover(index, image)}
                            key={id} className={`w-full h-12 rounded-md border mb-3
                                ${ selectedImage.selected === index ? 'border-2 border-actions-success' : 'border-black/30' }`}>
                            <div className='w-full h-full flex items-center justify-center'>
                                <img src={image} alt='' className='max-w-[80%] object-contain' />
                            </div>
                        </button>
                    ))
                }
            </div>
            <div className='w-[380px] flex items-center justify-center'>
                <img src={ selectedImage.imageSelected || data[0].image } alt={`Imagen ${data[0].id}`} 
                    className='p-4 w-full h-full object-cover'/>
            </div>
        </div>
    </div>
  )
}
