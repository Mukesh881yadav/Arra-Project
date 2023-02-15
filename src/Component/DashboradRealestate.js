import React from 'react'
import realeaste from '../asset/img/Group 372.png'
import '../asset/css/DashboradRealestate.css'
export default function dashboradRealestate() {
  return (
   <>
   <div className='freerealestte'>
      <div>
        <h3>Get $10 in free real estate </h3>
        <p className='freerealestte-firstpara m-0'>
        Give a friend the gift of free real estate</p>
        <p className='freerealestte-secondtpara'>
        Invite a friend to araa and you’ll both reciece $10 in free real estate assets when they buy or sell their first $100 on 
        </p>
        <input type="text" name="" id="" placeholder='Enter emial address'/>
        <a href="">Enter</a>
        <div className='mt-3 freerealestteimg ' >
          <img src={realeaste} alt="" />
          <div className='d-flex  freerealest-bottom mt-4' >
            <p className='m-0'>Only certain users can accept your invitation.</p>
            <p className='text-end m-0'>View Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
   </>
  )
}
