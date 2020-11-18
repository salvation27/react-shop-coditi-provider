import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Details from './components/Details'
import Payment from './components/Payment'
import {Route,Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Switch>
       <Route exact path='/'  component={Home}/>
       <Route exact path='/about'  component={About}/>
       <Route exact path='/products'  component={Products}/>
       <Route exact path='/products/:id'  component={Details}/>
       <Route exact path='/payment'  component={Payment}/>
     </Switch>
    </div>
  );
}

export default App;
