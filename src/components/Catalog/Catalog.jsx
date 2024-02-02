import React from 'react'
import style from './Catalog.module.css'
import ProductCard from '../ProductCard/ProductCard'

export default function Catalog() {
  return (
    <div className={style.Catalog}>
      <div className={style.Bar}>
        <h1>Католог</h1>
        <ion-icon name="compass"></ion-icon>
      </div>
      <div className={style.Container}>
        <ProductCard image="https://www.matras-market.ru/img/product/veda7-caiman-croco.jpg" name="Beta 001" type="Кровать" />
        <ProductCard image="https://static.tildacdn.com/tild3262-3532-4262-b563-616235323332/wr_26.jpg" name="Beta 001" type="Шкаф Купе" />
        <ProductCard image="https://www.matras-market.ru/img/product/veda7-caiman-croco.jpg" name="Beta 001" type="Кровать" />
        <ProductCard image="https://www.matras-market.ru/img/product/veda7-caiman-croco.jpg" name="Beta 001" type="Кровать" />
        <ProductCard image="https://www.matras-market.ru/img/product/veda7-caiman-croco.jpg" name="Beta 001" type="Кровать" />
        <ProductCard image="https://www.matras-market.ru/img/product/veda7-caiman-croco.jpg" name="Beta 001" type="Кровать" />
      </div>
    </div>
  )
}
