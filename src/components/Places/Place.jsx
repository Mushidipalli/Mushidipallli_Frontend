import { Link } from 'react-router-dom';
import './Place.css';
function Places() {

    let templs = [
        {
           image:'https://www.pngitem.com/pimgs/m/247-2475138_hindu-temple-logo-png-transparent-png.png',
           cardTitle:'Temples',
           description:'This is a description of the card.',
           link:'/temples'


        },
        {
            image:'https://img.freepik.com/free-vector/vector-clean-shiny-blue-drop-with-circles-water-close-up-front-view_1284-48012.jpg?w=2000',
            cardTitle:'Ponds',
            description:'This is a description of the card.',
            link:'/ponds'


         },
         {
            image:'https://img.freepik.com/premium-vector/education-school-logo-design_586739-1335.jpg?w=2000',
            cardTitle:'Schools',
            description:'This is a description of the card.',
            link:'/schools'


         },
         {
            image:'https://www.logopeople.in/wp-content/uploads/2013/01/government-of-india.jpg',
            cardTitle:'Govt.Offices',
            description:'This is a description of the card.',
            link:'/govtOffices'


         }
    ]


    return (
      <div id="Places">
        
        <div className='places-container' >
            {
                templs.map((data,index)=>(
                    
                        <span key={index} className="cards"  >
                           <h3 className="card-title">{data.cardTitle}</h3>
                           <Link to={data.link} >
                           <img src={data.image} alt="cardphoto" className="card-image"/>

                           </Link>
                                   
                        </span>

                    

                    
                ))
            }




        </div>


      </div>
    );
  }

  export default Places;