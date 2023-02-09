import React from 'react'
import Navbar from '../Component/Navbar';    
import Sidebar from '../Component/Sidebar';
import Topstories  from '../Component/Topstories';
import Card from '../Component/Card.js';
import '../asset/css/Sidebar.css' 
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
export default function Home() {
   
  return (
    
    <>
        <Card/>
        <Topstories/>
    </>
  )
}
