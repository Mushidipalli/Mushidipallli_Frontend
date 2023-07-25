import './Footer.css'


function Footer() {
    return (
      <div id="Footer">
        
        <div className="footer-container">
          <div className='social' >
            <p>
              <a href='/' >Home</a>
            </p>
            <p>
              <a href='https://goo.gl/maps/yfMthQGA8aAjWVQk7' >Maps</a>

            </p>
            

          </div>
          <div className='address' >
            <p>
              Mushidipalli, Devaraplli Mandal, Anakapalli District, Andhrapradhesh, India
            </p>

          </div>

          <div>
            <p>Pinconde:531022</p>
          </div>
                
        </div>
        <div>
          <p style={{padding:'0'}} >
            Developed by <a style={{color:'#2F81F7'}} href='https://pydamnaidudogga.netlify.app' >Pydamnaidu Dogga</a>
          </p>
         

        </div>
        <div>
          <p style={{padding:'0'}} >
            @2023 Mushidipalli

          </p>
          </div>
      </div>
    );
  }
  
  export default Footer;