import './Nav.css';
import {HiMenu} from 'react-icons/hi' ;
import {GrClose} from 'react-icons/gr';
import { Link } from 'react-router-dom';
function Nav() {

  function openMenu (){
    const menuButton = document.getElementById('menu-logo');
    menuButton.style.display='none';
    const options = document.getElementById('options-menu');
    options.style.display = 'flex';

    

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
                <span> <Link to='/' >MUSHIDIPALLI</Link></span>
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
                 <Link to='sf' >Contact</Link>
            </span>
            <span>
                 <Link to='sf' >About</Link>             
            </span>
           
            
            

          
          </div>      
        </header>
      </div>
    );
  }
  
  export default Nav;