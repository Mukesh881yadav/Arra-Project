import React from 'react'
import PVPasset from './PVPasset';

export default function Card(props) {
  
    const physicalAssets = [
        { title: 'Crowdfunded & Tokenization Assets 1', subtitle: 'Recent Transactions', 
          backcolor:'physicalAsset',
           topstoriesimg:'bitcoin', 
          data:[
            { namefirst: 'SMTCRE',namesecond:"SMRTCRWD", price: '$2.56', chanee: '+13.86%'},
            { namefirst: 'SMTCRE',namesecond:"SMRTCRWD",price: '$2.56', chanee: '+13.86%'},
            { namefirst: 'SMTCRE',namesecond:"SMRTCRWD", price: '$2.56', chanee: '+13.86%'}
          ]
        },
        { title: 'Crowdfunded & Tokenization Assets 2', subtitle: 'Recent Transactions', 
        backcolor:'VirtualDigitalAssets',
        topstoriesimg:'bnaking',
          data : [
            { namefirst: 'SMTCRE',namesecond:"SMRTCRWD", price: '$2.56', chanee: '+13.86%'},
            { namefirst: 'SMTCRE',namesecond:"SMRTCRWD", price: '$2.56', chanee: '+13.86%'},
            { namefirst: 'SMTCRE',namesecond:"SMRTCRWD", price: '$2.56', chanee: '+13.86%'}
          ]
        },
        { title: 'Crowdfunded & Tokenization Assets 3', subtitle: 'Recent Transactions', 
          backcolor:'PhyrtualHybridAssets',
          topstoriesimg:'bnaking',
          data : [
            { namefirst: 'SMTCRE',namesecond:"SMRTCRWD", price: '$2.56', chanee: '+13.86%'},
            { namefirst: 'SMTCRE',namesecond:"SMRTCRWD", price: '$2.56', chanee: '+13.86%'},
            { namefirst: 'SMTCRE',namesecond:"SMRTCRWD", price: '$2.56', chanee: '+13.86%'}
          ]
        }
      ]
    //   physicalAssets?.map((asset, index) => {
    //     console.log(asset);
    //   })
  return (
   <>
    <div className='d-flex mt-5'>
          {
            physicalAssets?.map((asset, index) => {
            //   console.log(asset);
              return<PVPasset key={index} dataAsset={asset}/>
            })
          }    
       </div>
   </>
  )
}
