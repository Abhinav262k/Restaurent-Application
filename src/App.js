import Header from './Components/Header'
import Footer from './Components/Footer';
import Restaurantlist from './Components/Restaurantlist';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Viewrestaurant from './Components/Viewrestaurant';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
        <Header/>
        <h3></h3>
        <Routes>
        <Route path='/' element={<Restaurantlist/>}/>
        <Route path='/viewrestaurant/:id' element={<Viewrestaurant/>}/>
        </Routes>
        
       <Footer/>
       
      </header>
      </Router>
    </div>
  );
}

export default App;
