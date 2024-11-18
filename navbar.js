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
          <li className='books'>books</li>
          <li className='about'>about</li>
          <li className='contact'>contact</li>
        </div>
        <div className='login'>
          <a href='https://www.figma.com/design/GXz5UI4CMHRJbFjJehNwAT/Untitled?node-id=246-253&node-type=frame&t=oVkMze8lwILyThlH-0'>sign in</a>&nbsp;&nbsp;
          <a href='https://www.figma.com/design/GXz5UI4CMHRJbFjJehNwAT/Untitled?node-id=246-253&node-type=frame&t=oVkMze8lwILyThlH-0'>sign up</a>
        </div>
    </ul>
    </nav>
  )
}
