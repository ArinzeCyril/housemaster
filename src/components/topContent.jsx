import React from 'react'
import heroPix from '../img/bg/heropix.png'

export default function TopContent() {
  return (
    <div className='top-content'>
      <div className='top-content-text'>
        <h1>Feel at Home with Housemasters</h1>
        <p>A Good Environment helps with Productivity. At Housemaster, we deliver the Best.</p>
      </div>
      <img id='hero-pix' src={heroPix} alt="" />
    </div>
  )
}
