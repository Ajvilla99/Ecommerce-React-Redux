import Logo from '../../assets/img/Logo.png'

import { BsCart3, BsListUl } from "react-icons/bs";
import { BiSolidDiscount } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import { IoSearchSharp, IoHomeOutline, IoLocationOutline } from "react-icons/io5";
import { MdKeyboardArrowRight, MdOutlineWatchLater } from "react-icons/md";
import { HiOutlineArrowLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import { FiUser, FiHeart } from "react-icons/fi";
import { RiNotification2Line } from "react-icons/ri";
import { LiaHeadsetSolid } from "react-icons/lia";
import { IoIosArrowDown } from "react-icons/io";

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ItemSearch } from './ItemSearch';
import { useDisplaySize } from '../../hooks';
import { MenuDesktop, MenuMobile } from './';


export const Navbar = () => {

  const { width } = useDisplaySize()
  console.log(width);

  const stringPath = [
    { path: '/product', name: 'product', icon: '' },
    { path: '/marcas', name: 'Marcas', icon: '' },
    { path: '/promociones', name: 'Promociones', icon: '' },
    { path: '/tienda', name: 'Tienda', icon: '' },
    { path: '/cart', name: '', icon: ''},
    { path: '/perfil', name: 'Perfil', icon: '' }
  ];

  // const [ isFocused, setIsFocused ] = useState(false);
  // const [ menuOpen, setMenuOpen ] = useState(false);
  // const [ viewMessage, setViewMessage ] = useState(false);

  // const navigate = useNavigate()

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   // navigate(`?q=${ searchText.toLowerCase() }`);
  //   navigate('search')
  // }

  return (
    <header className='w-full'>
      {
        width <= 1124 
          ? <MenuMobile string={stringPath} />
          : <MenuDesktop string={stringPath} />
      }
    </header>
  )
}
