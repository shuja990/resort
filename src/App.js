import React from 'react';
import './App.css';
import Error from './pages/error'
import Home from './pages/home'
import Rooms from './pages/rooms'
import {Switch,Route} from 'react-router-dom'
import SingleRoom from './pages/singleroom';
import NavBar from './components/NavBar.jsx'
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms/" component={Rooms}/>
        <Route exact path="/rooms/:slug" component={SingleRoom}/>
        <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
