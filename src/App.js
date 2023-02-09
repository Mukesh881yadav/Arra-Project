
import './App.css';
import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Leaderboard from './Pages/Leaderboard';
import Dashboard from './Pages/Dashboard';
import Community from './Pages/Community';
import Tools from './Pages/Tools';



function App(){
  
  return (
    <>
      <Router>   
   <div className='d-flex' >
      <div id='sidebarparent-content'><Sidebar/></div>


      <div className='rightsidedata'>
        <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/leaderboard'element={<Leaderboard/>}/>
      <Route path='/dashboard'element={<Dashboard/>}></Route>
      <Route path='/community'element={<Community/>}></Route>
      <Route path='/tool'element={<Tools/>}></Route>
      
    </Routes>
    </div> 
      
      </div>
      </Router>
    </>
  );
}

export default App;
