import './App.css';
import LoginForm from './components/Login';
import {BrowserRouter as Router, Route,Routes}from 'react-router-dom';
import Signup from './components/Signup';
import Home from './components/Home';
import Cart from './components/Cart';
import Feedback from './components/feedback';
import Wood from './components/wood';
import HotWheels from './components/hotwheels';
import Stuffed from './components/stuffed';
import Transformers from './components/transformers';
import Lego from './components/lego';
import Profile from './components/profile';
import Contact from './components/contact';
import { Provider } from 'react-redux';
import store from './components/store';
import NewBorn from './components/newborn';

function App() {
  return (
    <div className="App">
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path='/home'element={<Home/>}/>

        <Route path='/wood' element={<Wood/>}/>
        <Route path='/transformer' element={<Transformers/>}/>
        <Route path='/hotwheels' element={<HotWheels/>}/>
        <Route path='/lego' element={<Lego/>}/>
        <Route path='/stuffed' element={<Stuffed/>}/>
        <Route path='/newborn' element={<NewBorn/>}/>
        
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/feedback' element={<Feedback/>}/>
        <Route path='/cart'element={<Cart/>}/>
      </Routes>
    </Router>
    </Provider>
    </div>
  );
}

export default App;