// Router
import { Link, Navigate, useNavigate } from 'react-router-dom';

// React
import { useState } from 'react';

// Images
import logo from '../../assets/img/logo1.png'

// Custom Hooks
import { useDisplaySize, useForm } from '../../hooks';

// Components
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
          : <MenuDesktop onSubmit={onSearchSubmit} value={searchText} onChange={onInputChange} onResetForm={onResetForm} logo={logo}  />
      }
    </header>
  )
}
