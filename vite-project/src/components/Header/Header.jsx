import React from 'react'
import S from './Header.module.css'

const Header = () => {
  return (
    <header className={S.header}>
        <h1 className={S.h1}>Apod</h1>
    </header>
  )
}

export default Header