import React from 'react'
import Portfolio from '../Component/Portfolio'
import PortfolioAsset from '../Component/PortfolioAsset'
import '../asset/css/dashboard.css'

export default function Dashboard() {
  return (
    <>
    <div className='d-flex' id='dashboardalign'>
    <Portfolio/>
    <PortfolioAsset/>
    </div>
    </>
  )
}
