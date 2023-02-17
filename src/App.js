
import './App.css';
import Sidebar from './Component/Sidebar';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import {HashRouter as Router,Routes,Route} from 'react-router-dom'
// BrowserRouter basename={process.env.PUBLIC_URL}
import Leaderboard from './Pages/Leaderboard';
import Dashboard from './Pages/Dashboard';
import Community from './Pages/Community';
import Browse from './Pages/Browse';
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
      <Route path='/browse'element={<Browse/>}></Route>
      
    </Routes>
    </div> 
      
      </div>
      </Router>
    </>
  );
}

export default App;
