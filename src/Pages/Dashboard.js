import React from 'react'
import Portfolio from '../Component/Portfolio'
import PortfolioAsset from '../Component/PortfolioAsset'
import '../asset/css/dashboard.css'
import DashboradRealestate from '../Component/DashboradRealestate'
import Dashboardperformence from './Dashboardperformence'

export default function Dashboard() {
  return (
    <>
    <div className='d-flex' id='dashboardalign'>
    <Portfolio/>
    <PortfolioAsset/>
    </div>

    <div className='d-flex justify-content-between mt-5'>
      <Dashboardperformence/>
      <DashboradRealestate/>
    </div>

    </>
  )
}
