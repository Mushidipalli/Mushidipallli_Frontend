import React from 'react';
import './Zph.css';

function Zph() {
  return (
    <div>
        <div className='list-videoDivContainer' >
        <video autoPlay loop muted src='' preload='auto' style={{objectFit:'cover'}} className='bg-video' />
  
        <div className='list-name-container'  >

          {/* <h3 className='welcome' >Welcome</h3>   */}
          <div id='listPage-main-heading'  >
            <h1>Z.P.H School</h1>  
          </div>

        </div>


      </div>
      
    </div>
  )
}

export default Zph
