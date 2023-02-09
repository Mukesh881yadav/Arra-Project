import React from 'react'
import '../asset/css/Communitynavbar.css'
import Select from 'react-select'

 const navbardata=[
    {vr:"Virtual Land"},
    {vr:"Crowdfunding"},
    {vr:"NFTS"},
    {vr:"Tokenization"},
    {vr:"Hybrid Link"},
    {vr:'My Store'},

]
export default function Communitynavbar() {
  return (
   <>

<div className='communitynav-parent'>
    <div className='communitynav'>
         <ul className='p-0 m-0'>
            {
             navbardata.map((element,i)=>{
                console.log(element.vr);
               return <li key={i} ><a href="" >{element.vr}</a></li>
             })   
            }
           
         </ul>    
    </div>
    <div className='communitynavsearch'>
        <span>
        <input type="text" />
        </span>
        <select id='commselect' class="form-select" aria-label="Default select example">
  <option selected >RECENTLY LISTED</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>

<div class="form-check form-switch" id='togglebtn'>
  <input class="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked/>
  <label class="form-check-label" for="flexSwitchCheckChecked">ON STATE</label>
</div>
    </div>
</div>
   </>
  )
}
