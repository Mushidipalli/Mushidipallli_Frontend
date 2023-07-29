import './Nav.css';
import {HiMenu} from 'react-icons/hi' ;
import {GrClose} from 'react-icons/gr';
import { Link } from 'react-router-dom';
import logoM  from './mushidipalli.logo.png';
function Nav(props) {

  function openMenu (){
    const menuButton = document.getElementById('menu-logo');
    menuButton.style.display='none';
    const options = document.getElementById('options-menu');
    options.style.display = 'flex';
  }

  const adminLogout = ()=>{
    localStorage.removeItem("AdminAuthToken");
   
    props.adminLogout();
  }

  function closeMenu (){
    const menuButton = document.getElementById('menu-logo');
    menuButton.style.display='inline-block';
    const options = document.getElementById('options-menu');
    options.style.display = 'none';


  }


  




    return (
      <div className="Nav">
        
        <header className="Nav-header">
            <div id='villageName' >
              <span> <Link to='/' ><img src={logoM} alt='M' /></Link></span>
              
            </div>
            <div id='menu-logo' onClick={()=>openMenu()} >
              <HiMenu />

            </div>
          <div id='options-menu'>
            <span className='menu-close-logo' onClick={()=>closeMenu()} >
              <GrClose/>
            </span>
            <span>
              <Link to='/' >Home</Link>
            </span>
            <span>
              <Link to='/people' >People</Link>
            </span>
            <span>
              <Link to='/contact' >Contact</Link>
            </span>
            <span>
              {props.admin?<div onClick={()=>adminLogout()} >Logout</div>:<Link to='/admin/login' >Admin</Link>}
            </span>
            <span>
              <Link to='/about' >About</Link>             
            </span>
           
            
            

          
          </div>      
        </header>
      </div>
    );
  }
  
  export default Nav;