import './header.css';
import Nav from "../Nav/Nav";
function Header(props) {
  let prevScrollPos = window.scrollY;

  window.onscroll = function () {
    const currentScrollPos = window.scrollY;
    

    if (prevScrollPos < currentScrollPos || prevScrollPos > currentScrollPos ) {
      document.getElementById("Header").classList.add("blurred-nav");
    } 
    if(currentScrollPos===0){
      document.getElementById("Header").classList.remove("blurred-nav");

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