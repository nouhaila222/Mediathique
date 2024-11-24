import React from 'react'
import design  from "./design.jpg"
import './section.css'
export default function Section () {
  return (
    <div className='section'>
    <div className='image'>
        <img src={design} alt='fille'></img>
    </div>

    <div className='welcom'>
      <h1>Welcom To EpicReads</h1>
      <p>We're so glad you'e here</p>
      <input value={'Find Your Book'}></input>
    </div>

    <div className='description'>
      <h1>
        Find your next great<br/>
        read at our online<br/>
        books store
      </h1>

      <h2>Best Authors Book</h2>

    </div>
    </div>
  )
}
