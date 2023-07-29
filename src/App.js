import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes,useLocation } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Admin from './components/Admin/Admin';
import Home from './components/Home/Home';
import About from './components/About/About';
import {toast} from 'react-toastify';
import Lists from './components/ShowList/Lists';
import InvalidRoute from './components/InvalidRoute';
import SignUp from './components/SignUp/SignUp';
import Contact from './components/Contact/Contact';
import SingIn from './components/Signin/SignIn';
import People from './components/People/People';
import Profile from './components/profile/profile';
import LoadingPage from './components/LoadingPage/LoadingPage';
import axios from 'axios';
import PeopleProfile from './components/PeopleProfile/PeopleProfile';




function App() {


  
  const [isLoading,setIsLoading] = useState(true);
  const [admin,setAdmin] = useState(false);
  const [users,setUsers] = useState([]);
  const [accountUser,setAccountUser] = useState('');
  const [isLogin,setIsLogin] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [visitors, setVisitors]= useState([]);
  const [selectedPerson, setSelectedPerson] = useState('');


  const person = (data)=>{
    setSelectedPerson(data);
  }
  



  const getData = async () => {
    try {
      const res = await axios.get("https://api.ipify.org/?format=json");
  
      
      const data = {
        ip:res.data.ip
      }
      const visitorsCount = await axios.post("https://mushidipalli-back-end.onrender.com/visitors",data);

      const visitorsString =visitorsCount.data.visitcount.toString();
      let tempArray = [];
      
     for(let i=0; i<visitorsString.length;i++){
      
      tempArray.push(visitorsString[i]);
      
       }
      
      setVisitors(tempArray);
      
      
    } catch (error) {
      
    }
    
  };

 







const userLogin = (dataa) => {
  setAccountUser(dataa);
  setIsLogin(true);
 
};

const adminLogin=()=>{
  setAdmin(true);
  console.log(admin);
}

const adminLogout =()=>{
  setAdmin(false);
}



const userLogout = ()=>{
  
  localStorage.removeItem('authToken');
  setIsLogin(false)
  toast.success('Logout Successful', {
    position: toast.POSITION.TOP_RIGHT
    
  });

}



useEffect(()=>{

  getData();

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
  // console.log(authToken);
    
    if (authToken) {
      
      
      // Set the isAuthenticated state to true if the token exists
      const verifyFunction = async ()=>{

        try {
          // Simulating an asynchronous API call
          const response = await fetch('https://mushidipalli-back-end.onrender.com/users/verifyUser', {
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
              setIsLoading(false);

            }
  
        } catch (error) {
          console.error(error);
 
        }


      }

      verifyFunction();

  
    }


    

},[]);


const updateProfile = async (dataa)=>{
  const authToken = localStorage.getItem('authToken');
  setShowButton(false);

  try {
    // Simulating an asynchronous API call
    const response = await fetch('https://mushidipalli-back-end.onrender.com/users/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'authorization': authToken
      },
      body: JSON.stringify(dataa)
     
    });
      const data= await response.json();
       setShowButton(true);
      if(response.ok){
        toast.success('Update Successful', {
          position: toast.POSITION.TOP_RIGHT
          
        });
        
        setAccountUser(data.user);
      }else{
        toast.warning('Update faild', {
          position: toast.POSITION.TOP_RIGHT
          
        });

      }

  } catch (error) {
    console.error(error);

  }


}



  

  


  return (
    <div className="App">
     
     
     
     {/* <div>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/UwNB78PZcsA?start=20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

     </div> */}
     

     <React.StrictMode>
     
    <Router>
    <ScrollToTop />
    <Header admin={admin} adminLogout={adminLogout} /> 
    <Routes>
      <Route exact path="/" element={<Home  visitors={visitors}  isLoading={isLoading} />} />
      <Route exact path="/temples" element={<Lists/>} />
      <Route exact path="/ponds" element={<Lists/>} />
      <Route exact path="/admin/login" element={<Admin adminLogin={adminLogin} />} />
      <Route exact path="/schools" element={<Lists/>} />
      <Route exact path='/about' element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route exact path="/govtOffices" element={<Lists/>} />
      <Route exact path ="/:name/profile"  element={<PeopleProfile   person={selectedPerson} admin={admin}  />}/>
      <Route exact path="/sign_in" element={isLoading?<LoadingPage/>:<SingIn userLogin={userLogin}  isLogin={isLogin}  />} />
      <Route exact path="/sign_up" element={isLoading?<LoadingPage/>:<SignUp isLogin={isLogin}  />} />
      <Route exact path="/people" element = {<People isLoading={isLoading} setPerson={person} users={users} admin={admin} userLogout={userLogout} isLogin={isLogin} accountUser={accountUser} />} />
      <Route exact path="/profile" element = {isLoading?<LoadingPage/>:<Profile accountUser={accountUser} showButton={showButton} isLogin={isLogin} updateProfile={updateProfile} userLogout={userLogout} />} />

      

      <Route path='*' element={<InvalidRoute/>}/>
      
    </Routes>
  </Router>
  
  <Footer/>
 
 
  </React.StrictMode>



      
    </div>
  );
}


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App;
