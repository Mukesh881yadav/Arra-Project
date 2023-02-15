import React from 'react';
import dotimg from '../asset/img/dot.png'
import '../asset/css/portfolioasset.css'




export default function PortfolioAsset() {
  let assets=[
    {
      btc:"1.25BTC",
      price:"$2,4506",
      physicalasset:"Physical Real Estate",
      physicalassetvalue:"+0.34%"
    },
    {
      btc:"1.25BTC",
      price:"$2,4506",
      physicalasset:"Physical Real Estate",
      physicalassetvalue:"+0.34%"
    },
    {
      btc:"1.25BTC",
      price:"$2,4506",
      physicalasset:"Physical Real Estate",
      physicalassetvalue:"+0.34%"
    },
    {
      btc:"1.25BTC",
      price:"$2,4506",
      physicalasset:"Physical Real Estate",
      physicalassetvalue:"+0.34888%"
    },
  ]
  return (
   <>
   <div className='container-fluid portfolioAsset'>
    <p>Your Assets</p>
    <div className='d-flex flex-wrap'>
      {
assets.map((ele,i)=>{
  return  <div className='portfolioAssetdata' key={i}>
  <div className='d-flex justify-content-between'>
 <div>
 <p className='m-0'>{ele.btc}</p>
   <p>{ele. price}</p>
 </div>
 <div>
 <img src={dotimg} alt="" />
 </div>
  </div>

  <div className='portfolioAssetdatabottom d-flex justify-content-between'>
      <p className='m-0'>{ele.physicalasset}</p>
      <p className='m-0'>{ele.physicalassetvalue}</p>
  </div>
</div>
})
      }
   
    </div>

    
   </div>
   </>
  )
}
