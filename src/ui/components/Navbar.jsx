
import logo from '../../assets/img/logo1.png'
import { MdLocationOn } from "react-icons/md";

import { Link, Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useDisplaySize, useForm } from '../../hooks';
import { MenuDesktop, MenuMobile } from './';



export const Navbar = () => {

  const navigate = useNavigate();

  const { width } = useDisplaySize();
  const { searchText, formState, onInputChange, onResetForm } = useForm({ searchText: '' })



  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`search/?q=${ searchText.toLowerCase() }`)
  }

  return (
    <header className='w-full'>
      {
        width <= 1024
          ? <MenuMobile  onSubmit={onSearchSubmit} value={searchText} onChange={onInputChange}/>
          : <MenuDesktop onSubmit={onSearchSubmit} value={searchText} onChange={onInputChange} onResetForm={onResetForm} logo={logo} />
      }
    </header>
  )
}
