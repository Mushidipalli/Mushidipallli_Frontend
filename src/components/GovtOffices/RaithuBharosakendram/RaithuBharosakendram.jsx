import React from 'react';
import './RaithuBharosakendram.css';
import video from '../../ListPage/devotional.mp4';

function RaithuBharosakendram() {
  return (
    <div>
        <div className='list-videoDivContainer' >
        <video autoPlay loop muted src={video} preload='auto' style={{objectFit:'cover'}} className='bg-video' />
  
        <div className='list-name-container'  >

          {/* <h3 className='welcome' >Welcome</h3>   */}
          <div id='listPage-main-heading'  >
            <h1>RaithuBharosakendram</h1>  
          </div>

        </div>


      </div>
      <div className="content-container">
        <h1>content adding soon</h1>

      </div>
      
      
    </div>
  )
}

export default RaithuBharosakendram
