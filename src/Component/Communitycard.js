import React from 'react'
import '../asset/css/Communitycard.css'
import cardimg from '../asset/img/Group 371.png'
import location from '../asset/img/Path 387.png'


export default function Communitycard() {

    let communityData=[
        {
            title:"Main Road",
            subtitle:"Ethereum",
            combadge:"20,41",
            comimg:cardimg,
            location:location
        },
        {
            title:"Main Road",
            subtitle:"Ethereum",
            combadge:"20,41",
            comimg:cardimg,
            location:location
        },
        {
            title:"Main Road",
            subtitle:"Ethereum",
            combadge:"20,41",
            comimg:cardimg,
            location:location

        },
        {
            title:"Main Road",
            subtitle:"Ethereum",
            combadge:"20,41",
            comimg:cardimg,
            location:location
        },
        {
            title:"Main Road",
            subtitle:"Ethereum",
            combadge:"20,41",
            comimg:cardimg
        },
        {
            title:"Main Road",
            subtitle:"Ethereum",
            combadge:"20,41",
            comimg:cardimg,
            location:location
        },
        {
            title:"Main Road",
            subtitle:"Ethereum",
            combadge:"20,41",
            comimg:cardimg,
            location:location
        },
        {
            title:"Main Road",
            subtitle:"Ethereum",
            combadge:"20,41",
            comimg:cardimg,
            location:location

        }
    ]
  return (
    <div className='comcard-container mt-5'>
        
       
            {
             communityData.map((ele,i)=>{
            return  <div className='comcard mt-4' key={i}>
                <img src={cardimg} alt="" />
                <div className='bottomcard'>
                  <p className='comCardtitle m-0'>{ele.title}</p>
                  <p className='comsubtitle '>{ele.subtitle}</p>
                  <span className='locationbadge'>
                     <img src={location} alt="" />  {ele.combadge}
                  </span>
                  </div>
                 </div>
             })   
            }
       

    </div>
  )
}



{/* <div className='communitynav'>
<ul className='p-0 m-0'>
   {
    navbardata.map((element,i)=>{
       console.log(element.vr);
      return <li key={i} ><a href="" >{element.vr}</a></li>
    })   
   }
  
</ul>    
</div> */}


