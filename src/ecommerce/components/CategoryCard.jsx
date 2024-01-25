import { Link } from 'react-router-dom'


export const CategoryCard = ({ name, image }) => {
  return (
    <li className='group w-full h-36 rounded-md overflow-hidden shadow-md bg-black/5 border-gray-500/15 border
        lg:flex lg:min-w-64 lg:h-24'>
        <div className='w-full h-2/3 flex items-center justify-center p-3
                        lg:w-2/5 lg:h-full'>
            <img 
                src='https://i.imgur.com/8KkhBqA.png' alt={name} 
                className='object-contain max-h-[75%]' />
        </div>
        <div className='w-full h-1/3 bg-white flex justify-center items-center
                        lg:w-3/5 lg:h-full'>
            <Link className='text-center text-xs p-2 lg:text-base group-hover:text-actions-success'>
                {name}
            </Link>
        </div>
    </li>
  )
}
