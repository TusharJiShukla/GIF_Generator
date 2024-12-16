import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div className="bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-500 w-full h-screen flex flex-col 
    background relative overflow-x-hidden items-center">     
       <h1 className='bg-white rounded-lg w-11/12 text-center mt-[40px] font-extrabold text-3xl'>RANDOM GIF</h1>

      <div className='flex  w-2/5 items-center p-3 justify-evenly mt-[20px] rounded-lg
       bg-blue-400 border border-blue-950'>

       <NavLink to='/'><button className=' border-blue-950 border p-2 rounded-lg bg-white hover:bg-purple-300 
         hover:scale-[1.2] duration-200 ease-in-out font-bold'>Random</button></NavLink> 
        <NavLink to='/tag'><button className=' border-blue-950 border p-2 rounded-lg bg-white
         hover:bg-purple-300 hover:scale-[1.2] duration-200 ease-in-out font-bold'>Tag</button>
      </NavLink>

      </div>

      <Routes>
        <Route path='/' element={<Random></Random>}></Route>
        <Route path='/tag' element={<Tag></Tag>}></Route>
        <Route></Route>
      </Routes>
    </div>
  
  </Router>
  );
}

export default App;
