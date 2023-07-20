import './SignIn.css'
import React, { useState } from 'react';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Link,Navigate } from 'react-router-dom';

const SingIn = (props) => {

  const navigate = useNavigate();
  
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [signinShow,setSignShow] = useState(true);

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle login logic here

    const dataa = {
      contact:phoneNumber,
      password:password
      

    }


    const fetchData = async (dataa) => {
      try {
        setSignShow(false);
        // Simulating an asynchronous API call
        const response = await fetch('https://mushidipalli-back-end.onrender.com/users/sign_in', {
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
         
          localStorage.setItem('authToken', data.token);
          props.userLogin(data.user._doc);
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
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            required
            placeholder='Phone Number'
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
      <span>don't have an account ? <Link style={{color:'blue'}} to='/sign_up' >sign_up</Link></span>
      </div>
    </div>
  );
};

export default SingIn;