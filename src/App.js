import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' exact component={Services} />
        <Route path='/products' exact component={Products} />
        <Route path='/signup' exact component={SignUp} />
      </Switch>
   <Footer />
    </Router>
    </>
  );
}

export default App;