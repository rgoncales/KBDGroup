import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import './themes-dist-5.1-gcweb/css/theme.css';
import Navbar from './components/Navbar';
import {About, Greetings, Static, Home} from './pages/content'

function App() {
  return (
    <div id='app'>
      <Navbar/>
      <Router>
        <Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/hello">
            <Greetings/>
          </Route>
          <Route path="/more-content">
            <Static/>
          </Route>
          <Route path="/">
            <Home/>
          </Route>
        </Switch>
    </Router>

    </div>
  );
}

export default App;
