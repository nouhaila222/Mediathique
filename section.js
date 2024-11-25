import React from 'react'
import design  from "./images/design.jpg"
import book1  from "./images/book1.png"
import book2  from "./images/book2.png"
import book3  from "./images/book3.png"
import book4  from "./images/book4.png"
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
      <div className='popularbook'>
        <div>
        <img src={book1} alt='book'></img>
        <p>Letting Go<br/>
        by Philip Roth</p>
        </div>

        <div>
        <img src={book2} alt='book'></img>
        <p>Fear of Flying<br/>
        by Erica Jong</p>
        </div>
        
        <div>
        <img src={book3} alt='book'></img>
      <p>Encyclopedia Brown
      <br/>by Donald J. Sobol</p>
      </div>
        
        <div>
          <img src={book4} alt='book'></img>
          <p>When Breath Becomes Air<br/>
          by Paul Kalanithi</p>
        </div>
    </div>
    </div>
    </div>
  )
}
