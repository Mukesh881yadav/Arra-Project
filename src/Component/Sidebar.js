import React from 'react'
import '../asset/css/Sidebar.css' 
import sidebarimg from '../asset/img/AraaLogo.png'
import topstories from  '../asset/img/topstories.png'
import guid from  '../asset/img/guid.png'
import help from  '../asset/img/help.png'


export default function Sidebar() {
  return (
  <>
  <div>
        <div id='araa-logo' className='text-center'>
          <img src={sidebarimg} alt="" className='img-fluid' />
        </div>
       
           <ul className="mt-4" id='sidebardata'>
                <li className=""><a href=""><img src={guid} alt="" /><span className='text-link'>All Assets</span></a></li>
                <li className=""><a href=""><img src={topstories} alt="" /><span className='text-link'>Stories</span></a></li>
                <li className=""><a href=""><img src={ guid } alt="" /><span className='text-link'>Guides & Tutorials</span></a></li>
                <li className=""><a href=""><img src={help} alt="" /><span className='text-link'>Help</span></a></li>
            </ul>
        
  </div>
  </>
  )
}