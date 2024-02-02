import React from 'react'
import style from "./OpiButton.module.css"

export default function OpiButton({action, children, icon}) {
  return (
    <button className={style.OpiButton} onClick={action}>
        {children}
        <ion-icon name={icon}></ion-icon>
    </button>
  )
}
