import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/Home/Home';
import {toast} from 'react-toastify';
import Lists from './components/ShowList/Lists';
import InvalidRoute from './components/InvalidRoute';
import SignUp from './components/SignUp/SignUp';
import SingIn from './components/Signin/SignIn';
import People from './components/People/People';
import Profile from './components/profile/profile';
import UpdateProfile from './components/UpdataProfile/UpdateProfile';




function App() {


  
  const [isLoading,setIsLoading] = useState(true);
  const [users,setUsers] = useState([]);
  const [accountUser,setAccountUser] = useState('');
  const [isLogin,setIsLogin] = useState(false);

const userLogin = (dataa) => {
  setAccountUser(dataa);
  setIsLogin(true);
 
};

const userLogout = ()=>{
  
  localStorage.removeItem('authToken');
  setIsLogin(false)
  toast.success('Logout Successful', {
    position: toast.POSITION.TOP_RIGHT
    
  });

}



useEffect(()=>{

  const fetchData = async ()=>{

    try {
      // Simulating an asynchronous API call
      const response = await fetch('https://mushidipalli-back-end.onrender.com/users/all_users', {
        method: 'GET'
      });
        const data= await response.json();
        setUsers(data.users);
        setIsLoading(false);
       
  
    } catch (error) {
      console.error(error);     
     
    }


  }
  fetchData();

  const authToken = localStorage.getItem('authToken');

    if (authToken) {
      // Set the isAuthenticated state to true if the token exists
      const verifyFunction = async ()=>{

        try {
          // Simulating an asynchronous API call
          const response = await fetch('http://localhost:8080/users/verifyUser', {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'authorization': authToken
            },
           
          });
            const data= await response.json();
  
            if(response.ok){
           
              setAccountUser(data);
              setIsLogin(true);

            }
  
        } catch (error) {
          console.error(error);
 
        }


      }

      verifyFunction();

  
    }

},[])
  

  


  return (
    <div className="App">
     
     
     
     {/* <div>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/UwNB78PZcsA?start=20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

     </div> */}
     

     <React.StrictMode>
     
    <Router>
    <Header/> 
    <Routes>
      <Route exact path="/" element={<Home isLoading={isLoading} />} />
      <Route exact path="/temples" element={<Lists/>} />
      <Route exact path="/ponds" element={<Lists/>} />
      <Route exact path="/schools" element={<Lists/>} />
      <Route exact path="/govtOffices" element={<Lists/>} />
      <Route exact path="/sign_in" element={<SingIn userLogin={userLogin} isLogin={isLogin}  />} />
      <Route exact path="/sign_up" element={<SignUp isLogin={isLogin} />} />
      <Route exact path="/people" element = {<People isLoading={isLoading} users={users} userLogout={userLogout} isLogin={isLogin} accountUser={accountUser} />} />
      <Route exact path="/profile" element = {<Profile accountUser={accountUser} userLogout={userLogout} />} />
      <Route exact path='/loading' element = {<UpdateProfile/>}/>

      <Route path='*' element={<InvalidRoute/>}/>
      
    </Routes>
  </Router>
  
  <Footer/>
 
 
  </React.StrictMode>



      
    </div>
  );
}

export default App;
