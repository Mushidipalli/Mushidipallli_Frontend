import './People.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {VscVerifiedFilled} from 'react-icons/vsc';
import LoadingPage from '../LoadingPage/LoadingPage';



const People = (props) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [listDecistion, setListDcsition] = useState(false);
  const admin = props.admin;



  


  
  
  

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  }



  const userVerification= async(data)=>{

    const dataa ={
      id:data
    }

    const authToken = localStorage.getItem('AdminAuthToken');
  

  try {
    // Simulating an asynchronous API call
    const response = await fetch('https://mushidipalli-back-end.onrender.com/admin/users/verify', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': authToken
      },
      body: JSON.stringify(dataa)
     
    });
       await response.json();
       
      if(response.ok){
        toast.success('User Verified Successful', {
          position: toast.POSITION.TOP_RIGHT
          
        });
        
       
      }else{
        toast.warning('Update faild', {
          position: toast.POSITION.TOP_RIGHT
          
        });

      }

  } catch (error) {
   

  }

  }



  const handleListDecistion = () => {
    setListDcsition(false);
    setSelectedEmployee("");
  }


  const handleEmployeeClick = (employee) => {
    setSelectedEmployee(employee);
    setListDcsition(true);
    
  };


  const userDeletion = async (data)=>{


    const dataa ={
      id:data
    }

    const authToken = localStorage.getItem('AdminAuthToken');
  

  try {
    // Simulating an asynchronous API call
    const response = await fetch('https://mushidipalli-back-end.onrender.com/admin/users/delete', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': authToken
      },
      body: JSON.stringify(dataa)
     
    });
       await response.json();
       
      if(response.ok){
        toast.success('User Deleted Successful', {
          position: toast.POSITION.TOP_RIGHT
          
        });
        
       
      }else{
        toast.warning('faild to Delete', {
          position: toast.POSITION.TOP_RIGHT
          
        });

      }

  } catch (error) {
   

  }


    
  }
 

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
      <div className={`list-section ${listDecistion === true ? 'closelist' : ''}`} >
        <div className='people-heading-container' style={{borderRadius:'5px',boxShadow:'none'}} >
          <span>Name</span>
          <span>Desigantion</span>
        </div>
        {filteredEmployees.map((employee,index) => (
          <div
            key={index}
           
            onClick={() => handleEmployeeClick(employee)}
          >
           <span className='img-name-container' >
            <img alt='person_image' src={employee.image} />
            <span className='person_name' style={{paddingLeft:'3px'}} >{employee.name}</span>
            {employee.verified ? (
              <span className='verificationTick' ><VscVerifiedFilled/></span>
            ): ''}
            
           </span> 
           
           <span className='designation' >{employee.designation}</span>
          </div>
        ))}
      </div>
      <div className="profile-section">
        {selectedEmployee ? (
          <div className='user-details'>
            <p onClick={handleListDecistion} className='profile-back-button' >Back</p>
            <h3 style={{fontSize:'1.5rem',margin:'0'}}>Profile</h3>
            <img alt='person_image' className='profileImage' src={selectedEmployee.image} />
            <p> <span style={{fontWeight:'600'}} >Name:</span>  {selectedEmployee.name}</p>
            <p> <span style={{fontWeight:'600'}} >Phone:</span>  +91 {selectedEmployee.contact}</p>
            <p> <span style={{fontWeight:'600'}} >Designation:</span> {selectedEmployee.designation}</p>
            <p> <span style={{fontWeight:'600'}} >Gender:</span> {selectedEmployee.gender}</p>
            <p> <span style={{fontWeight:'600'}} >Permanent Address:</span> {selectedEmployee.permanentAddress}</p>
            <p> <span style={{fontWeight:'600'}} >Current Address:</span> {selectedEmployee.currentAddress}</p>
            {  

              selectedEmployee.verified ? (<p style={{color:'rgb(47 247 75)',textAlign:'center'}}  >Verified</p>) : (<p style={{color:'rgb(247 47 47)',textAlign:'center'}} >Not Verified</p>)

            }
            {admin ?
               <div className='people-v-d-buttons' >
                {
                  selectedEmployee.verified ?"": <button style={{backgroundColor:'transparent'}} onClick={()=>userVerification(selectedEmployee._id)} >Verify</button>

                }

                 <button style={{backgroundColor:'transparent'}} onClick={()=>userDeletion(selectedEmployee._id)} >Delete</button>
                
      
            </div>:''}
            
            
            {/* Add more employee details here */}
          </div>
        ) : ''}
          
      </div>
      </div>
      
    </div>
  );
};

export default People;
