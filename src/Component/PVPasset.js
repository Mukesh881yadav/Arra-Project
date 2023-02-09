import React from 'react'
import SMRT from '../asset/img/SMRT.png'
import GSKD from '../asset/img/GSKD.png'
import AQAR from '../asset/img/AQAR.png'
import '../asset/css/PVPasset.css'
import { useState } from 'react'



export default function PVPasset(props) {
    
    
    const { dataAsset } = props
    // console.log(dataAsset.backcolor);
    return (
        <>
        <div className='container-fluid'>
        <div className=''>
            <div>
            <h4 className='assetHeading'>Physical Assets</h4>
            <div className={`col-12 p-3 ${dataAsset.backcolor}`} >
            <div className='row'>
                <div className='col-12'>
                <h5 className='physicalAssetinsidetitle'>{dataAsset.title}</h5>
                <p className='physicaltitleTransaction'>{dataAsset.subtitle}</p>
                </div>
                <hr/>
            </div>
            <div className='row'>
                <div className='col-12'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Chanee</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            dataAsset?.data?.map((element, i) => {
                                // console.log(element);
                                return <tr key={i}>
                                    <td scope="" className='d-flex'>
                                        <img src={SMRT} alt="" className='img-fluid'/>
                                        <div className='ms-3'>
                                            <p className='m-0 p-0 card-titlefirst'>{element.namefirst}</p>
                                            <p className='m-0 p-0 card-titlefirst'>{element.namesecond}</p>
                                        </div>
                                    </td>
                                    <td className='card-titlefirst'>{element.price}</td>
                                    <td className='chanee'>{element.chanee}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
   </>
  )
}
