import React, { useEffect, useState } from 'react';
import './App.css';
import bg from '../src/components/Home/homeVideo.mp4'
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
import ListPage from './components/ListPage/ListPage';
import Sachivalayam from './components/GovtOffices/Sachivalayam/Sachivalayam';
import RaithuBharosakendram from './components/GovtOffices/RaithuBharosakendram/RaithuBharosakendram';
import VillageClinic from './components/GovtOffices/VillageClinic/VillageClinic';
import RationShop from './components/GovtOffices/RationShop/RationShop';
import Zph from './components/Schools/Zph';




function App() {






  
  const [isLoading,setIsLoading] = useState(true);
  const [admin,setAdmin] = useState(false);
  const [users,setUsers] = useState([]);
  const [accountUser,setAccountUser] = useState('');
  const [isLogin,setIsLogin] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [visitors, setVisitors]= useState([]);
  const [selectedPerson, setSelectedPerson] = useState('');
  const [homeLoad,setHomeLoad] = useState(true);
  const [visitorsLoaded,setViaitorsLoaded] = useState(false);
  const [listItem,setListItem]=useState('');


  const person = (data)=>{
    setSelectedPerson(data);
  }
  



  const getIp = async () => {
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
      setViaitorsLoaded(true)
      
      
    } catch (error) {
      
    }
    
  };

 







const userLogin = (data) => {
  setAccountUser(data);
  setIsLogin(true);
 
};

const adminLogin=()=>{
  setAdmin(true);
  console.log(admin);
}

const adminLogout =()=>{
  setAdmin(false);
}
const handleforlistItem=(data)=>{
  setListItem(data)
}



const userLogout = ()=>{
  
  localStorage.removeItem('authToken');
  setIsLogin(false)
  toast.success('Logout Successful', {
    position: toast.POSITION.TOP_RIGHT
    
  });

}



useEffect(()=>{

  getIp();

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


useEffect(() => {
  const delay = setTimeout(() => {
    setHomeLoad(false); // Set isLoading to false after a delay (you can replace this with your actual content loading logic)
  }, 1000); // Change the value (in milliseconds) based on your content loading time

  return () => clearTimeout(delay);
}, []);



  

  


  return (
    <div className="App">
     
     
     
     {/* <div>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/UwNB78PZcsA?start=20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

     </div> */}
     

     <React.StrictMode>
    
    <Router>
    <Header admin={admin} adminLogout={adminLogout} /> 
    <ScrollToTop />
    <Routes>
      <Route exact path="/" element={homeLoad?<LoadingPage/>:<Home bg={bg} visitors={visitors} visitorsLoaded={visitorsLoaded} />} />
      <Route exact path="/temples" element={<Lists setlistitem={handleforlistItem} />} />
      <Route exact path="/ponds" element={<Lists setlistitem={handleforlistItem} />} />
      <Route exact path="/schools" element={<Lists setlistitem={handleforlistItem} />} />
      <Route exact path="/govtOffices" element={<Lists setlistitem={handleforlistItem} />} />
      <Route exact path="/admin/login" element={<Admin adminLogin={adminLogin} />} />
      <Route exact path='/temples/:item' element={<ListPage listItem={listItem} />} />
      <Route exact path='/ponds/:item' element={<ListPage listItem={listItem} />} />
      <Route exact path='/govt/Sachivalayam' element={<Sachivalayam />} />
      <Route exact path='/govt/RaithuBharosakendram' element={<RaithuBharosakendram />} />
      <Route exact path='/govt/VillageClinic' element={<VillageClinic />} />
      <Route exact path='/govt/RationShop' element={<RationShop />} />
      <Route exact path='/schools/ZPH_school' element={<Zph />} />
      <Route exact path='/about' element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
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
