import React from 'react';
import dotimg from '../asset/img/dot.png'
import '../asset/css/portfolioasset.css'



export default function PortfolioAsset() {
  return (
   <>
   <div className='container-fluid portfolioAsset'>
    <p>Your Assets</p>
    <div className='d-flex flex-wrap'>
    <div className='portfolioAssetdata'>
        <div className='d-flex justify-content-between'>
       <div>
       <p className='m-0'>1.25 BTC</p>
         <p>$2,4506</p>
       </div>
       <div>
       <img src={dotimg} alt="" />
       </div>
      
        </div>

        <div className='portfolioAssetdatabottom d-flex justify-content-between'>
            <p className='m-0'>Physical Real Estate</p>
            <p className='m-0'>+0.34%</p>
        </div>
    </div>
    <div className='portfolioAssetdata'>
        <div className='d-flex justify-content-between'>
       <div>
       <p className='m-0'>1.25 BTC</p>
         <p>$2,4506</p>
       </div>
       <div>
       <img src={dotimg} alt="" />
       </div>
      
        </div>

        <div className='portfolioAssetdatabottom d-flex justify-content-between'>
            <p className='m-0'>Physical Real Estate</p>
            <p className='m-0'>+0.34%</p>
        </div>
    </div>
    <div className='portfolioAssetdata'>
        <div className='d-flex justify-content-between'>
       <div>
       <p className='m-0'>1.25 BTC</p>
         <p>$2,4506</p>
       </div>
       <div>
       <img src={dotimg} alt="" />
       </div>
      
        </div>

        <div className='portfolioAssetdatabottom d-flex justify-content-between'>
            <p className='m-0'>Physical Real Estate</p>
            <p className='m-0'>+0.34%</p>
        </div>
    </div>
    <div className='portfolioAssetdata'>
        <div className='d-flex justify-content-between'>
       <div>
       <p className='m-0'>1.25 BTC</p>
         <p>$2,4506</p>
       </div>
       <div>
       <img src={dotimg} alt="" />
       </div>
      
        </div>

        <div className='portfolioAssetdatabottom d-flex justify-content-between'>
            <p className='m-0'>Physical Real Estate</p>
            <p className='m-0'>+0.34%</p>
        </div>
    </div>
    </div>
   </div>
   </>
  )
}
