import React from 'react'
import bitcoin from '../asset/img/firstTopstories.png' 
import chair from '../asset/img/chairment.png'
// import bitcointhird from '../asset/img/firstTopstories.png' 
import '../asset/css/Topstories.css'
import '../asset/css/PVPasset.css'



export default function Topstories(props) {
    // const { storiesdata }= props

    const topstoriesdata=[
     {
      topimg:bitcoin,
      news:'News',
      data:"May 14",
      title:"Major Increase In Bitcoin Trading Volume",
      para:"A significant amount of bitcoin changed hands on the United States’ most dominant spot exchange, Coinbase, as investors look to buy the dip."
     } ,
     {
      topimg:chair,
      news:'News',
      data:"May 11",
      title:"‘Unlike Republicans, we recognize that there is real risk’ to stablecoins and crypto, says Senate Banking Committee chairman",
      para:"",
     },
     {
      topimg:bitcoin,
      news:'news',
      data:"May 23",
      title:"What is an ETF?",
      para:"Exchange-traded funds — better known as an ETFs — are similar in many ways to mutual funds."
     },
    
    ]
  
  
  return (
    
   <>
  <div className='container ' id='topstories'>
<h4>Top Stories</h4>
{
    topstoriesdata?.map((element,i)=>{
      return   <div className='d-flex mt-3' key={i}>
        <div className='topstoriesleft'>
            <img src={element.topimg} alt="" />
        </div>
        <div className='topstoriesright'>
             <div className='d-flex'>
                <p className='m-0 topstriesnews'>{element.news}</p>
                <p className='m-0 topstriesdate ms-2'>{element.data}</p>
             </div> 
             <h4 className='m-0 physicalAssetinsidetitle'>{element.title}</h4>
             <p className='m-0 physicaltitleTransaction topstoriespara '>{element.para}</p>
        </div>
      
  
       
        
    </div>
     })
    }
  </div>
   </>
  )
}
