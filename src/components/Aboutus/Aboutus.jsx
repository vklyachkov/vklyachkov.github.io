import React from 'react'
import OpiLink from '../UI/OpiLink/OpiLink'
import style from './Aboutus.module.css'

export default function Aboutus() {
  return (
    <div className={style.About}>
      <OpiLink icon="arrow-dropright-circle" path="/catalog">В магазин</OpiLink>
      <h1>О нас</h1>
    </div>
  )
}
