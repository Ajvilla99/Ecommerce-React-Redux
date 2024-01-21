import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TuComponente = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // Puedes ajustar según tus necesidades

  // Datos de ejemplo
  const tusDatos = [
    { id: 1, imagen: 'https://th.bing.com/th/id/OIP.At4om8XI76sSESbxvvMLswHaEo?rs=1&pid=ImgDetMain' },
    { id: 2, imagen: 'https://example.com/image2.jpg' },
    { id: 3, imagen: 'https://example.com/image3.jpg' },
    { id: 4, imagen: 'https://example.com/image4.jpg' },
    { id: 5, imagen: 'https://example.com/image5.jpg' },
    // ... más datos ...
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = tusDatos.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul className='w-11/12 h-full flex overflow-hidden scroll-smooth'>
        {currentItems.map((elemento, index) => (
          <li key={index} className='w-full min-w-full h-full bg-slate-600 flex-none'>
            <Link className='w-full h-full'>
              <img src={elemento.imagen} alt={`Imagen ${elemento.id}`} />
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center mt-4">
        {[...Array(Math.ceil(tusDatos.length / itemsPerPage))].map((_, index) => (
          <button key={index} onClick={() => paginate(index + 1)} className="mx-2 p-2 border bg-gray-300">
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TuComponente;
