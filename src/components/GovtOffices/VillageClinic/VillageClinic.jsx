import React from 'react';
import './VillageClinic.css';
import video from '../../ListPage/devotional.mp4';
function VillageClinic() {
  return (
    <div>
        <div className='list-videoDivContainer' >
        <video autoPlay loop muted src={video} preload='auto' style={{objectFit:'cover'}} className='bg-video' />
  
        <div className='list-name-container'  >

          {/* <h3 className='welcome' >Welcome</h3>   */}
          <div id='listPage-main-heading'  >
            <h1>Village Clinic</h1>  
          </div>

        </div>


      </div>
      <h1>content adding soon</h1>
      
    </div>
  )
}

export default VillageClinic
