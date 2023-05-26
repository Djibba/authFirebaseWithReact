import React from 'react'
import cat from './giphy.webp'

export default function PrivateHome() {
  return (
    <div className='conatainer p-5'>
        <h1 className="display-3 text-light mb-4">
            Home Sweet Home Private
        </h1>
        <img src={cat} alt="cat" />
    </div>
  )
}
