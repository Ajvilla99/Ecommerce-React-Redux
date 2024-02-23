import React from 'react'

export const GalleryImage = ({ data }) => {

    data = [
        { id: 'img1', image: 'https://http2.mlstatic.com/D_Q_NP_2X_724288-MLU73557327279_122023-AB.webp' },
        { id: 'img2', image: 'https://http2.mlstatic.com/D_Q_NP_2X_868154-MCO73494261492_122023-AB.webp' },
        { id: 'img3', image: 'https://http2.mlstatic.com/D_Q_NP_2X_766582-MLA73075460021_112023-AB.webp' },
        { id: 'img4', image: 'https://http2.mlstatic.com/D_Q_NP_2X_992802-MLU72746216408_112023-AB.webp' },
    ]

  return (
    <div className='min-w-[500px] h-[500px]'>
        <div className='w-full h-full flex'>
            <div className='w-12 h-full'>
                {
                    data.map(({ id, image }) => (
                        <button>
                            <div className=''>
                                <img src={image} alt="" />
                            </div>
                        </button>
                    ))
                }
            </div>
            <div className='w-[calc(100%-50px)]'>
                <img src={data[0].image} alt={`Imagen ${data[0].id}`} 
                    className='p-4 w-full'/>
            </div>
        </div>
    </div>
  )
}
