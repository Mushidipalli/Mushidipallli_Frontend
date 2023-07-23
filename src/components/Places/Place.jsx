import { Link } from 'react-router-dom';
import './Place.css';
function Places() {

    let templs = [
        {
           image:'https://i.ibb.co/ThdxJ6d/praniket-desai-c4-KZw-FRajtg-unsplash.jpg',
           cardTitle:'Temples',
           description:'This is a description of the card.',
           link:'/temples'


        },
        {
            image:'https://i.ibb.co/FwYJqXV/Clark-young-043p-Ygee8oc-unsplash.jpg',
            cardTitle:'Ponds',
            description:'This is a description of the card.',
            link:'/ponds'


         },
         {
            image:'https://i.ibb.co/JFy6PYx/pexels-katerina-holmes-5905492.jpg',
            cardTitle:'Schools',
            description:'This is a description of the card.',
            link:'/schools'


         },
         {
            image:'https://i.ibb.co/5GtKZ2b/government.jpg',
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
                  <div className='home-people-section' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url('https://i.ibb.co/swQGYF4/Nicholas-green-n-Pz8akk-Um-DI-unsplash.jpg')` }}  >
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