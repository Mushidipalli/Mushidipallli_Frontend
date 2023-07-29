import './People.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {VscVerifiedFilled} from 'react-icons/vsc';
import LoadingPage from '../LoadingPage/LoadingPage';



const People = (props) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const selectPerson = props.setPerson;
  
  

  

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  }




  const handlePersonClick = (employee) => {
    selectPerson(employee)
    
    
  };


  
 

  const handleLogout = () => {
    // TODO: Implement logout logic here
    props.userLogout();
    navigate('/people');
     
  };

  const filteredEmployees = props.users.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    props.isLoading ? (<LoadingPage  />) :
    <div className="employee-list">
      <div className="search-section">
       
        <input
          type="text"
          placeholder="Search peoples"
          value={searchTerm}
          onChange={handleSearchTermChange}
        />
        {props.isLogin ? (
          <div className='search-nav-options' >
          <span  >
           <Link to="/profile"><img style={{width:'50px',height:'50px',borderRadius:'50%',boxShadow: '0.1px 0px 0px 2px white',}} alt='profile' src={props.accountUser.image}/> </Link>
          </span>
          <span id='logout-in-home' style={{cursor:'pointer',color:"#2F81F7"}} onClick={handleLogout} >
            LogOut
          </span>

        </div>

        ):(
          <div className='search-nav-options' >
          <span>
            <Link style={{color:"#2F81F7"}} to='/sign_in'  >SignIn</Link>
          </span>
          <span>
            
            <Link to='/sign_up' style={{color:"#2F81F7"}} >Signup</Link>
          </span>

        </div> 
        )}
         
        
       
        
      </div>
      <div className='list-profile-container' >
      <div className="list-section" >
        <div className='people-heading-container' style={{borderRadius:'5px',boxShadow:'none'}} >
          <span>Name</span>
          <span>Desigantion</span>
        </div>
        {filteredEmployees.map((person,index) => (
          <Link key={index} to={`/${person.name}/profile`} >
          <div
            
           
            onClick={() => handlePersonClick(person)}
          >
           <span className='img-name-container' >
            <img alt='person_image' src={person.image} />
            <span className='person_name' style={{paddingLeft:'3px'}} >{person.name}</span>
            {person.verified ? (
              <span className='verificationTick' ><VscVerifiedFilled/></span>
            ): ''}
            
           </span> 
           
           <span className='designation' >{person.designation}</span>
          </div>
          </Link>
        ))}
      </div>
      
      </div>
      
    </div>
  );
};

export default People;
