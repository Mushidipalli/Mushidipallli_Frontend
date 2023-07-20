import './SignUp.css';
import React, { useState } from 'react';
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router';
import {RiWhatsappLine} from 'react-icons/ri';
import { Link,Navigate } from 'react-router-dom';

const SignUp = (props) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [allCorrect,setAllCorrect]=useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [designation, setDesignation] = useState('');
  const [permanentAddress, setPermanentAddress] = useState('');
  const [presentAddress, setPresentAddress] = useState('');
  const [password,setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signupShow,setSignupShow] = useState(true);
  const navigate = useNavigate();
 

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    const spantag = document.getElementById('checkNumber');
    
    if(e.target.value.length===10){
      spantag.innerHTML=""
      setAllCorrect(true)
       
    }else{
      spantag.innerHTML="Phone number must be 10 digits";
      setAllCorrect(false);
     

    }
   
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  const handlePermanentAddressChange = (e) => {
    setPermanentAddress(e.target.value);
  };

  const handlePresentAddressChange = (e) => {
    setPresentAddress(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);

  }
  const handleConfirmPasswordChange = (e) => {
    const spantag = document.getElementById('checkpassword');
    
    if(password!==e.target.value){
     
     setAllCorrect(false)
      spantag.innerHTML='Password Miss Match';
    }else{
      spantag.innerHTML='';
      setAllCorrect(true);
      
    }
      setConfirmPassword(e.target.value);

  }



  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Handle signup logic here

    const dataa = {
      email:email,
      name:name,
      contact:phoneNumber,
      gender:gender,
      designation:designation,
      permanentAddress:permanentAddress,
      currentAddress:presentAddress,
      password:password
      

    }

    const fetchData = async (dataa) => {
      try {
        setSignupShow(false);
        // Simulating an asynchronous API call
        const response = await fetch('https://mushidipalli-back-end.onrender.com/users/sign_up', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(dataa)
        });
          const data =await response.json();
          setSignupShow(true);
          console.log(data);
          if(data.message==="Signup successful"){
            toast.success('Sign_up Success', {
              position: toast.POSITION.TOP_RIGHT
              
            });
            navigate('/sign_in');

          }else{
            toast.warning(data.message, {
              position: toast.POSITION.TOP_RIGHT
              
            });

          }

        
       
        
       
      } catch (error) {
        console.error(error);
        
       
      }
    };

    fetchData(dataa);



  };

  return (
    props.isLogin ? <Navigate to='/people' />:
    <div className="signup-page">
        <div className='signup-container' >
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
         
          <input
            type="number"
            id="phoneNumber"
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
            placeholder='Phone Number'
            required
          />
          <span id='checkNumber' style={{color:'red'}} ></span>
        </div>
        <div className="form-group">
          
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder='Name'
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder='Email'
            required
          />
        </div>
        <div className="form-group">
         
          <select id="gender" value={gender} onChange={handleGenderChange} required>
            <option value="" hidden >Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
         
          <input
            type="text"
            id="designation"
            value={designation}
            onChange={handleDesignationChange}
            placeholder='Designation'
            required
          />
        </div>
        <div className="form-group">
         
          <input
            type="text"
            id="permanentAddress"
            value={permanentAddress}
            onChange={handlePermanentAddressChange}
            placeholder='Permanent Address'
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            id="presentAddress"
            value={presentAddress}
            placeholder='Present Address'
            onChange={handlePresentAddressChange}
            required
          />
        </div>
        <div className="form-group">
          
          <input
            type="text"
            id="password"
            value={password}
            placeholder='Password'
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div  className="form-group">
          
          <input
            type="text"
            id="confirmPassword"
            value={confirmPassword}
            placeholder='Confirm Password'
            onChange={handleConfirmPasswordChange}
            required
          />
          <span id='checkpassword' style={{color:'red'}} ></span>
        </div>
        <div className="form-group">
         
          <p>If you want to add profile pic to you account. Please send your name and photo to 
          <a href="https://wa.me/9133726921" rel="noreferrer" target='_blank'>< RiWhatsappLine className='contact_option_icon' /></a>
          </p>
        </div>
        {allCorrect? 
          signupShow?
          <button id='signupSubmitButton' type="submit">Signup</button>:
          <p style={{backgroundColor:'lightgreen',borderRadius:'40px' }}  >Loading...</p>


          :''}
        
        

      </form>
      <span>Already have an account ? <Link style={{color:'blue'}} to='/sign_in' >sign_in</Link></span>
      </div>
    </div>
  );
};

export default SignUp;