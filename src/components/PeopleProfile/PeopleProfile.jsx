import React from 'react';
import {toast} from 'react-toastify';
import './PeopleProfile.css';


function PeopleProfile(props) {


    const person = props.person;
    const admin = props.admin;




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






  return (
    <div className="profile-section">
        
          <div className='user-details'>
            
            <h3 style={{fontSize:'1.5rem',margin:'0'}}>Profile</h3>
            <img alt='person_image' className='profileImage' src={person.image} />
            <p> <span style={{fontWeight:'600'}} >Name:</span>  {person.name}</p>
            <p> <span style={{fontWeight:'600'}} >Phone:</span>  +91 {person.contact}</p>
            <p> <span style={{fontWeight:'600'}} >Designation:</span> {person.designation}</p>
            <p> <span style={{fontWeight:'600'}} >Gender:</span> {person.gender}</p>
            <p> <span style={{fontWeight:'600'}} >Permanent Address:</span> {person.permanentAddress}</p>
            <p> <span style={{fontWeight:'600'}} >Current Address:</span> {person.currentAddress}</p>
            {  

              person.verified ? (<p style={{color:'rgb(47 247 75)',textAlign:'center'}}  >Verified</p>) : (<p style={{color:'rgb(247 47 47)',textAlign:'center'}} >Not Verified</p>)

            }
            {admin ?
               <div className='people-v-d-buttons' >
                {
                  person.verified ?"": <button style={{backgroundColor:'transparent'}} onClick={()=>userVerification(person._id)} >Verify</button>

                }

                 <button style={{backgroundColor:'transparent'}} onClick={()=>userDeletion(person._id)} >Delete</button>
                
      
            </div>:''}
            
            
            {/* Add more employee details here */}
          </div>
          
      </div>
  )
}

export default PeopleProfile
