import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import './App.scss'

import Cart from '../src/pages/Cart/Cart'
import Shop from '../src/pages/Shop/Shop'


function App() {
  return (
    <div className="App">      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
     </Router>
    </div>
  );
}

export default App;
