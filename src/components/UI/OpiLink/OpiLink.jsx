import React from 'react'
import { Link } from 'react-router-dom'
import style from './OpiLink.module.css'

export default function OpiLink({path, children, icon}) {
  return (
    <Link className={style.OpiLink} to={path}>
        {children}
        <ion-icon name="arrow-dropright-circle"></ion-icon>
    </Link>
  )
}
