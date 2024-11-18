import React from 'react'
import remove  from "./remove.png"
import './section.css'
export default function Section () {
  return (
    <div className='section'>
    <div className='image'>
        <img src={remove} alt='fille'></img>
    </div>
    <div className='search'>
      <h1>Welcom To EpicReads</h1>
      <p>We're so glad you'e here</p>
      <input value={'Find Your Book'}></input>
    </div>
    </div>
  )
}
