import { Link } from 'react-router-dom';
import './Place.css';
import templeImage from './temple.png';
import peopleImage from './people.jpeg';
import governmentImage from './government.jpg';
import pondsImage from './ponds.jpg';
import schoolsImage from './school.jpeg';
function Places() {

    let templs = [
        {
           image:templeImage,
           cardTitle:'Temples',
           description:'This is a description of the card.',
           link:'/temples'


        },
        {
            image:pondsImage,
            cardTitle:'Ponds',
            description:'This is a description of the card.',
            link:'/ponds'


         },
         {
            image:schoolsImage,
            cardTitle:'Schools',
            description:'This is a description of the card.',
            link:'/schools'


         },
         {
            image:governmentImage,
            cardTitle:'Govt.Offices',
            description:'This is a description of the card.',
            link:'/govtOffices'


         }
    ]










    return (
      <div id="Places">
        
        <div className='places-container' >
            <div className='home-people' >
               <Link to='/people'>
                  <div className='home-people-section' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${peopleImage})` }}  >
                     <h3 className="card-head" >Explore</h3>
                     <h3 className="card-title" style={{fontSize:'2.5rem'}} >People</h3>
                     <div className='border-animation' ></div>
                     
                  </div>
                
               </Link>
            </div>
            {
                templs.map((data,index)=>(
                    
                        <span key={index} className="cards"  >
                           
                           <Link to={data.link} >
                           
                           <div  className="card-image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${data.image})` }}  >
                             <h3 className="card-head"  >Explore</h3>
                             <h3 className="card-title" style={{fontSize:'2.5rem'}} >{data.cardTitle}</h3>
                             <div className='border-animation' ></div>
                           </div>

                           </Link>
                                   
                        </span>

                    

                    
                ))
            }




        </div>


      </div>
    );
  }

  export default Places;