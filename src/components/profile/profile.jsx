import { useState } from 'react';
import './profile.css'
import { useNavigate } from 'react-router';
import { Navigate } from 'react-router-dom';

function Profile(props) {
  const profileUser = props.accountUser;
  const showButton = props.showButton;
  const navigate = useNavigate();
  const [designation, setDesignation] = useState(profileUser.designation);
  const [presentAddress, setPresentAddress] = useState(profileUser.currentAddress);
  

  const handleDesignationChange = (e) => {
    setDesignation(e.target.value);
  };

  const handlePresentAddressChange = (e) => {
    setPresentAddress(e.target.value);
  };

  const updateFuntion = ()=>{
    const dataa = {   
      designation:designation,
      currentAddress:presentAddress,
    }
  
    props.updateProfile(dataa);

  }

  const logoutfunction = ()=>{
    props.userLogout()
    navigate('/people')

  }
  
  
    return (
      props.isLogin ? 
      <div id="account-profile">
        <div className='account-container'>
        <img src={profileUser.image} alt='user_photo' className='account-profile-image' />
        <div className='account-profile-details' >
            <p className='label' >Name</p>
            <p className='profile-data' >{profileUser.name}</p>
            <p className='label' >Phone Number</p>
            <p className='profile-data' >{profileUser.contact}</p>
            <p className='label' >Gender</p>
            <p className='profile-data' >{profileUser.gender}</p>
            <p className='label' >Designation</p>
            <input
            type="text"
            id="designation"
            value={designation}
            onChange={handleDesignationChange}
            placeholder='Designation'
            required
           />
            {/* <p className='profile-data' >{profileUser.designation}</p> */}
            <p className='label' >Parminent Address</p>
            <p className='profile-data' >{profileUser.permanentAddress}</p>
            
            <p className='label' >Current Address</p>
            <input
            type="text"
            id="presentAddress"
            value={presentAddress}
            placeholder='Present Address'
            onChange={handlePresentAddressChange}
            required
          />
            {/* <p className='profile-data' >{profileUser.currentAddress}</p> */}
            <div className='profile-buttons' >
             {showButton?
             <button onClick={updateFuntion} >Update Profile</button> :
             <button  >Loading...</button>
             } 
              <p id='logout-in-profile' style={{cursor:'pointer'}} onClick={()=>logoutfunction()} >
                LogOut
              </p>

            </div>
            


        </div>
        </div>
        
        
      </div>:<Navigate to ='/sign_in'/>
    );
  }
  
  export default Profile;