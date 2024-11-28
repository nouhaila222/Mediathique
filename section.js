import React from 'react'
import girl  from "./images/girl.png"
import book1  from "./images/book1.png"
import book2  from "./images/book2.png"
import book3  from "./images/book3.png"
import book4  from "./images/book4.png"
import book5 from './images/book5.png'
import photo1 from './images/photo1.jpg'
import './section.css'
export default function Section () {
  return (
    <div className='section'>
    <div className='image'>
        <img src={girl} alt='fille'></img>
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

      <h2 >Best Authors Book</h2>

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

          <div>
          <img src={book5} alt='book'></img>
          <p>In the Heart of the Sea<br/>
          by Nathaniel Philbrick</p>
        </div>
        </div>
        <button>See All</button>

        <h2>Best Selling Book</h2>

        <div className='sellingbook'>
          <div>
          <img src={book4} alt='book'></img>
            <p>When Breath Becomes Air<br/>
            by Paul Kalanithi</p>
          </div>

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
          <img src={book5} alt='book'></img>
          <p>In the Heart of the Sea<br/>
          by Nathaniel Philbrick</p>
        </div>
        </div>
        <button>See All</button>
        
    </div>
    
    <div className='desc'>
      <img src={photo1} alt='bibliotheque'></img>
      <h2>Discover a world of stories and imagination</h2>
      <p>Best books, at the best prices - Enjoy discounts and special offers on thousands of titles.</p>
    </div>
  </div>


  )
}

