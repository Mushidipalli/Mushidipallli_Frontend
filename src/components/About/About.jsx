import './About.css';
import React from 'react';

function About() {


  const data =[
    {
      id:1,
      field:"Gram Panchayat",
      value:"Mushidipalli"

    },
    {
      id:2,
      field:"Mandal",
      value:"Devarapalli"

    },
    {
      id:3,
      field:"District",
      value:"Visakhapatnam"

    },
    {
      id:4,
      field:"State",
      value:"Andhra Pradesh"

    },
    {
      id:5,
      field:"Pincode",
      value:"531022"

    },
    {
      id:6,
      field:"Area",
      value:"940 hectares"

    },
    {
      id:7,
      field:"Population",
      value:"3848"

    },
    {
      id:8,
      field:"Households",
      value:"1025"

    },
    {
      id:9,
      field:"Nearest Town",
      value:"Visakhaptnam (52 km)"

    },



  ]






  return (
    <div id='about'>
        <h2 style={{fontFamily:"monospace"}} >Mushidipalli</h2>
        <div className='about-discription'>
          <p>
          Mushidipalle village is located in Devarapalle mandal of Visakhapatnam district in Andhra Pradesh, India. It is situated 6km away from sub-district headquarter Devarapalle (tehsildar office) and 52km away from district headquarter Visakhapatnam.

          The total geographical area of village is 940 hectares. Mushidipalle has a total population of 3,848 peoples, out of which male population is 1,898 while female population is 1,950. There are about 1,025 houses in mushidipalle village. Pincode of mushidipalle village locality is 531022.

          Visakhapatnam is nearest town to mushidipalle for all major economic activities, which is approximately 52km away.
          </p>
          <div className='table-container' >
          <label style={{fontWeight:"700"}} >Mushidipalle - Village Overview</label>
          <table>
            <thead>
              
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id}>
                  <td>{item.field}</td>
                  <td>{item.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          </div>

        </div>
      
    </div>
  )
}

export default About
