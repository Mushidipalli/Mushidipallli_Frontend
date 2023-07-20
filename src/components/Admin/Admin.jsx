
import React, { useState } from 'react';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const Admin = (props) => {

  const navigate = useNavigate();
  
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [signinShow,setSignShow] = useState(true);

  const handleContactChange = (e) => {
    setContact(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  

  const handleAdminSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle login logic here

    const dataa = {
      contact:contact,
      password:password
      

    }


    const fetchData = async (dataa) => {
      try {
        setSignShow(false);
        // Simulating an asynchronous API call
        const response = await fetch('https://mushidipalli-back-end.onrender.com/admin/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataa)
        });
    
        const data= await response.json();
        setSignShow(true);
    
        if(response.ok){
          toast.success('Login Success', {
            position: toast.POSITION.TOP_RIGHT
            
          });
          
          props.adminLogin();
          localStorage.setItem('AdminAuthToken', data.token);
          navigate('/people');
          
          
        }else{
          toast.warning(data.message, {
            position: toast.POSITION.TOP_RIGHT
            
          });
        }
          
    
    
      } catch (error) {
        console.error(error);
        
       
      }
    };
  
    fetchData(dataa)
    

  };

  return (
    props.isLogin ? <Navigate to ='/people'/>:
    <div className="login-page">
     <div className='login-container' >  
      <h2>Admin Login</h2>
      <form onSubmit={handleAdminSubmit}>
        <div className="form-group">
          <input
            type="number"
            id="number"
            value={contact}
            onChange={handleContactChange}
            required
            placeholder='Admin Id'
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
            placeholder='Password'
          />
        </div>
        {signinShow?
        <button type="submit">Login</button> :
        <p style={{backgroundColor:'lightgreen',borderRadius:'40px' }}  >Loading...</p>

        }
        
      </form>
      
      </div>
    </div>
  );
};

export default Admin;