import './Lists.css';
import { useMatch } from 'react-router-dom';
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



// https://dogga-pydamnaidu.imgbb.com/


function Temples() {



    const matchTemples = useMatch('/temples');
    const matchPonds = useMatch('/ponds');
    const matchSchools = useMatch('/schools');
    const matchGovt = useMatch('/govtOffices');

  




    let displayData=[];

    const TemplesList = [
        {
            title:'Paradhesamma Thalli',
            image:paradesamma,
            description:'Paradesamma Thalli is believed to be the goddess of fertility, protector of women, and a bringer of good fortune. Devotees seek her blessings for various reasons, including the fulfillment of desires, protection from evil, and the well-being of their families. She is especially revered by women seeking fertility and the birth of healthy children.',
            
        },
        {
            title:'Durgamma Thalli',
            image:durgamma,
            description:'Goddess Durga has always been a divine object for meditation, Bhakti, prayers and guidance since ages. She is deeply gloried by in the Durga Chalisa, Forty-hymn treatise that vividly praises Her presence, conquest of enemies, Vedic wisdom and mercy on the conditioned souls living on Earth.',
            
        },
        {
            title:'Maridamma Thalli',
            image:maridamma,
            description:'Some description',
            
        },
        {
            title:'Muthyalamma Thalli',
            image:muthyalamma,
            description:'Some description',
            
        },
        {
            title:'Chinthalamma Thalli',
            image:chinthalamma,
            description:'Some description',
            
        },
        {
            title:'pydithalamma Thalli',
            image:pydithalamma,
            description:'Some description',
            
        },
        {
            title:'Hanuman temple',
            image:hanuman1,
            description:'Some description',
            
        },
        {
            title:'Hanuman temple',
            image:hanuman1,
            description:'Some description',
            
        },
        {
            title:'Hanuman temple',
            image:hanuman2,
            description:'Some description',
            
        },
        {
            title:'Sriram temple',
            image:sriramtemple1,
            description:'Some description',
            
        },
        {
            title:'Sriram temple',
            image:sriramtemple2,
            description:'Some description',
            
        },
        {
            title:'Sri krishna temple',
            image:krishnatemple,
            description:'Some description',
        }

    ] 
    const SchoolsList = [
        {
            title:'Z.P.H School',
            image:'https://i.ibb.co/98Tf34T/school.jpg',
            description:'Some description',
            
        }

    ] 
    const PondsList = [
        {
            title:'Pedda Cheruvu',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            
        },
        {
            title:'yenkayyacheruvu',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            
        },
        {
            title:'mathala cheruvu',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            
        },
        {
            title:'sannasi cheruvu',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            
        },
        {
            title:'konam',
            image:'',
            description:'Some description',
            
        }

    ] 
    const GvotList = [
        {
            title:'Sachiwalayam',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            
        },
        {
            title:'Village Clinick',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            
        },
        {
            title:'Raithu Bharosakendram',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            
        },
        {
            title:'Ration Shop',
            image:'https://scontent.fhyd1-4.fna.fbcdn.net/v/t1.6435-9/139617674_103273015089035_5479595256881993235_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=ajtHmNznJUUAX_RXONO&_nc_ht=scontent.fhyd1-4.fna&oh=00_AfBr_c7omLblo7x4l1RAGw0osb07tcDc_2dvZWOl-WLzcA&oe=64D231DC',
            description:'Some description',
            
        }

    ] 

    
    if(matchTemples){
        displayData = TemplesList;

    }
    if(matchPonds){
        displayData = PondsList;

    }
    if(matchSchools){
        displayData = SchoolsList
    }
    if(matchGovt){
        displayData = GvotList
    }
    



    return (
      <div id="Lists">
        <div  className='data-out-container' >

        {
            displayData.map((data,index)=>(
            
                <div key={index}    className='data-container'   >
                    {/* <img className="data-image" src={data.image}  alt='data_image'  /> */}
                    <div className="data-image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${data.image})` }} >
                        <h2 style={{borderBottom:'1px solid'}} >{data.title}</h2>

                    </div>
                    <div className="data-description" >
                        
                        <p>{data.description}</p> 
                        <button >see more</button>  
                    </div>
                </div>
          


            ))
            
        }
          </div>

       
        
        
      </div>
    );
  }
  
  export default Temples;