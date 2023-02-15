import React from 'react'
import '../asset/css/Dashboardperformence.css'
import starimg from '../asset/img/Path 542.png'
import gskd from '../asset/img/GSKD.png'
// import '../asset/img/path 450.png'
export default function Dashboardperformence()
{ 
let performanncedata=[
    {
        name:"Name",
        price:"price",
        chanee:"Chanee",
        marketcap:"Market Cap",
        watch:"Watch",
        insidedata:[
            {smartcrowd:"SmartCrowd",
             pricedata:"$2.56",
            chaneedata:"+13.65%",
             marketcapdata:"$400.8M"}
        ]
    },
    {
        name:"Name",
        price:"price",
        chanee:"Chanee",
        marketcap:"Market Cap",
        watch:"Watch",
        insidedata:[
            {smartcrowd:"SmartCrowd",
             pricedata:"$2.56",
            chaneedata:"+13.65%",
             marketcapdata:"$400.8M"}
        ]
    },
    {
        name:"Name",
        price:"price",
        chanee:"Chanee",
        marketcap:"Market Cap",
        watch:"Watch",
        insidedata:[
            {smartcrowd:"SmartCrowd",
             pricedata:"$2.56",
            chaneedata:"+13.65%",
             marketcapdata:"$400.8M"}
        ]
    },
    {
        name:"Name",
        price:"price",
        chanee:"Chanee",
        marketcap:"Market Cap",
        watch:"Watch",
        insidedata:[
            {smartcrowd:"SmartCrowd",
             pricedata:"$2.56",
            chaneedata:"+13.65%",
             marketcapdata:"$400.8M"}
        ]
    },
    {
        name:"Name",
        price:"price",
        chanee:"Chanee",
        marketcap:"Market Cap",
        watch:"Watch",
        insidedata:[
            {smartcrowd:"SmartCrowd",
             pricedata:"$2.56",
            chaneedata:"+13.65%",
             marketcapdata:"$400.8M"}
        ]
    },
      {
        name:"Name",
        price:"price",
        chanee:"Chanee",
        marketcap:"Market Cap",
        watch:"Watch",
        insidedata:[
            {smartcrowd:"SmartCrowd",
             pricedata:"$2.56",
            chaneedata:"+13.65%",
             marketcapdata:"$400.8M"}
        ]
    },
]

  return (
   <div>
    <div className='performannce-nav d-flex justify-content-between'>
        <p>Performance</p>
        <div className='performannce-navbtn d-flex '>
        <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle hoursbtn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  24 hrs
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>


<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle topgainers" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
   Top Gainers
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
        </div>
    </div>

     <div>
     <table class="table">
  <thead>
    <tr>
      
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Chanee</th>
      <th scope="col">Market Cap</th>
      {/* <th scope="col">Watch</th> */}
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <div className='d-flex tableimg'>
        <img src={gskd} alt="" className='mx-2' />
      <p>SmartCrowd <br />
         SMRTCRWD</p>
         </div>
      </th>
      <td>$2.56</td>
      <td>$2.56</td>
      <td>+13.65%</td>
      <td colspan="" className='starimg'><img src={starimg} alt="" /></td>
    </tr>
    <tr>
      <th scope="row">
        <div className='d-flex tableimg'>
        <img src={gskd} alt="" className='mx-2' />
      <p>SmartCrowd <br />
         SMRTCRWD</p>
         </div>
      </th>
      <td>$2.56</td>
      <td>$2.56</td>
      <td>+13.65%</td>
      <td colspan="" className='starimg'><img src={starimg} alt="" /></td>
    </tr>
    <tr>
      <th scope="row">
        <div className='d-flex tableimg'>
        <img src={gskd} alt="" className='mx-2' />
      <p>SmartCrowd <br />
         SMRTCRWD</p>
         </div>
      </th>
      <td>$2.56</td>
      <td>$2.56</td>
      <td>+13.65%</td>
      <td colspan="" className='starimg'><img src={starimg} alt="" /></td>
    </tr>
    <tr>
      <th scope="row">
        <div className='d-flex tableimg'>
        <img src={gskd} alt="" className='mx-2' />
      <p>SmartCrowd <br />
         SMRTCRWD</p>
         </div>
      </th>
      <td>$2.56</td>
      <td>$2.56</td>
      <td>+13.65%</td>
      <td colspan="" className='starimg'><img src={starimg} alt="" /></td>
    </tr>
  </tbody>
</table>
     </div>
   </div>
  )
}
