import './LoadingPage.css'


function LoadingPage() {
    return (
    //   <div id="LoadingPage">
    //     <div className='logo-container'>

    //     </div>
        
        
    //   </div>
    <div id='loading-container' >
        <img alt='logo'  style={{position:'relative',top:'50px',width:'40px',height:'40px'}} src='/mushidipalli.logo.png' />
        <div className="loading-circle">
            
        </div>
        <span>Loading</span>

    </div>
    
    );
  }
  
  export default LoadingPage;