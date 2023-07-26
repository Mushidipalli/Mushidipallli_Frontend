
import Place from '../Places/Place';
import bg from './homeVideo.mp4'
import './Home.css'
function Home(props) {
 
    return (
      
      <div className="Home">
        
        <header className="Home-header">
        
          <div className='videoDivContainer' >


            <video autoPlay loop muted src={bg} preload='auto' style={{objectFit:'cover'}} className='bg-video' />
            <div className='name-container'  >
              
              <h3 className='welcome' >Welcome</h3>  
              <div id='main-heading'  >
                <h1 data-text= "MUSHIDIPALLI" >MUSHIDIPALLI</h1>  
              </div>

            </div>
         
               
          </div>


          <div className='paradise-section' >
            <h2>Welcome to Paradise !</h2>
            <p>
              Welcome to our village, a place of peace and simplicity. Here, you'll find hidden treasures waiting to be discovered. Our village boasts excellent schools, serene temples, and beautiful ponds. The landscapes are breathtaking, and they will leave a lasting impression on your heart and soul. Immerse yourself in our vibrant culture, which honors the traditions of our ancestors. Join us on this journey of exploration as we share captivating stories, introduce you to friendly locals, and showcase the undeniable beauty of our village. These experiences will create cherished memories that you'll treasure forever.
            </p>

          </div>
          
          <h2>#Explore</h2>
          <Place/>
          <div >
            <h2>Google Map</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1057.6048496914734!2d83.02829487654827!3d17.954692842665462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bd64f028d2f9f%3A0xd53f6bb5e942410!2sSri%20Rama%20Temple!5e1!3m2!1sen!2sin!4v1689005863777!5m2!1sen!2sin" title='map' style={{border:'0',borderRadius:'40px',width:'90%',height:'450px'}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d837.631693796417!2d83.02829487654827!3d17.954692842665462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3bd64f028d2f9f%3A0xd53f6bb5e942410!2sSri%20Rama%20Temple!5e0!3m2!1sen!2sin!4v1689005534486!5m2!1sen!2sin" title='map'   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          </div>
          
          
         
        </header>
      </div>
    );
  }
  
  export default Home;