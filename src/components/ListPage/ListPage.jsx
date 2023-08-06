import React from 'react';
import devotionalbg from './devotional.mp4';
import durgamma from './Durgamma.mp4';
import chinthalamma from './Chinthalamma.mp4';
import maridamma from './Maridamma.mp4';
import './ListPage.css';

function ListPage(props) {
  
  const listItem= props.listItem;
  let video ='';
  if(!listItem.title){
    video=devotionalbg

  }
  else if(listItem.title.split(' ')[0]==="Durgamma"){
    video=durgamma;
  }
  else if(listItem.title.split(' ')[0]==="Chinthalamma"){
    video=chinthalamma
  }
  else if(listItem.title.split(' ')[0]==="Maridamma"){
    video=maridamma

  }
  else{
    video=devotionalbg;
  }
  return (
    <div id='listPage'>
        <div className='list-videoDivContainer' >


          <video autoPlay loop muted src={video} preload='auto' style={{objectFit:'cover'}} className='bg-video' />
            
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
        <div className='content-container'>
         
         <h1>content adding soon</h1>

        </div>
        
      
    </div>
  )
}

export default ListPage
