import './header.css';
import Nav from "../Nav/Nav";
function Header(props) {
  let prevScrollPos = window.scrollY;

  window.onscroll = function () {
    const currentScrollPos = window.scrollY;
    const element= document.getElementById("Header");
    

    if (prevScrollPos < currentScrollPos) {
      element.style.display='none'
      
    } else if(prevScrollPos > currentScrollPos ){
      element.style.display='block';
      element.style.boxShadow='1px 1px 5px 1px black';
      element.classList.add("blurred-nav");
      element.style.backgroundColor='#00000085';
      

    }
    if(currentScrollPos===0){
     element.classList.remove('blurred-nav');
     element.style.backgroundColor=''
     element.style.boxShadow='';
     

    }

    prevScrollPos = currentScrollPos;
  };
  return (
    <div id="Header">
      
      <header className="Header-header">
            
        <Nav admin={props.admin} adminLogout={props.adminLogout} />  
      </header>
    </div>
  );
}

export default Header;