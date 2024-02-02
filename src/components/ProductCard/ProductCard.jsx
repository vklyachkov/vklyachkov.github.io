import React from 'react'
import OpiButton from '../UI/OpiButton/OpiButton'
import style from './ProductCard.module.css'

export default function ProductCard({ image, name, price, type }) {
    return (
        <div className={style.ProductCard}>
            <img src={image} alt={"Photo of " + name} />
            <div className={style.DownSide}>
            <div>
                <h2>{name}</h2>
                <h3>{type}</h3>
            </div>
            <OpiButton icon="arrow-dropright-circle">Купить</OpiButton>
            </div>
        </div>
    )
}
