import Logo from '../../assets/img/Logo.png'

import { MdLocationOn } from "react-icons/md";

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDisplaySize, useForm } from '../../hooks';
import { MenuDesktop, MenuMobile } from './';


export const Navbar = () => {

  const navigate = useNavigate();

  const { width } = useDisplaySize();
  const { searchText, formState, onInputChange } = useForm()

  const stringPathNavbar = [
    { path: '/product', name: 'product', icon: '' },
    { path: '/promociones', name: 'promociones', icon: '' },
    { path: '/cart', name: '', icon: ''},
    { path: '/account', name: 'perfil', icon: '' }
  ];

  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`search/?q=${ searchText.toLowerCase() }`)
  }

  return (
    <header className='w-full'>
      {
        width <= 1024
          ? <MenuMobile  string={stringPathNavbar} onSubmit={onSearchSubmit} value={searchText} onChange={onInputChange}/>
          : <MenuDesktop string={stringPathNavbar} onSubmit={onSearchSubmit} value={searchText} onChange={onInputChange}/>
      }
    </header>
  )
}
