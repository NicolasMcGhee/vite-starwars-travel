import React from 'react'
import './index.css'

export default function Square(props) {
  return (
    <div className='grid-item'>
        <div>
            <h1>Anakin</h1>
            <h2>Jedi Knight</h2>
            <h4>Home Planet: Tatoonie</h4>
        </div>
        <div className='image-wrapper'>
            <img className='image' src={props.image} alt={props.alt} />
        </div>
    </div>
  )
}
