import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Home from './components/pages/Home';
import Navbar from './components/Outer/Navbar';
import {BrowserRouter as Router,
  Route,
  Switch,
  }from 'react-router-dom'
import Nothing from './components/pages/Nothing';
import Add from './components/users/Add';
import Edit from './components/users/Edit';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Home}/>
      
      <Route exact path="/users/Add" component={Add}/>
      <Route exact path="/users/Edit/:num" component={Edit}/>
      
      <Route component={Nothing}/>
      </Switch>
      
    </div>
    </Router>
  );
}

export default App;
    

