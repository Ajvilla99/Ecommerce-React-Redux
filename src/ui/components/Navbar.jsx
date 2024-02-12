import Logo from '../../assets/img/Logo.png'

import { MdLocationOn } from "react-icons/md";

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ItemSearch } from './ItemSearch';
import { useDisplaySize } from '../../hooks';
import { MenuDesktop, MenuMobile } from './';


export const Navbar = () => {

  const { width } = useDisplaySize()

  const stringPathNavbar = [
    { path: '/product', name: 'product', icon: '' },
    { path: '/promociones', name: 'Promociones', icon: '' },
    { path: '/cart', name: '', icon: ''},
    { path: '/perfil', name: 'Perfil', icon: '' }
  ];

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  }

  return (
    <header className='w-full'>
      {
        width <= 1024
          ? <MenuMobile  string={stringPathNavbar} onSubmit={onSubmit}/>
          : <MenuDesktop string={stringPathNavbar} onSubmit={onSubmit}/>
      }
    </header>
  )
}
