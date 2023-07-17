import './profile.css'
import { useNavigate } from 'react-router';
function Profile(props) {
  const navigate = useNavigate();

  const logoutfunction = ()=>{
    props.userLogout()
    navigate('/people')

  }
  
  const profileUser = props.accountUser;
    return (
      <div id="account-profile">
        <div className='account-container'>
        <img src={profileUser.image} alt='user_photo' className='account-profile-image' />
        <div className='account-profile-details' >
            <p className='label' >Name</p>
            <p className='profile-data' >{profileUser.name}</p>
            <p className='label' >Phone Number</p>
            <p className='profile-data' >{profileUser.contact}</p>
            <p className='label' >Gender</p>
            <p className='profile-data' >{profileUser.gende}</p>
            <p className='label' >Designation</p>
            <p className='profile-data' >{profileUser.designation}</p>
            <p className='label' >Parminent Address</p>
            <p className='profile-data' >{profileUser.permanentAddress}</p>
            <p className='label' >Current Address</p>
            <p className='profile-data' >{profileUser.currentAddress}</p>
            <div className='profile-buttons' >
              <button>Update Profile</button>
              <p id='logout-in-profile' style={{cursor:'pointer'}} onClick={()=>logoutfunction()} >
                LogOut
              </p>

            </div>
            


        </div>
        </div>
        
        
      </div>
    );
  }
  
  export default Profile;