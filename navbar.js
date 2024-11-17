import React from 'react'
import "./navbar.css"
export default function Navbar() {
  return (
    <nav>
       <ul className='navbar'>
      <div className='loogo'>
      <li>EpicReads</li>
      </div>
      <div className='nav'>
      <li className='home'>home</li>
      <li className='top'>top</li>
      <li className='nouveau'>nouveaute</li>
      </div>
    </ul>
    </nav>
  )
}
