import React from 'react'
import portfolioimg from '../asset/img/Group 284.png'
import '../asset/css/Browseimgnavbar.css'
import trendingimg from  '../asset/img/Group 250.png'
import dropdownimg from '../asset/img/Path 450.png'
import blueimg from '../asset/img/Group 279.png'

import Like from '../asset/img/Path 447.png'
import Comment from '../asset/img/Path 445.png'
import send from '../asset/img/Group 370.png'
import Bookmark from '../asset/img/Path 448.png'


const navbardata=[
    {proimg:portfolioimg},
    {proimg:portfolioimg},
    {proimg:portfolioimg},
    {proimg:portfolioimg},
    {proimg:portfolioimg},
    {proimg:portfolioimg},
    {proimg:portfolioimg},
    {proimg:portfolioimg},
    {proimg:portfolioimg},
    {proimg:portfolioimg},
   
]

const trendings=[
    {
        title:"Trending News",
        view:"View All",
        trendingdata:[
            {
             arrowimg:trendingimg,
             cryptoloss:"Crypto Big Losses..",
             readmore:"read More"  
            } ,
            {
                arrowimg:trendingimg,
                cryptoloss:"Crypto Big Losses..",
                readmore:"read More"  
            },
            {
                arrowimg:trendingimg,
                cryptoloss:"Crypto Big Losses..",
                readmore:"read More"  
            } 

        ]

    },
    {
        title:"Trending News",
        view:"View All",
        trendingdata:[
            {
            arrowimg:trendingimg,
            cryptoloss:"Crypto Big Losses..",
            readmore:"read More"
            } ,
            {
                arrowimg:trendingimg,
                cryptoloss:"Crypto Big Losses..",
                readmore:"read More"  
               } ,
               {
                arrowimg:trendingimg,
                cryptoloss:"Crypto Big Losses..",
                readmore:"read More"  
               } 
        ]

    }
]
export default function Browseimgnavbar() {
  return (
    

<>

<div className='browser-parent'>

    <div className='browsernav'>
         <ul className='p-0 m-0'>
            {
             navbardata.map((element,i)=>{
                
               return <li key={i} ><a href="" ><img src={portfolioimg} alt="" /></a></li>
             })   
            }
           
         </ul>    
    </div>
    <div className='d-flex mt-3'>
    <div className='browsernavsearch'>
        
        <input type="text" className='me-2' />
        
    <a href="">Share</a>

    <div className='daniel-salib mt-4 px-2'>
       <div className='d-flex align-item-center justify-content-between'>
        <div className='leftside-portfolio d-flex align-item-center
'>
        <img src={portfolioimg} alt="" />
        <div>
            <p className='m-0'>Daniel Saliba</p>
            <p className='m-0'>Dubai, UAE</p>
        </div>
       </div>
       <div className='dropdownimg'>
       <img src={dropdownimg} alt="" />
       </div>
       </div>
    </div>

    <div className='bigimg'>
        <img src={blueimg} alt="" />
    </div>
    <div className='browsbottom'>
        <div className='burttonsend'>
            <img src={Like} alt="" />
            <img src={Comment} alt="" />
            <img src={send} alt="" />
        </div>
        <div className='bookmark'>
            <img src={Bookmark} alt="" />
        </div>
    </div>
     <div className='browsbottompara'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        </p>
     </div>
    </div>




<div className=''>
    <div className='browright-parent'>
    <div className='d-flex justify-content-between'>
     <div className='d-flex browright-parent-img'>
        <img src={portfolioimg} alt="" />  
      <div  className='browright-title'>
        <p className='m-0'>Daniel Saliba</p> 
        <p className='m-0'>@danielsabiva</p>
      </div>
     </div>
      <p className='browright-title'>Edit</p>
    </div>

    <p className='browright-title pt-2'>Dubai,UAE</p>

    <div className='d-flex justify-content-between rightbottom'>
      <div>
        <p className='rihtbottomcard'>Posts</p>
        <p className='browright-title m-0'>2.6k</p>
      </div>
      <div>
      <p className='rihtbottomcard'>Following</p>
      <p className='browright-title m-0'>1050</p>
      </div>
      <div>
      <p className='rihtbottomcard'>Followers</p>
      <p className='browright-title m-0'>2400</p>
      </div>
    </div>

    </div>


    <div className='trendings'>
    {

      
    trendings.map((ele,i)=>{
        let insidetrending=[...  ele.trendingdata]
        console.log(insidetrending)
return <div className='trending-parent' key={i}>
    <div className='d-flex justify-content-between '>
        <p className='trending-title'>{ele. title}</p>
        <p className='trending-viewall'>{ele.view}</p>
    </div>

{
    insidetrending.map((ele,i)=>{
        console.log(ele.cryptoloss)
        return  <div key={i} className="">
            <div className='trendingarrow d-flex align-items-center justify-content-between'>
                <img src={trendingimg} alt="" />
                <div>
                    <p className='m-0 trendingtitle'>{ele.cryptoloss}</p>
                    <p className='readmore'>{ele.readmore}</p>
                </div>
            </div>
        </div>
    })
}

</div>
    })
}
    </div>
</div>

</div>
</div>
   </>
    
  )
}
