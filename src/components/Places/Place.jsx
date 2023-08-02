import { Link } from 'react-router-dom';
import './Place.css';
import templeImage from './temple.png';
import peopleImage from './people.jpeg';
import governmentImage from './government.jpg';
import pondsImage from './ponds.jpg';
import schoolsImage from './school.jpeg';
import useIntersection from '../useIntersection';
import { useRef } from 'react';


const Place = () => {

   let templs = [
      {
         image:peopleImage,
         cardTitle:'People',
         description:'This is a description of the card.',
         link:'/people'
   
      },
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
     <>
      <div id="Places">
         <div className='places-container'>
            {templs.map((data, index) => (
               <Card key={index} data={data} />
            ))}
         </div>

      </div>
       
     </>
   );
 };



 const Card = ({ data }) => {
   const elementRef = useRef(null);
   const isVisible = useIntersection(elementRef, '0px',0);
   
 
   return (
     <span className="cards" ref={elementRef}>
       {isVisible ? (
         <Link to={data.link} className='exploreanimation'>
           <div
             className="card-image"
             style={{
               backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${data.image})`,
             }}
           >
             <h3 className="card-head">Explore</h3>
             <h3 className="card-title" style={{ fontSize: '2.5rem' }}>
               {data.cardTitle}
             </h3>
             <div className="border-animation"></div>
           </div>
         </Link>
       ) : (
         <div className="hidden"></div>
       )}
     </span>
   );
 };
 
 export default Place;
 
 
 
 
 
 























// function Places() {

//    const elementRef = useRef(null);
//    const isVisible = useIntersection(elementRef, '0px');
//    console.log(isVisible);

    

//     return (
//       <div id="Places">
        
//         {/* <div className='places-container' ref={elementRef} >
//             <div className='home-people' >
            
   
             
//                <Link to='/people' className='exploreanimation'>
//                   <div className='home-people-section' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${peopleImage})` }}  >
//                      <h3 className="card-head" >Explore</h3>
//                      <h3 className="card-title" style={{fontSize:'2.5rem'}} >People</h3>
//                      <div className='border-animation' ></div>
                     
//                   </div>
                
//                </Link>
               
//             </div> */}
            
                    
//                         <span key={index} className="cards exploreanimation"   >
//                            {isVisible ? (
                           
//                            <Link to={data.link} >
                           
//                            <div  className="card-image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${data.image})` }}  >
//                              <h3 className="card-head"  >Explore</h3>
//                              <h3 className="card-title" style={{fontSize:'2.5rem'}} >{data.cardTitle}</h3>
//                              <div className='border-animation' ></div>
//                            </div>

//                            </Link>
//                            ) : (<div className="hidden">hi</div>)}
                                   
//                         </span>

                    

                    
               


//       </div>
//     );
//   }

//   export default Places;