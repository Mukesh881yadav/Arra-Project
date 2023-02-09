import React from 'react' ;
import '../asset/css/Leaderboard.css';
import '../asset/css/PVPasset.css';
import bgimg  from '../asset/img/Group 370.png';


export default function Leaderboardterm() {
  const leaderboarddata=[
    {
      tabletitle:"Virtual Land & Real Esate/NFTS (Metaverse/Web3/Gaming)",
      worldheading:"WORLD1",market:"MARKET CAP",floor:"FLOOR",onedvol:"1D VOl",onedpercent:"1D%", sevendvol:"7D VOL",sevendper:"7D %",owners:"OWNERS",backcolor:"leaderorange",
      
        
      
      tableinsidedata:[
        {
          srno:"1",tableimg:bgimg,marketdata:"446,117.68",floordata:"2.43",onedvoldata:"77.85",onedpercentdaya:"-55.21",sevendvoldata:"873.98",sevendperdata:"-.52.61",owners:"7.1K",
        },
        {
          srno:"2",tableimg:bgimg,marketdata:"446,117.68",floordata:"2.43",onedvoldata:"77.85",onedpercentdaya:"-55.21",sevendvoldata:"873.98",sevendperdata:"-.52.61",owners:"7.1K"
        },
        {
          srno:"3",tableimg:bgimg,marketdata:"446,117.68",floordata:"2.43",onedvoldata:"77.85",onedpercentdaya:"-55.21",sevendvoldata:"873.98",sevendperdata:"-.52.61",owners:"7.1K"
        },
        {
          srno:"4",tableimg:bgimg,marketdata:"446,117.68",floordata:"2.43",onedvoldata:"77.85",onedpercentdaya:"-55.21",sevendvoldata:"873.98",sevendperdata:"-.52.61",owners:"7.1K"
        },
        {
          srno:"5",tableimg:bgimg,marketdata:"446,117.68",floordata:"2.43",onedvoldata:"77.85",onedpercentdaya:"-55.21",sevendvoldata:"873.98",sevendperdata:"-.52.61",owners:"7.1K"
        },

      ]

    },
    {
      tabletitle:"Virtual Land & Real Esate/NFTS (Metaverse/Web3/Gaming)",
      worldheading:"WORLD2",market:"MARKET CAP",floor:"FLOOR",onedvol:"1D VOl",onedpercent:"1D%", sevendvol:"7D VOL",sevendper:"7D %",owners:"OWNERS",backcolor:"leaderpurple"
      ,
      tableinsidedata:[
        {
          srno:"1",tableimg:bgimg,marketdata:"446,117.68",floordata:"2.43",onedvoldata:"77.85",onedpercentdaya:"-55.21",sevendvoldata:"873.98",sevendperdata:"-.52.61",owners:"7.1K"
        },
        {
          srno:"2",tableimg:bgimg,marketdata:"446,117.68",floordata:"2.43",onedvoldata:"77.85",onedpercentdaya:"-55.21",sevendvoldata:"873.98",sevendperdata:"-.52.61",owners:"7.1K"
        },
        {
          srno:"3",tableimg:bgimg,marketdata:"446,117.68",floordata:"2.43",onedvoldata:"77.85",onedpercentdaya:"-55.21",sevendvoldata:"873.98",sevendperdata:"-.52.61",owners:"7.1K"
        },
        {
          srno:"4",tableimg:bgimg,marketdata:"446,117.68",floordata:"2.43",onedvoldata:"77.85",onedpercentdaya:"-55.21",sevendvoldata:"873.98",sevendperdata:"-.52.61",owners:"7.1K"
        },
      

      ]

    },
    {
      tabletitle:"Virtual Land & Real Esate/NFTS (Metaverse/Web3/Gaming)",
     
      worldheading:"WORLD3",market:"MARKET CAP",floor:"FLOOR",onedvol:"1D VOl",onedpercent:"1D%", sevendvol:"7D VOL",sevendper:"7D %",owners:"OWNERS",backcolor:"leaderblue",
      tableinsidedata:[
        {
          srno:"1",tableimg:bgimg,marketdata:"446,117.68",floordata:"2.43",onedvoldata:"77.85",onedpercentdaya:"-55.21",sevendvoldata:"873.98",sevendperdata:"-.52.61",owners:"7.1K"
        },
        {
          srno:"2",tableimg:bgimg,marketdata:"446,117.68",floordata:"2.43",onedvoldata:"77.85",onedpercentdaya:"-55.21",sevendvoldata:"873.98",sevendperdata:"-.52.61",owners:"7.1K"
        },
        {
          srno:"3",tableimg:bgimg,marketdata:"446,117.68",floordata:"2.43",onedvoldata:"77.85",onedpercentdaya:"-55.21",sevendvoldata:"873.98",sevendperdata:"-.52.61",owners:"7.1K"
        },
        {
          srno:"4",tableimg:bgimg,marketdata:"446,117.68",floordata:"2.43",onedvoldata:"77.85",onedpercentdaya:"-55.21",sevendvoldata:"873.98",sevendperdata:"-.52.61",owners:"7.1K"
        },
      ]

    }

    
  ]
  return (
 <>
<div className='container-fluid'>
 <div className='row'>
  <div className='col-12' id='leaderboard-parent'>
     <h4>Leaderboards</h4>
     <div className='searchbox-files d-flex'>
        <div className='search-box'>
          <input type="text"  placeholder='Search any real estate digital: crowdfunded/tokenized/virtual NFT, ranked by worlds, communities, lands, and owners.'/>
        </div>
        <div className='files'>
           <input type="text" />
        </div>
     </div>
     {
       leaderboarddata.map((element,i)=>{
        // console.log(element, "aniket");
  // console.log(element.tableinsidedata,"mukesh");
  let mukeshdata=[...element.tableinsidedata];
  console.log(mukeshdata, "our data");
  // mukeshdata.map((e, i)=>{
  //   console.log(e.srno, "srno");
  // })
    
  return   <div className='table-data mt-4' key={i}>
      <h4>{element.tabletitle}</h4>
      <div className='tabel-content'>
        <table className=''  id='table-data'>
          <thead>
            <tr className={`${element.backcolor}`}>
              <th  id='blankheading'></th>
              <th className='tableheaiding'>{element.worldheading}</th>
              <th className='tableheaiding'>MARKET CAP</th>
              <th className='tableheaiding'>FLOOR</th>
              <th className='tableheaiding'>1D VOL</th>
              <th className='tableheaiding'>1D %</th>
              <th className='tableheaiding'>7D VOl</th>
              <th className='tableheaiding'>7D%</th>
              <th  className='tableheaiding'>OWNERS</th>
            </tr>
          </thead>
          <tbody>
          {
                  mukeshdata.map((item)=>( <tr className='tablerow'>
          
                <td  className='blankdata'>{item.srno}</td>
                  <td className='p-2'>
                    <div  className='d-flex tabel-insideconent'>
                      <img src={bgimg} alt="" />
                      <div className='worldtabledata'>
                        <p className='m-0 tabledata'>Araa</p>
                        <p className='tabledata'>+2.54%</p>
                      </div>
                    </div>
                  </td>
                  <td className='tabledata'>446,117.68</td>
                  <td className='tabledata'>2.43</td>
                  <td className='tabledata'>77,85</td>
                  <td className='tabledata'>-55.21</td>
                  <td className='tabledata'>873.98</td>
                  <td className='tabledata'>-52.61</td>
                  <td className='tabledata'>7.1K</td>
                </tr>))
              }
         
            
          </tbody>
        </table>
      </div>

     </div> 
       })
}
     
  </div>
 </div>
</div>
 
 </>
  )
}
