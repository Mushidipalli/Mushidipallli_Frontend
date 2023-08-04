
import './Sachivalayam.css';
import avatar from '../avatar.jpg';

function Sachivalayam() {
  const sachivalayamEmployes  = [
    {
      title:'Welfare and Education assistant',
      user:'10390616WEA',
      name:'NAGALLA RAVINDRA',
      mobile:'******0092',
      image:avatar
    },
    {
      title:'Panchayath secretary Grade -IV Digital Assistant',
      user:'10390616PDA',
      name:'SIVAKOTI VARA PRASAD',
      mobile:'******9815',
      image:avatar
    },
    {
      title:'Village Revenue Officer',
      user:'10390616VRO',
      name:'SIVAKOTI VARA PRASAD',
      mobile:'******9815',
      image:avatar
    }

  ]
  const volunteers = [
    {
      volunteerId:'	******8663',
      volunteerName:'	BATHINA MANGA',
      cluster:'1',
      image:avatar
    },
    {
      volunteerId:'	******2870',
      volunteerName:'KUTCHI KRISHNAVENI',
      cluster:'2',
      image:avatar
    },
    {
      volunteerId:'	******0991',
      volunteerName:'	KOLLI PYDAMNAIDU',
      cluster:'3',
      image:avatar
    },
    {
      volunteerId:'	******3071',
      volunteerName:'	MATHALA SANTOSHKUMARI',
      cluster:'4',
      image:avatar
    },
    {
      volunteerId:'	******0502',
      volunteerName:'	NALAM PARVATHI',
      cluster:'5',
      image:avatar
    },
    {
      volunteerId:'	******3382',
      volunteerName:'	RAVADA MALLESWARA RAO',
      cluster:'6',
      image:avatar
    },
    {
      volunteerId:'	******8408',
      volunteerName:'REDDI ESWARAMMA',
      cluster:'7',
      image:avatar
    },
    {
      volunteerId:'	******7904',
      volunteerName:'GOGADA URMILA',
      cluster:'8',
      image:avatar
    },
    {
      volunteerId:'	******9657',
      volunteerName:'GOMAPANA RAMANAMMA',
      cluster:'9',
      image:avatar
    },
    {
      volunteerId:'******0830',
      volunteerName:'MOYYI VENKATA RAO',
      cluster:'10',
      image:avatar
    },
    {
      volunteerId:'	******7153',
      volunteerName:'NELLURI DINESH KUMAR',
      cluster:'11',
      image:avatar
    },
    {
      volunteerId:'	******2956',
      volunteerName:'CHOWDUVADA GANESH',
      cluster:'12',
      image:avatar
    },
    {
      volunteerId:'	******0819',
      volunteerName:'	REDDI KANNAMNAIDU',
      cluster:'13',
      image:avatar
    },
    {
      volunteerId:'	******7802',
      volunteerName:'	SINGAMPALLI UMA MAHESWARI DEVI',
      cluster:'14',
      image:avatar
    },
    {
      volunteerId:'	******0575',
      volunteerName:'	TAMARANA SIVA',
      cluster:'15',
      image:avatar
    },
    {
      volunteerId:'	******7599',
      volunteerName:'	VANUMU MUTYALAMMA',
      cluster:'16',
      image:avatar
    },
    {
      volunteerId:'	******4119',
      volunteerName:'SURYANARAYANA KONA',
      cluster:'17',
      image:avatar
    },
    {
      volunteerId:'	******0032',
      volunteerName:'YENAPALLI RAMESH',
      cluster:'18',
      image:avatar
    },
    {
      volunteerId:'	******7092',
      volunteerName:'YELAMANCHILI NAIDU',
      cluster:'19',
      image:avatar
    },
  ]






  return (
    <div id='sachivalayam' >
      <div className='list-videoDivContainer' >
        <video autoPlay loop muted src='' preload='auto' style={{objectFit:'cover'}} className='bg-video' />
  
        <div className='list-name-container'  >

          {/* <h3 className='welcome' >Welcome</h3>   */}
          <div id='listPage-main-heading'  >
            <h1>Sachivalayam</h1>  
          </div>

        </div>
      </div>
      <div id='sachivalaym-info' >
        <h2>
          VISAKHAPATNAM DISTRICT DEVARAPALLI (RURAL) MANDAL MUSHIDIPALLI SECRETARIAT DETAILS
        </h2>
        <div>
          <p style={{textAlign:'center'}} >Secretariat Code : 10390616</p>
          <p style={{textAlign:'center'}}>Secretariat Name : MUSHIDIPALLI</p>
        </div>
        <div className='employes-section' >
          <h3>Employes</h3>
          <div className="employes-container">
          {sachivalayamEmployes.map((data, index) => (
           <Card1 key={index} data={data} />
          ))}
        
             
             
              
          </div>

        </div>
        <div className="employes-section">

        <h3>Volunteers</h3>
          <div className="employes-container">
            {
              volunteers.map((employe, index)=>(
                <div key={index} className='employe-data'  >
                  <div className='employe-card'>
                    <img src={employe.image} alt='empolye' />
                    <div className="employe-info">
                      <span>VolunteerId : {employe.volunteerId}</span>
                      <span>VolunteerName : {employe.volunteerName}</span>
                      <span>Cluster : {employe.cluster}</span>

                    </div>
                    
                  </div>
             
                </div> 

              ))
            }
             
             
              
          </div>
          
        </div>

      </div>
      
    </div>
  )

}



const Card1 = ({data}) => {


return (
  
  
      
                <div className='employe-data' >
                  <h4>{data.title}</h4>
                  <div className='employe-card'>
                    <img src={data.image} alt='empolye' />
                    <div className="employe-info">
                      <span>User : {data.user}</span>
                      <span>Name : {data.name}</span>
                      <span>Mobile : {data.mobile}</span>

                    </div>
                    
                  </div>
             
                </div> 
      


);
}

export default Sachivalayam

