import React from 'react';
import devotionalbg from './devotional.mp4';
import './ListPage.css';

function ListPage(props) {
  console.log(props.listItem);
  const listItem= props.listItem;
  return (
    <div id='listPage'>
        <div className='list-videoDivContainer' >


          <video autoPlay loop muted src={devotionalbg} preload='auto' style={{objectFit:'cover'}} className='bg-video' />
            
          <div className='list-name-container'  >
    
            {/* <h3 className='welcome' >Welcome</h3>   */}
            <div id='listPage-main-heading'  >
              <h1  >{listItem.title}</h1>  
            </div>

          </div>

   
        </div>
        <div className='listItem-discription' >
          <h2>Description</h2>
          <p>
            {listItem.description}
          </p>

        </div>
      
    </div>
  )
}

export default ListPage
