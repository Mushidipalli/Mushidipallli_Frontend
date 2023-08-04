import './Lists.css';
import { Link, useMatch } from 'react-router-dom';
import paradesamma from './paradesamma.jpg';
import durgamma from './durgamma.jpg';
import maridamma from './maridamma.jpg';
import muthyalamma from './muthyalamma.jpg';
import chinthalamma from './chinthalamma.jpg';
import pydithalamma from './pydithalamma.jpg';
import hanuman1 from './hanuman1.jpg';
import hanuman2 from './hanuman2.jpg';
import sriramtemple1 from './sriramtemple1.jpg';
import sriramtemple2 from './sriramtemple2.jpg';
import krishnatemple from './krishnatemple.jpg';
import useIntersection from '../useIntersection';
import { useRef,useState } from 'react';



// https://dogga-pydamnaidu.imgbb.com/


function Temples(props) {



    const matchTemples = useMatch('/temples');
    const matchPonds = useMatch('/ponds');
    const matchSchools = useMatch('/schools');
    const matchGovt = useMatch('/govtOffices');
    let setListItem = props.setlistitem;
    

  




    let displayData=[];

    const TemplesList = [
        {
            title:'Paradhesamma Thalli',
            image:paradesamma,
            description:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            link:'/temples/paradesamma_thalli'
        },
        {
            title:'Durgamma Thalli',
            image:durgamma,
            description:'Goddess Durga has always been a divine object for meditation, Bhakti, prayers and guidance since ages. She is deeply gloried by in the Durga Chalisa, Forty-hymn treatise that vividly praises Her presence, conquest of enemies, Vedic wisdom and mercy on the conditioned souls living on Earth.',
            link:'/temples/durgamma_thalli'
        },
        {
            title:'Maridamma Thalli',
            image:maridamma,
            description:'',
            link:'/temples/maridamma_thalli'
            
        },
        {
            title:'Muthyalamma Thalli',
            image:muthyalamma,
            description:'Some description',
            link:'/temples/muthyalamma_thalli'
            
        },
        {
            title:'Chinthalamma Thalli',
            image:chinthalamma,
            description:'Grama devatha,',
            link:'/temples/chinthalamma_thalli'
            
        },
        {
            title:'pydithalamma Thalli',
            image:pydithalamma,
            description:'Some description',
            link:'/temples/pydithalamma_thalli'
            
        },
        {
            title:'Hanuman temple',
            image:hanuman1,
            description:'Some description',
            link:'/temples/hanuman_temple'
            
        },
        {
            title:'Hanuman temple',
            image:hanuman1,
            description:'Some description',
            link:'/temples/hanuman_temple'
            
        },
        {
            title:'Hanuman temple',
            image:hanuman2,
            description:'Some description',
            link:'/temples/hanuman_temple'
            
        },
        {
            title:'Sriram temple',
            image:sriramtemple1,
            description:'Some description',
            link:'/temples/sriram_temple'
            
        },
        {
            title:'Sriram temple',
            image:sriramtemple2,
            description:'Some description',
            link:'/temples/sriram_temple'
            
        },
        {
            title:'Sri krishna temple',
            image:krishnatemple,
            description:'Some description',
            link:'/temples/srikrishna_temple'
            
        }

    ] 
    const SchoolsList = [
        {
            title:'Z.P.H School',
            image:'https://i.ibb.co/98Tf34T/school.jpg',
            description:'Some description',
            link:'/schools/ZPH_school'
            
        }

    ] 
    const PondsList = [
        {
            title:'Pedda Cheruvu',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            link:'/ponds/peddacheruvu'
            
        },
        {
            title:'yenkayyacheruvu',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            link:'/ponds/yenkayyacheruvu'
            
        },
        {
            title:'mathala cheruvu',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            link:'/ponds/mathalacheruvu'
            
        },
        {
            title:'sannasi cheruvu',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            link:'/ponds/sannsicheruvu'
            
        },
        {
            title:'konam',
            image:'',
            description:'Some description',
            link:'/ponds/konam'
            
        }

    ] 
    const GvotList = [
        {
            title:'Sachivalayam',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            link:'/govt/Sachivalayam'
            
        },
        {
            title:'Village Clinic',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            link:'/govt/VillageClinic'
            
        },
        {
            title:'Raithu Bharosakendram',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            link:'/govt/RaithuBharosakendram'
            
        },
        {
            title:'Ration Shop',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            link:'/govt/RationShop'
            
        }

    ] 

    
    if(matchTemples){
        displayData = TemplesList;
        

    }
    if(matchPonds){
        displayData = PondsList;


    }
    if(matchSchools){
        displayData = SchoolsList;
        
    }
    if(matchGovt){
        displayData = GvotList;
        

    }

    return (
        <>
         <div id="Lists">
            <div className="data-out-container">
            
               {displayData.map((data, index) => (
                  <Card key={index} data={data} setListItem={setListItem} />
               ))}
            </div>   
            
   
         </div>
          
        </>
      );
    };
    


    const Card = ({ data,setListItem }) => {

        const [imagesLoaded, setImagesLoaded] = useState(false);

        const handleItemClick =(data)=>{
            setListItem(data)
        }

        const handleImageLoad = () => {
          setImagesLoaded(true);
        };

        const elementRef = useRef(null);
        const isVisible = useIntersection(elementRef, '0px',0.5);

    return (
        
        <div className={isVisible ? 'main-data-container' : 'hide'}  style={{width:'100%',height:'95vh',display:'flex',justifyContent:'center',alignItems:'center'}}  ref={elementRef}  >
           {isVisible ? (      
            <div className='data-container' >
                <div className="data-image rightAnimation" style={{ backgroundImage: imagesLoaded ? `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url(${data.image})`:'linear-gradient(rgba(128, 128, 128, 1)' }} >
                </div>
                <div className="data-description leftAnimation " >
                    <h2 style={{borderBottom:'1px solid'}} >{data.title}</h2>
                    <p>{data.description}</p> 
                    <Link to={data.link} onClick={() => handleItemClick(data)} >see more</Link>  
                </div>
            </div>
            ) :(
                <div className='data-container' >
                <div className="data-image" style={{ backgroundImage: imagesLoaded ? `linear-gradient(rgba(0, 0, 0, 0.2),rgba(0, 0, 0, 0.2)),url(${data.image})`:'linear-gradient(rgba(128, 128, 128, 1),rgba(128, 128, 128, 1))' }} >
                </div>
                <div className="data-description " >
                    <h2 style={{borderBottom:'1px solid'}} >{data.title}</h2>
                    <p>{data.description}</p> 
                    <button  >see more</button>  
                </div>
              </div>
            ) 
            }  

            {
                <img
                src={data.image}
                alt={`Background `}
                style={{ display: 'none' }}
                onLoad={handleImageLoad}
              />
            }

        </div>

                


    );
  }
  
  export default Temples;