import './header.css';
import Nav from "../Nav/Nav";
function Header(props) {
  return (
    <div className="Header">
      
      <header className="Header-header">
            
        <Nav admin={props.admin} adminLogout={props.adminLogout} />  
      </header>
    </div>
  );
}

export default Header;